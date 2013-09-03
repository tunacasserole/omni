class Omni::ShipmentDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :shipment_details
  self.primary_key  = :shipment_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :shipment_id,                     :presence    => true
  validates    :pick_ticket_id,                  :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :shipment_detail_id,               :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.shipment_display} - #{m.pick_ticket_display}"}
  default      :ship_units,                       :override  =>  false,        :to    => 0                  
  default      :received_units,                   :override  =>  false,        :to    => 0                  
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
  belongs_to   :shipment,                        :class_name => 'Omni::Shipment',                :foreign_key => 'shipment_id'
  belongs_to   :pick_ticket,                     :class_name => 'Omni::PickTicket',              :foreign_key => 'pick_ticket_id'
  belongs_to   :container,                       :class_name => 'Omni::Container',               :foreign_key => 'container_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :shipment_display,                       :to => 'shipment.display'
    map :pick_ticket_display,                    :to => 'pick_ticket.display'
    map :container_display,                      :to => 'container.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :shipment_display do shipment.display if shipment end
    string   :pick_ticket_display do pick_ticket.display if pick_ticket end
    integer  :ship_units
    string   :container_display do container.display if container end
 
    text     :shipment_display_fulltext, :using => :shipment_display
    text     :pick_ticket_display_fulltext, :using => :pick_ticket_display
    text     :ship_units_fulltext, :using => :ship_units
    text     :container_display_fulltext, :using => :container_display
  end 
  # INDEXING (End)


end # class Omni::ShipmentDetail

