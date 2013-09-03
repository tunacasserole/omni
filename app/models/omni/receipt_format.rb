class Omni::ReceiptFormat < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipt_formats
  self.primary_key  = :receipt_format_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_format_id,                :override  =>  false,        :with  => :guid              
  default      :icon_width,                       :override  =>  false,        :to    => 0                  
  default      :paper_width,                      :override  =>  false,        :to    => 0                  
  default      :is_date_in_header,                :override  =>  false,        :to    => false              
  default      :is_time_in_header,                :override  =>  false,        :to    => false              
  default      :is_location_name_in_header,       :override  =>  false,        :to    => false              
  default      :is_location_number_in_header,     :override  =>  false,        :to    => false              
  default      :is_order_number_in_header,        :override  =>  false,        :to    => false              
  default      :is_cashier_name_in_header,        :override  =>  false,        :to    => false              
  default      :is_cashier_number_in_header,      :override  =>  false,        :to    => false              
  default      :is_salesperson_name_in_header,    :override  =>  false,        :to    => false              
  default      :is_salesperson_number_in_header,  :override  =>  false,        :to    => false              
  default      :is_customer_name_in_header,       :override  =>  false,        :to    => false              
  default      :is_date_in_footer,                :override  =>  false,        :to    => false              
  default      :is_time_in_footer,                :override  =>  false,        :to    => false              
  default      :is_location_name_in_footer,       :override  =>  false,        :to    => false              
  default      :is_location_number_in_footer,     :override  =>  false,        :to    => false              
  default      :is_order_number_in_footer,        :override  =>  false,        :to    => false              
  default      :is_cashier_name_in_footer,        :override  =>  false,        :to    => false              
  default      :is_cashier_number_in_footer,      :override  =>  false,        :to    => false              
  default      :is_salesperson_name_in_footer,    :override  =>  false,        :to    => false              
  default      :is_salesperson_number_in_footer,  :override  =>  false,        :to    => false              
  default      :is_customer_name_in_footer,       :override  =>  false,        :to    => false              
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
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :terminals,                       :class_name => 'Omni::Terminal',                :foreign_key => 'receipt_format_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
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
    string   :display
    string   :description
    integer  :paper_width
 
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :paper_width_fulltext, :using => :paper_width
  end 
  # INDEXING (End)


end # class Omni::ReceiptFormat

