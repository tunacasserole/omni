class Omni::SkuPrice < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sku_prices
  self.primary_key  = :sku_price_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :sales_category,                  lookup: 'SALES_CATEGORY',  allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_price_id,                     override: false,        with: :guid
  default      :sales_category,                   override: false,        :to  => 'REGULAR'
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.price_book_display} - #{m.effective_date}"}
  default      :retail_price,                     override: false,        to: 0
  default      :price_units,                      override: false,        to: 0
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  belongs_to   :price_book,                      class_name: 'Omni::PriceBook',               foreign_key: 'price_book_id'
  belongs_to   :price_change,                    class_name: 'Omni::PriceChange',             foreign_key: 'price_change_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            to: 'sku.display'
    map :price_book_display,                     to: 'price_book.display'
    map :price_change_display,                   to: 'price_change.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_id
    # string   :sku_price_id
    # string   :display

    # text     :display_fulltext, using: :display
  end
  # INDEXING (End)

  # CUSTOM HELPERS (Start) =======================================================================
  # def get_price
  #   return Omni::SkuPrice.all.first
  # end
  # CUSTOM HELPERS (End)

end # class Omni::SkuPrice

