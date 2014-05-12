class Omni::Pick < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name           = :picks
  self.primary_key          = :pick_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :display,      presence: true, uniqueness: true
  validates :pick_nbr,     presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :pick_id,                   override: false,        with: :guid
  default      :pick_nbr,                  override: false,        with: :sequence,         named: "PICK_NBR"
  default      :display,                   override: false,        to: lambda{|m| "pick: #{m.pick_nbr}"}
  default      :request_units,             override: false,        to: 0
  default      :complete_units,            override: false,        to: 0
  default      :is_destroyed,              override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :pickable,                        class_name: 'Omni::Pick',              foreign_key: 'pickable_id'
  belongs_to   :fulfillment_location,            class_name: 'Omni::Location',          foreign_key: 'fulfillment_location_id'
  belongs_to   :job,                             class_name: 'Omni::Job',               foreign_key: 'job_id'
  has_many     :stock_ledger_activities,         class_name: 'Omni::StockLedgerActivity',     foreign_key: 'stockable_id',     as: :stockable
  # belongs_to   :pickable,                        class_name: 'Omni::OrderDetail',             foreign_key: 'pickable_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :fulfillment_location_display,           to: 'fulfillment_location.display'
    map :job_display,                     to: 'job.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook  :before_create,      :set_request_units,             10

  def  set_request_units
    if pickable_type == "Omni::OrderDetail"
      parent = Omni::OrderDetail.where(order_detail_id: self.pickable_id).first
      if parent
        self.request_units = parent.order_units
      end
    end
  end
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :pick_id
    string   :pickable_id
    string   :pickable_type
    string   :display
    string   :pick_nbr
    string   :fulfillment_location_display
    string   :job_display
    string   :state

    text     :display_fulltext, using: :display
    text     :pick_nbr_fulltext, using: :pick_nbr
    text     :job_display_fulltext, using: :job_display
    text     :fulfillment_location_display_fulltext, using: :fulfillment_location_display
  end
  order_search_by pick_nbr: :desc
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :cancel,     do: :after_cancel
    after_transition on: :complete,   do: :after_complete
    after_transition on: :release,    do: :after_release
    after_transition on: :ship,       do: :after_ship
    after_transition on: :start,      do: :after_start

    ## EVENTS ###
    event :cancel do
      transition [:draft, :pending] => :cancelled
    end

    event :release do
      transition draft: :pending
    end

    event :complete do
      transition :open => :complete
    end

    event :ship do
      transition :complete => :shipped
    end

    event :start do
      transition :pending => :open
    end

  end
  # STATES (End)


  # STATE HANDLERS (Start) ====================================================================

    def write_sla(ruleset, location_id)
      ruleset_id = Omni::Ruleset.where(:ruleset_code => ruleset).first.ruleset_id
      if self.pickable
        sku_id = self.pickable.sku_id
        # location_id = location.location_id
        Omni::StockLedgerActivity.create(:stockable_type => 'Omni::Pick', :stockable_id => self.pickable_id, :ruleset_id => ruleset_id, :sku_id => sku_id, :location_id => location_id)
      end
    end

    def after_release
      #puts "after_release"
      self.target_date = Date.today
    end

    def after_start
      self.start_date = Date.today
      write_sla 'StartWhsePick', self.fulfillment_location_id if self.fulfillment_location.is_warehouse
    end

    def after_complete
      self.complete_date = Date.today
      write_sla 'CompleteWhsePick', self.fulfillment_location_id if self.fulfillment_location.is_warehouse
    end

    def after_ship
      self.ship_date = Date.today
      write_sla 'LoadWhseShip', self.fulfillment_location_id if self.fulfillment_location.is_warehouse

      if pickable
        ship_to_customer = ( pickable_type =='Omni::OrderDetail' && pickable && ['SEND','TAKE'].include?(pickable.delivery_method) )

        if pickable_type == 'Omni::OrderDetail'
          write_sla 'SendShipment', fulfillment_location_id
          write_sla 'RegularSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'REGULAR'
          write_sla 'PromoSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'PROMOTIONAL'
          write_sla 'ClearanceSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'CLEARANCE'
          write_sla 'ShipWorkComPick', fulfillment_location_id if job.state == 'complete'
        end

        if pickable_type == 'Omni::Transfer'
          pickable.ship_date = Date.today
          pickable.state = 'shipped'
          pickable.save
          write_sla 'SendShipment', pickable.fulfillment_location_id
        end
      end
    end

    def after_cancel
      complete_units = 0
    end
  # STATE HANDLERS (End)


  # FILTERS (Start) =====================================================================
  filter :state_cancelled,        :with => {state: {equal_to: 'cancelled'}},  :priority => 90
  filter :state_draft,            :with => {state: {equal_to: 'draft'}},      :priority => 40
  filter :state_complete,         :with => {state: {equal_to: 'complete'}},   :priority => 70
  filter :state_pending,          :with => {state: {equal_to: 'pending'}},    :priority => 50
  filter :state_shipped,          :with => {state: {equal_to: 'shipped'}},    :priority => 80
  filter :state_open,             :with => {state: {equal_to: 'open'}},       :priority => 60
  # FILTERS (End)


  def display_as
    self.display
  end
end # class Omni::Pick

