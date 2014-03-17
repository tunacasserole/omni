class Omni::SkuPromoPrice < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sku_promo_prices
  self.primary_key  = :sku_promo_price_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_promo_price_id,               override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.price_book_display} - #{m.effective_date}"}
  default      :regular_units,                    override: false,        to: 0
  default      :promo_units,                      override: false,        to: 0
  default      :promo_percent,                    override: false,        to: 0
  default      :promo_amount,                     override: false,        to: 0
  default      :promo_price,                      override: false,        to: 0
  default      :maximum_promo_units,              override: false,        to: 0
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
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            to: 'sku.display'
    map :price_book_display,                     to: 'price_book.display'
    map :promotion_display,                      to: 'price_book.display'
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
    date     :effective_date
    date     :end_date
    integer  :promo_units
    integer  :promo_percent
    integer  :promo_amount
    integer  :promo_price
    string   :display

    text     :promo_units_fulltext, using: :promo_units
    text     :promo_percent_fulltext, using: :promo_percent
    text     :promo_amount_fulltext, using: :promo_amount
    text     :promo_price_fulltext, using: :promo_price
  end
end # class Omni::SkuPromoPrice

