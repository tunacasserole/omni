class Omni::Receipt < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipts
  self.primary_key  = :receipt_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :freight_terms,                   :lookup      => 'FREIGHT_TERMS',              :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_id,                       :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.location_display} - Receipt: #{m.create_date}"}
  default      :receipt_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"RECEIPT_NBR"
  default      :appointment_duration,             :override  =>  false,        :to    => 0                  
  default      :is_expected_asn,                  :override  =>  false,        :to    => false              
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
  has_many     :receipt_details,                 :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'receipt_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :carrier_supplier,                :class_name => 'Omni::Supplier',                :foreign_key => 'carrier_supplier_id'
  belongs_to   :completed_by_user,               :class_name => 'Buildit::User',                     :foreign_key => 'completed_by_user_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :carrier_supplier_display,               :to => 'carrier_supplier.display'
    map :completed_by_user_display,              :to => 'completed_by_user.full_name'
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
    string   :receipt_nbr
    string   :location_display do location.display if location end
    string   :carrier_supplier_display do carrier_supplier.display if carrier_supplier end
    date     :ship_date
    string   :state
 
    text     :receipt_nbr_fulltext, :using => :receipt_nbr
    text     :location_display_fulltext, :using => :location_display
    text     :carrier_supplier_display_fulltext, :using => :carrier_supplier_display
    text     :state_fulltext, :using => :state
  end 
  # INDEXING (End)



end # class Omni::Receipt

