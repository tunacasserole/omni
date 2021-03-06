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
  validates :allocation_profile_id,                :presence      => true
  validates :location_id,                          :presence      => true
  validates :sku_id,                               :presence      => true
  # validates :display,                                 :uniqueness    => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :allocation_id,                          with: :guid
  default :allocation_nbr,                         override: false,        with: :sequence,         named: "ALLOCATION_NBR"
  default :display,                                override: false,        :to   => lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.state}"}
  default :units_to_allocate,                      override: false,        to: 0
  default :is_destroyed,                           override: false,        to: false
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :allocation_details,     class_name: 'Omni::AllocationDetail',    foreign_key: 'allocation_id'
  belongs_to   :inventory,              class_name: 'Omni::Inventory',         foreign_key: 'inventory_id'
  belongs_to   :sku,                    class_name: 'Omni::Sku',                 foreign_key: 'sku_id'
  belongs_to   :location,               class_name: 'Omni::Location',               foreign_key: 'location_id'
  belongs_to   :allocation_profile,     class_name: 'Omni::AllocationProfile',   foreign_key: 'allocation_profile_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                       to: 'sku.display'
    map :location_display,                  to: 'location.display'
    map :allocation_profile_display,        to: 'allocation_profile.display'
    map :on_hand_units,                     to: 'inventory.on_hand_units'
    map :in_transit_units,                  to: 'inventory.in_transit_units'
    map :non_sellable_units,                     to: 'inventory.non_sellable_units'
    map :allocated_units,                     to: 'inventory.allocated_units'
    map :reserved_units,                     to: 'inventory.reserved_units'
    map :shipping_units,                     to: 'inventory.shipping_units'
    map :work_in_process_units,                     to: 'inventory.work_in_process_units'
    map :supplier_on_order_units,                     to: 'inventory.supplier_on_order_units'
    map :warehouse_on_order_units,                     to: 'inventory.warehouse_on_order_units'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook :before_save, :set_inventory, 10

  def set_inventory
    # puts "SETTING INVENTORY"
    i=Omni::Inventory.where(sku_id: self.sku_id, location_id: self.location_id).first
    self.inventory_id = i.inventory_id if i
  end
  # HOOKS (End)

  # ORDERING (Start) ====================================================================
  order_search_by :allocation_nbr =>:desc
  # ORDERING (End)

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
    text     :display_fulltext, using: :display
    text     :state_fulltext, using: :state
    text     :location_display_fulltext, using: :location_display
    text     :sku_display_fulltext, using: :sku_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do; end

    state :approved do; end

    state :transfer_request do; end

    state :shipped do
    end

  ### CALLBACKS ###
    # after_transition on: :approve, do: :do_approve
    after_transition on: :transfer, do: :do_transfer
    after_transition on: :ship, do: :do_ship
    after_transition on: :allocate, do: :do_allocate

    event :approve do
      transition draft: :approved
    end

    event :transfer do
      transition :approved => :transfer_request
    end

    event :ship do
      transition :transfer_request => :shipped
    end

    event :allocate do
      transition draft: same
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  # def do_approve
  # end

  def do_transfer
    self.allocation_details.each {|x| x.transfer if x.units_allocated > 0}
  end

  def do_ship
    # self.allocations_details.each {|x| x.ship}
  end

  def do_allocate
    locked_units = 0
    locked_locations = [self.location_id]

    purchase_detail_id = nil
    allocation_details.each do |x|
      if x.state == 'locked'
        locked_units += x.units_allocated
        locked_locations << x.location_id
      else
        x.delete
      end
    end

    allocations_to_create = Omni::Allocation.calculate(self.allocation_profile_id, self.sku_id, self.units_to_allocate, locked_units, locked_locations, purchase_detail_id)
    allocations_to_create.each { |x| Omni::AllocationDetail.create(allocation_id: self.allocation_id, location_id: x[:location_id], units_allocated: x[:units_allocated], units_needed: x[:units_needed]) }
    allocations_to_create
  end

  # HELPERS (Start) =====================================================================
  def self.calculate(allocation_profile_id, sku_id, units_to_allocate, locked_units, locked_locations, purchase_detail_id)
    puts "\nin do calculate:  allocation_profile_id is #{allocation_profile_id}, sku_id is #{sku_id}, units_to_allocate is #{units_to_allocate}, locked_units is #{locked_units}, locked_locations is #{locked_locations}, purchase_detail_id is #{purchase_detail_id}"
    profile = Omni::AllocationProfile.where(allocation_profile_id: allocation_profile_id || '8A0B7946BF8311E3BF5320C9D047DD15').first
    formula = profile.allocation_formula
    temp_needs = {}
    temp_allocations = {}
    total_units_needed = 0
    units_needed = 0
    remainder = 0
    allocatable_units = (units_to_allocate * profile.percent_to_allocate / 100) - locked_units
    ##puts "allocatable_units is #{allocatable_units}"
    # error = 'No units available to allocate' if allocatable_units < 1
    inventories = Omni::Inventory.where(sku_id: sku_id, is_authorized: true).to_a
    inventories.reject! {|x| locked_locations.include? x.location_id}
    ##puts "inventories count is #{inventories.count}"
    inventories.each do |i|
      next if locked_locations.include? i.location_id #or formula == 'DIVIDE_EQUALLY'
      units_needed = store_demand(formula, i)
      ##puts "allocation formula is #{formula}"
      ##puts "units_needed is #{units_needed}"
      temp_needs.merge!(i.location_id => units_needed)
    end

    total_units_needed = (temp_needs.map {|k,v| v}).sum
    ##puts "total_units_needed is #{total_units_needed}"
    remainder = allocatable_units - total_units_needed
    temp_allocations = temp_needs.clone
    ##puts "remainder is #{remainder}"
    ##puts "temp needs count is #{temp_needs.count}"
    case
      when remainder == 0 # DEMAIND = SUPPLY
        temp_needs.each {|k,v| temp_allocations.merge!(k=>v.to_f)}

      when remainder > 0 # EXCESS SUPPLY
        ##puts "allocation_profile.excess_supply_option is #{profile.excess_supply_option}"
        case profile.excess_supply_option
          when 'APPORTION_TO_STORES'
            # Set each Output table location's units_allocated = units_needed
            # Calculate each Output table location's percent of the total_units_needed as allocation_percent
            # Calculate remaining_units as allocatable_units minus total_units_needed
            # Split the remaining_units among the stores according to each store's allocation_percent (remaining_units * allocation_percent / 100)
            proportions = temp_needs.inject({}) { |h, (k, v)| h[k] = (total_units_needed > 0 ? BigDecimal.new(v)/BigDecimal.new(total_units_needed).floor : BigDecimal.new(1) / BigDecimal.new(temp_needs.count) ) ; h }
            ##puts "\n\n temp_needs check 1\n\n"
            # temp_needs.each { |k,v| puts "k is #{k} v is #{v}" }

            ##puts "\n\n proportions check 1\n\n"
            # proportions.each { |k,v| puts "k is #{k} v is #{v}" }
            proportions.each { |k,v| temp_allocations[k] += remainder*v}


          when 'LEAVE_IN_WAREHOUSE'
            # Set each Output table location's units_allocated = units_needed
            temp_needs.each {|k,v| temp_allocations.merge!(k=>v.to_f)}

          when 'DIVIDE_EQUALLY'
            # "Allocate 1 unit to each unlocked location until all units are allocated (remainder < 1)"
            while remainder > 0 do
                # puts "remainder is #{remainder}"
              break if temp_needs.count < 1
              temp_needs.each do |k,v|
                # puts "k is #{k} v is #{v}"
                temp_allocations[k] += 1
                remainder -= 1
                break unless remainder > 0
              end
            end

            # Set each output table location's units_allocated = units_needed
            # temp_needs.each {|k,v| puts "k is #{k} and v is #{v}"}
            # temp_needs.each {|k,v| temp_allocations.merge!(k=>v.to_f)}
        end

      when remainder < 0 # EXCESS DEMAND
        case profile.excess_demand_option
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
    # temp_allocations
    allocations_to_create = []
    # puts "\n\n temp_allocations check \n\n"
    # temp_allocations.each { |k,v| puts "k is #{k} v is #{v}" }

    # puts "\n\n temp_needs check \n\n"
    # temp_needs.each { |k,v| puts "k is #{k} v is #{v}" }

    temp_allocations.each { |k,v| allocations_to_create <<   { location_id: k, units_allocated: v, units_needed: temp_needs[k] }  }
    allocations_to_create
  end

  def self.store_demand(allocation_formula, inventory)
    ##puts "store_demand parameters => allocation formula is #{allocation_formula}, inventory:  sku is #{inventory.sku_id}, location is #{inventory.location_id} - #{inventory.location_display}, inventory_id is #{inventory.inventory_id}"
    # projection_detail = inventory.projection_details.joins(:projection).where(:projections => {plan_year: '2014'}).first
    # Retrieve most current projection starting with current year
    projection_detail = inventory.projection_details.joins(:projection).where(:projections => {plan_year: '2014'}).first || projection_detail = inventory.projection_details.joins(:projection).where(:projections => {plan_year: '2013'}).first

    if projection_detail
      # puts '********************projection detail found********************'
      case allocation_formula

      when 'DIVIDE_EQUALLY'
        units_needed = 0

      when 'APPROVED_PROJECTION'
        case projection_detail.projection.state

          when 'draft'
            units_needed = 0

          when 'forecast', 'projection_1_units'
            units_needed = projection_detail.state == 'draft' ? projection_detail.send('last_forecast_units') : projection_detail.send('projection_1_units')

          when 'projection_2_units'
            units_needed = projection_detail.state == 'draft' ? projection_detail.send('projection_1_units') : projection_detail.send('projection_2_units')

          when 'projection_3_units'
            units_needed = projection_detail.state == 'draft' ? projection_detail.send('projection_2_units') : projection_detail.send('projection_3_units')

          when 'projection_4_units'
            units_needed = projection_detail.state == 'draft' ? projection_detail.send('projection_3_units') : projection_detail.send('projection_4_units')

          when 'complete'
            units_needed = projection_detail.send('projection_4_units')

          else
            units_needed = 0
        end

      when 'LAST_FORECAST_UNITS'
        units_needed = projection_detail.last_forecast_units

      when 'PROJECTION_NEED'
        units_needed = projection_detail.total_need

      when /PROJECTION_\d_UNITS/
        ##puts "\n\n*******in projection units\n\n"
        units_needed = projection_detail.send(allocation_formula.downcase)

      when 'PURCHASE_ALLOCATION'
        # This formula is only valid when allocating a Receipt.
        # purchase allocation: store demand = allocated_units from the associated PurchaseAllocation.
        # If it is used for a Purchase or Inventory allocation, the calculation will not create any allocations.

        units_needed = 0

      end
    else
      units_needed = 0
    end
    # units_needed -= (inventory.on_hand_units + inventory.supplier_on_order_units) if ['LAST_FORECAST_UNITS','APPROVED_PROJECTION',/PROJECTION_\d_UNITS/].include? allocation_formula and units_needed > 0
    # puts "units_needed #{units_needed}"
    units_needed
  end
  # HELPERS (End)
  def display_as
    self.display
  end

  def display_as
    self.display
  end
end # class Omni::AllocationProfile
