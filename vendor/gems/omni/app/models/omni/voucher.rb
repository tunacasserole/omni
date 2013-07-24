class Omni::Voucher < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :vouchers
  self.primary_key  = :voucher_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :customer_id,                     :presence    => true
  validates    :voucher_nbr,                     :presence    => true
  validates    :voucher_nbr,                     :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :voucher_id,                       :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.voucher_type} - #{m.voucher_nbr}"}
  default      :voucher_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"VOUCHER_NBR"
  default      :initial_balance,                  :override  =>  false,        :to    => 0                  
  default      :current_balance,                  :override  =>  false,        :to    => 0                  
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
  belongs_to   :customer,                        :class_name => 'Omni::Customer',                :foreign_key => 'customer_id'
  has_many     :payments,                        :class_name => 'Omni::Payment',                 :foreign_key => 'voucher_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :customer_display,                       :to => 'customer.display'
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
    string   :customer_display do customer.display if customer end
    string   :voucher_nbr
    string   :voucher_type
    integer  :initial_balance
    integer  :current_balance
    date     :issue_date
    date     :expiration_date
 
    text     :customer_display_fulltext, :using => :customer_display
    text     :voucher_nbr_fulltext, :using => :voucher_nbr
    text     :voucher_type_fulltext, :using => :voucher_type
    text     :initial_balance_fulltext, :using => :initial_balance
    text     :current_balance_fulltext, :using => :current_balance
  end 
  # INDEXING (End)



end # class Omni::Voucher

