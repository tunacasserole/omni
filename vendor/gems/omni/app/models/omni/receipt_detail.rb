class Omni::ReceiptDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipt_details
  self.primary_key  = :receipt_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness    => true
  validates    :receipt_detail_id,               :uniqueness    => true

  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_detail_id,                :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.receipt_display} - #{m.purchase_detail_display}"}
  default      :receipt_line_nbr,                 :override  =>  false,        :with  => :sequence, :named=>"RECEIPT_LINE_NBR"
  default      :received_units,                                                :to    => 0                  
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
  # has_many     :container_details,               :class_name => 'Omni::ContainerDetail',         :foreign_key => 'receipt_detail_id'
  belongs_to   :receipt,                         :class_name => 'Omni::Receipt',                 :foreign_key => 'receipt_id'
  belongs_to   :purchase_detail,                 :class_name => 'Omni::PurchaseDetail',          :foreign_key => 'purchase_detail_id'
  belongs_to   :sku,                             :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'sku_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :receipt_display,                        :to => 'receipt.display'
    map :purchase_detail_display,                :to => 'purchase_detail.display'
    map :sku_display,                            :to => 'sku.display'
  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :open_to_receive_units

  end
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  
  # ORDERING (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :receipt_id
    string   :purchase_detail_id
    string   :sku_id
    string   :receipt_display do receipt.display if receipt end
    string   :purchase_detail_display do purchase_detail.display if purchase_detail end
    string   :sku_display
    integer  :received_units
    string   :state
 
     # Partial match (contains) attributes
    text     :display_fulltext,                  :using => :display
    text     :receipt_display_fulltext,          :using => :receipt_display
    text     :purchase_detail_display_fulltext,  :using => :purchase_detail_display
    text     :received_units_fulltext,           :using => :received_units
    text     :state_fulltext,                    :using => :state
  end 

  # INDEXING (End)


  # HOOKS (Start) =======================================================================
  def compute_open_to_receive_units
  
    # self.open_to_receive_units => (self.purchase_details.sum(units_ordered * order_pack_size) - self.receipt_details.sum(received_units * receipt_pack_size))

  end

  # HOOKS (End)


  # STATES (Start) ====================================================================
state_machine :state, :initial => :draft do

### STATES ###
  state :draft do

  end

  state :complete do

  end

  state :suspense do

  end

  state :hold do

  end

  state :cancelled do

  end


end
  # STATES (End)  



end # class Omni::ReceiptDetail

