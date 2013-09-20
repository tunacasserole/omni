class Omni::ReceiptDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipt_details
  self.primary_key  = :receipt_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_detail_id,                :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.receipt_display} - #{m.purchase_detail_display}"}
  default      :receipt_line_nbr,                 :override  =>  false,        :with  => :sequence,         :named=>"RECEIPT_LINE_NBR"
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
  has_many     :container_details,               :class_name => 'Omni::ContainerDetail',         :foreign_key => 'receipt_detail_id'
  belongs_to   :receipt,                         :class_name => 'Omni::Receipt',                 :foreign_key => 'receipt_id'
  belongs_to   :purchase_detail,                 :class_name => 'Omni::PurchaseDetail',          :foreign_key => 'purchase_detail_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :receipt_display,                        :to => 'receipt.display'
    map :purchase_detail_display,                :to => 'purchase_detail.display'
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

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    # state :draft do

    # end

  ### CALLBACKS ###
    # after_transition :on => :costing, :do => :process_costing

  ### EVENTS ###
    # event :approve do
    #   transition :pending_approval => :open
    # end

  end
  # STATES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_display do receipt.display if receipt end
    string   :purchase_detail_display do purchase_detail.display if purchase_detail end
    integer  :received_units
    string   :state
    string   :receipt_id

    text     :receipt_display_fulltext, :using => :receipt_display
    text     :purchase_detail_display_fulltext, :using => :purchase_detail_display
    text     :received_units_fulltext, :using => :received_units
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)



end # class Omni::ReceiptDetail

