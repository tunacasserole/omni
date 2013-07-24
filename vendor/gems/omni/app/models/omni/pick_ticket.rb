class Omni::PickTicket < ActiveRecord::Base

  # MIXINS (Start) ======================================================================
  
  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection   Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name           = :pick_tickets
  self.primary_key          = :pick_ticket_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :pick_ticket_id,                   :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "Pick Ticket: #{m.pick_ticket_nbr}"}
  default      :pick_ticket_nbr,                  :override  =>  false,        :with  => :sequence,         :named=>"PICK_TICKET_NBR"
  default      :request_units,                    :override  =>  false,        :to    => 0                  
  default      :complete_units,                   :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :pickable,                        :class_name => 'Omni::PickTicket',              :foreign_key => 'pickable_id'
  belongs_to   :fulfillment_location,            :class_name => 'Omni::Location',                :foreign_key => 'fulfillment_location_id'
  belongs_to   :work_order,                      :class_name => 'Omni::WorkOrder',               :foreign_key => 'work_order_id'
  has_many     :stock_ledger_activities,         :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'stockable_id',     :as => :stockable
  belongs_to   :pickable,                        :class_name => 'Omni::OrderDetail',             :foreign_key => 'pickable_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :fulfillment_location_display,           :to => 'fulfillment_location.display'
    map :work_order_display,                     :to => 'work_order.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # ORDERING (Start) ====================================================================

  # ORDERING (End)


  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # INDEXING (Start) ====================================================================

  # INDEXING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # HELPERS (Start) =====================================================================
  
  def write_sla(ruleset, location_id)
      ruleset_id = Omni::Ruleset.where(:ruleset_code => ruleset).first.ruleset_id
      sku_id = self.pickable.sku_id
      #location_id = location.location_id
      Omni::StockLedgerActivity.create(:stockable_type => 'Omni::PickTicket', :stockable_id => self.pickable_id, :ruleset_id => ruleset_id, :sku_id => sku_id, :location_id => location_id)
    end

    def after_release
      #puts "after_release"
      self.release_date = Date.today
    end

    def after_start
      self.start_date = Date.today
      write_sla 'StartWhsePick', fulfillment_location_id if fulfillment_location.is_warehouse 
    end

    def after_complete
      self.complete_date = Date.today
      write_sla 'CompleteWhsePick', self.fulfillment_location_id if self.fulfillment_location.is_warehouse 
    end

    def after_ship
      self.ship_date = Date.today
      write_sla 'LoadWhseShip', self.fulfillment_location_id if self.fulfillment_location.is_warehouse 
      self.ship_to_customer = true if pickable_type =='Omni::OrderDetail' and ['SEND','TAKE'].inclued? pickable.delivery_method
      
      if pickable_type == 'Omni::OrderDetail'
        write_sla 'SendShipment', fulfillment_location_id 
        write_sla 'RegularSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'REGULAR'
        write_sla 'PromoSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'PROMOTIONAL'
        write_sla 'ClearanceSale', fulfillment_location_id if ship_to_customer and pickable.price_type == 'CLEARANCE'
        write_sla 'ShipWorkComPick', fulfillment_location_id if work_order.state == 'complete'
      end
      
      if pickable_type == 'Omni::Transfer'
        pickable.ship_date = Date.today
        pickable.state = 'shipped'
        pickable.save
        write_sla 'SendShipment', pickable.fulfillment_location_id 
      end
      
    end

    def after_cancel
      complete_units = 0
    end

  # HELPERS (End)




end # class Omni::PickTicket

