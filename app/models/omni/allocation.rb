class Omni::Allocation < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :allocations
  self.primary_key                = :allocation_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :allocation_id,                        :presence      => true
  validates :display,                                 :uniqueness    => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :allocation_id,                          :with => :guid
  default :allocation_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"ALLOCATION_NBR"
  default :display,                              :override  =>  false,        :to   => lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.state}"}
  default :units_to_allocate,                     :override  =>  true,        :to    => 0
  default :is_destroyed,                           :override  =>  false,        :to    => false
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :allocation_details,     :class_name => 'Omni::AllocationDetail',    :foreign_key => 'allocation_id'
  has_many     :inventories,           :class_name => 'Omni::Inventory',         :foreign_key => 'sku_id'
  belongs_to   :sku,                           :class_name => 'Omni::Sku',                      :foreign_key => 'sku_id'
  belongs_to   :location,                    :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  belongs_to   :allocation_profile,      :class_name => 'Omni::AllocationProfile',   :foreign_key => 'allocation_profile_id'
  # ASSOCIATIONS (End)


    # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                     :to => 'location.display'
    map :allocation_profile_display,       :to => 'allocation_profile.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================

  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================

  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
  # Exact match attributes
    string   :allocation_id
    string   :allocatable_id
    string   :allocatable_type
    string   :allocation_nbr
    string   :display
    string   :state
    string   :location_id
    string   :sku_id
  # Partial match (contains) attributes
    text     :display_fulltext, :using => :display
    text     :state_fulltext, :using => :state
    text     :location_display_fulltext, :using => :location_display
    text     :sku_display_fulltext, :using => :sku_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do; end

    state :approved do; end

    state :transfer_request do; end

    state :shipped do
    end

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :process_approve
    after_transition :on => :transfer, :do => :process_transfer
    after_transition :on => :ship, :do => :process_ship

    event :approve do
      transition :draft => :approved
    end

    event :transfer do
      transition :approved => :transfer_request
    end

    event :ship do
      transition :transfer_request => :shipped
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def process_approve
  end

  def process_transfer
  end

  def process_ship
  end


  # HELPERS (Start) =====================================================================
  def calculate(allocation_profile, sku_id, units_to_allocate, locked_units, locked_locations, purchase_detail_id)
    allocation_formula = allocation_profile.allocation_formula
    temp_needs = {}
    temp_allocations = {}
    total_units_needed=0
    units_needed=0
    remainder=0
    allocatable_units = (units_to_allocate * allocation_profile.percent_to_allocate / 100) - locked_units
    # error = 'No units available to allocate' if allocatable_units < 1
    inventories = Omni::Inventory.where(sku_id: sku_id, is_authorized: true).to_a
    inventories.reject! {|x| locked_locations.include? x.location_id}
    inventories.each do |i|
      unless allocation_formula =='BTS_NEED' or allocation_formula=='PURCHASE_ALLOCATION'
        projection_detail = i.projection_details.joins(:projection).where(:projections => {state: ['forecast','projection_1','projection_2','projecion_3','projection_4','complete']}).first
        next unless projection_detail
      end
      # puts "inventory id is #{i.inventory_id}"
      locked_locations.include? i.location_id ? units_needed = store_demand(allocation_formula, i) : 0
      temp_needs.merge!(i.location_id => units_needed)
    end

    total_units_needed = (temp_needs.map {|k,v| v}).sum
    remainder = allocatable_units - total_units_needed
    temp_allocations = temp_needs

    case
      when remainder == 0 # DEMAIND = SUPPLY
        temp_needs.each {|k,v| temp_allocations.merge!(k=>v.to_f)}

      when remainder > 0 # EXCESS SUPPLY
        case allocation_profile.excess_supply_option
          when 'APPORTION_TO_STORES'
            # Set each Output table location's units_allocated = units_needed
            # Calculate each Output table location's percent of the total_units_needed as allocation_percent
            # Calculate remaining_units as allocatable_units minus total_units_needed
            # Split the remaining_units among the stores according to each store's allocation_percent (remaining_units * allocation_percent / 100)
            proportions = temp_needs.inject({}) { |h, (k, v)| h[k] = BigDecimal.new(v)/BigDecimal.new(total_units_needed).floor; h }
            proportions.each { |k,v| temp_allocations[k] += remainder*v}

          when 'LEAVE_IN_WAREHOUSE'
            # Set each Output table location's units_allocated = units_needed
            temp_needs.each {|k,v| temp_allocations.merge!(k=>v.to_f)}
        end

      when remainder < 0 # EXCESS DEMAND
        case allocation_profile.excess_demand_option
          when 'APPORTION_BY_PERCENT'
            # Calculate each Output table location's percent of the total_units_needed as allocation_percent
            # Multiply each Output table location's allocation_percent times the remaining_units calculated above to get units_allocated
            proportions = temp_needs.inject({}) { |h, (k, v)| h[k] = BigDecimal.new(v)/BigDecimal.new(total_units_needed).floor; h }
            proportions.each { |k,v| temp_allocations[k] = (allocatable_units*v).round.to_f}

          when 'FILL_LARGEST_DEMAND'
         # sort location hash descending by units_needed
         # start at first entry in hash and give the allocation all of its units_needed
         # continue throught the hash giving each locattion all of its needed units until all allocatable_units have been allocated
            temp_needs.sort_by {|k,v| v}.reverse.each do |k,v|
              amount_to_allocate = allocatable_units > v ? v : allocatable_units
              temp_allocations.merge!(k=>amount_to_allocate.to_f)
              allocatable_units -= amount_to_allocate
            end

        end

    end
    temp_allocations
  end

  def store_demand(allocation_formula, inventory)
    puts "In store demand, allocation_formula is #{allocation_formula}"
    projection_detail = inventory.projection_details.joins(:projection).where(:projections => {state: ['forecast','projection_1','projection_2','projecion_3','projection_4','complete']}).first unless allocation_formula =='BTS_NEED' or allocation_formula=='PURCHASE_ALLOCATION'

    case allocation_formula

      when 'BTS_NEED'
        bts_detail = inventory.bts_details.joins(:bts).where(:bts => {state: 'active'}).first
        units_needed =  bts_detail ? bts_detail.need : 0

      when /PROJECTION_\d_UNITS/, 'LAST_FORECAST_UNITS'
        units_needed = projection_detail ? projection_detail.send(allocation_formula.downcase) : 0

      when 'APPROVED_PROJECTION'
        case projection_detail.projection.state

          when 'forecast', 'projection_1_units'
            units_needed = projection_detail.state == 'draft' ? projection_detail.send("last_forecast_units") : projection_detail.send("projection_1_units")

          when /projection_\d/
            phase = projection_detail.projection.state.byteslice(11).to_i
            phase -= 1 if projection_detail.state == 'draft'
            units_needed = projection_detail.send("projection_#{phase-1}_units")

          when 'complete'
            units_needed = projection_detail.send("projection_4_units")

        end

      when 'PURCHASE_ALLOCATION'
        # This formula is only valid when allocating a Receipt.
        # purchase allocation: store demand = allocated_units from the associated PurchaseAllocation.
        # If it is used for a Purchase or Inventory allocation, the calculation will not create any allocations.

        units_needed = 0

    end
    units_needed -= (inventory.on_hand_units + inventory.supplier_on_order_units) if ['LAST_FORECAST_UNITS','APPROVED_PROJECTION',/PROJECTION_\d_UNITS/].include? allocation_formula and units_needed > 0
    # puts "units_needed #{units_needed}"
    units_needed
  end
  # HELPERS (End)

end # class Omni::AllocationProfile
