class Omni::SupplierContact < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :supplier_contacts
  self.primary_key  = :supplier_contact_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :supplier_id,                     :presence    => true
  validates    :first_name,                      :presence    => true
  validates    :last_name,                       :presence    => true
  validates    :name_prefix,                     :lookup      => 'NAME_PREFIX',                :allow_nil => true  
  validates    :name_suffix,                     :lookup      => 'NAME_SUFFIX',                :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :supplier_contact_id,              :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.supplier_display} - #{m.last_name}, #m{first_name} - #{m.job_title}"}
  default      :is_order_contact,                 :override  =>  false,        :to    => false              
  default      :is_return_contact,                :override  =>  false,        :to    => false              
  default      :is_payment_contact,               :override  =>  false,        :to    => false              
  default      :is_executive_contact,             :override  =>  false,        :to    => false              
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
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :supplier_display,                       :to => 'supplier.display'
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
    string   :supplier_display do supplier.display if supplier end
    string   :phone
    string   :email_address
    boolean  :is_order_contact
    boolean  :is_return_contact
    boolean  :is_payment_contact
    boolean  :is_executive_contact
 
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :phone_fulltext, :using => :phone
    text     :email_address_fulltext, :using => :email_address
  end 
  # INDEXING (End)


end # class Omni::SupplierContact

