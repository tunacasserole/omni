class Omni::SystemOption < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :system_options
  self.primary_key  = :system_option_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :price_book_id,                   :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :system_option_id,                    :override  =>  false,        :with  => :guid              
  default      :professional_discount_percent,       :override  =>  false,        :to    => 0                  
  default      :employee_discount_percent,           :override  =>  false,        :to    => 0                  
  default      :is_charge_ship_location,             :override  =>  false,        :to    => false              
  default      :consecutive_invalid_login_attempts,  :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                        :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :price_book,                      :class_name => 'Omni::PriceBook',               :foreign_key => 'price_book_id'
  belongs_to   :regular_sale_ruleset,            :class_name => 'Omni::Ruleset',                 :foreign_key => 'regular_sale_ruleset_id'
  belongs_to   :promo_sale_ruleset,              :class_name => 'Omni::Ruleset',                 :foreign_key => 'promo_sale_ruleset_id'
  belongs_to   :clearance_sale_ruleset,          :class_name => 'Omni::Ruleset',                 :foreign_key => 'clearance_sale_ruleset_id'
  belongs_to   :transfer_request_ruleset,        :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_request_ruleset_id'
  belongs_to   :transfer_ship_ruleset,           :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_ship_ruleset_id'
  belongs_to   :transfer_transit_ruleset,        :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_transit_ruleset_id'
  belongs_to   :transfer_receive_ruleset,        :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_receive_ruleset_id'
  belongs_to   :transfer_close_ruleset,          :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_close_ruleset_id'
  belongs_to   :transfer_cancel_ruleset,         :class_name => 'Omni::Ruleset',                 :foreign_key => 'transfer_cancel_ruleset_id'
  belongs_to   :transfer_gl_account,             :class_name => 'Omni::GlAccount',               :foreign_key => 'transfer_gl_account_id'
  belongs_to   :discrepancy_gl_account,          :class_name => 'Omni::GlAccount',               :foreign_key => 'discrepancy_gl_account_id'
  belongs_to   :overage_gl_account,              :class_name => 'Omni::GlAccount',               :foreign_key => 'overage_gl_account_id'
  belongs_to   :shortage_gl_account,             :class_name => 'Omni::GlAccount',               :foreign_key => 'shortage_gl_account_id'
  belongs_to   :sales_tax_gl_account,            :class_name => 'Omni::GlAccount',               :foreign_key => 'sales_tax_gl_account_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :price_book_display,                     :to => 'price_book.display'
    map :regular_sale_ruleset_display,           :to => 'regular_sale_ruleset.display'
    map :promo_sale_ruleset_display,             :to => 'promo_sale_ruleset.display'
    map :clearance_sale_ruleset_display,         :to => 'clearance_sale_ruleset.display'
    map :transfer_request_ruleset_display,       :to => 'transfer_request_ruleset.display'
    map :transfer_ship_ruleset_display,          :to => 'transfer_ship_ruleset.display'
    map :transfer_transit_ruleset_display,       :to => 'transfer_transit_ruleset.display'
    map :transfer_receive_ruleset_display,       :to => 'transfer_receive_ruleset.display'
    map :transfer_close_ruleset_display,         :to => 'transfer_close_ruleset.display'
    map :transfer_cancel_ruleset_display,        :to => 'transfer_cancel_ruleset.display'
    map :transfer_gl_account_display,            :to => 'transfer_gl_account.display'
    map :discrepancy_gl_account_display,         :to => 'discrepancy_gl_account.display'
    map :overage_gl_account_display,             :to => 'overage_gl_account.display'
    map :shortage_gl_account_display,            :to => 'shortage_gl_account.display'
    map :sales_tax_gl_account_display,           :to => 'sales_tax_gl_account.display'
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
    string   :display
    string   :price_book_display do price_book.display if price_book end
    integer  :professional_discount_percent
    integer  :employee_discount_percent
 
    text     :display_fulltext, :using => :display
    text     :price_book_display_fulltext, :using => :price_book_display
    text     :professional_discount_percent_fulltext, :using => :professional_discount_percent
    text     :employee_discount_percent_fulltext, :using => :employee_discount_percent
  end 
  # INDEXING (End)



end # class Omni::SystemOption

