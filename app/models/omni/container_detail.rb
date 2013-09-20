class Omni::ContainerDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :container_details
  self.primary_key  = :container_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :container_detail_id,              :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda {|m| "#{m.container_display} - #{m.sku_display} - #{m.container_detail_nbr}"}
  default      :container_detail_nbr,             :override  =>  false,        :with  => :sequence,         :named=>"CONTAINER_DETAIL_NBR"
  default      :selling_units,                    :override  =>  false,        :to    => 0                  
  default      :commited_units,                   :override  =>  false,        :to    => 0                  
  default      :sell_units_per_pack,              :override  =>  false,        :to    => 0                  
  default      :is_quality_hold,                  :override  =>  false,        :to    => false              
  default      :is_duty_paid,                     :override  =>  false,        :to    => false              
  default      :is_audited,                       :override  =>  false,        :to    => false              
  default      :is_inspected,                     :override  =>  false,        :to    => false              
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
  belongs_to   :container,                       :class_name => 'Omni::Container',               :foreign_key => 'container_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :purchase_detail,                 :class_name => 'Omni::PurchaseDetail',          :foreign_key => 'purchase_detail_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :work_order,                      :class_name => 'Omni::WorkOrder',               :foreign_key => 'work_order_id'
  belongs_to   :receipt_detail,                  :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'receipt_detail_id'
  belongs_to   :pick_ticket,                     :class_name => 'Omni::PickTicket',              :foreign_key => 'pick_ticket_id'
  belongs_to   :origin_container_detail,         :class_name => 'Omni::ContainerDetail',         :foreign_key => 'origin_container_detail_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :container_display,                      :to => 'container.display'
    map :sku_display,                            :to => 'sku.display'
    map :purchase_detail_display,                :to => 'purchase_detail.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :work_order_display,                     :to => 'work_order.display'
    map :receipt_detail_display,                 :to => 'receipt_detail.display'
    map :pick_ticket_display,                    :to => 'pick_ticket.display'
    map :origin_container_detail_display,        :to => 'origin_container_detail.display'
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
    string   :container_display do container.display if container end
    string   :state
    string   :sku_display do sku.display if sku end
    string   :purchase_detail_display do purchase_detail.display if purchase_detail end
    string   :supplier_display do supplier.display if supplier end
    string   :supplier_item_identifier
    string   :work_order_display do work_order.display if work_order end
    string   :receipt_detail_display do receipt_detail.display if receipt_detail end
    string   :pick_ticket_display do pick_ticket.display if pick_ticket end
    string   :origin_container_detail_display do origin_container_detail.display if origin_container_detail end
    boolean  :is_quality_hold
    boolean  :is_duty_paid
 
    text     :container_display_fulltext, :using => :container_display
    text     :state_fulltext, :using => :state
    text     :sku_display_fulltext, :using => :sku_display
    text     :purchase_detail_display_fulltext, :using => :purchase_detail_display
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :supplier_item_identifier_fulltext, :using => :supplier_item_identifier
    text     :work_order_display_fulltext, :using => :work_order_display
    text     :receipt_detail_display_fulltext, :using => :receipt_detail_display
    text     :pick_ticket_display_fulltext, :using => :pick_ticket_display
    text     :origin_container_detail_display_fulltext, :using => :origin_container_detail_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ContainerDetail

