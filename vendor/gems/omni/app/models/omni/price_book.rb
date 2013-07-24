class Omni::PriceBook < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :price_books
  self.primary_key  = :price_book_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :price_book_type,                 :lookup      => 'PRICE_BOOK_TYPE',            :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :price_book_id,                    :override  =>  false,        :with  => :guid              
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
  has_many     :sku_promo_prices,                :class_name => 'Omni::SkuPromoPrice',           :foreign_key => 'price_book_id'
  has_many     :sku_prices,                      :class_name => 'Omni::SkuPrice',                :foreign_key => 'price_book_id'
  has_many     :system_options,                  :class_name => 'Omni::SystemOption',            :foreign_key => 'price_book_id'
  has_many     :locations,                       :class_name => 'Omni::Location',                :foreign_key => 'price_book_id'
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
    string   :price_book_type do |x| Buildit::Lookup::Manager.display_for('PRICE_BOOK_TYPE', x.price_book_type) end
    string   :short_name
 
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :price_book_type_fulltext, :using => :price_book_type
    text     :short_name_fulltext, :using => :short_name
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::PriceBook

