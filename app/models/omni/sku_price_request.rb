class Omni::SkuPriceRequest < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sku_price_requests
  self.primary_key  = :sku_price_request_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_price_request_id,             override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.request_date}"}
  default      :permanent_sku_retail,             override: false,        to: 0
  default      :permanent_units,                  override: false,        to: 0
  default      :promo_sku_retail,                 override: false,        to: 0
  default      :promo_percent,                    override: false,        to: 0
  default      :promo_amount,                     override: false,        to: 0
  default      :promo_units,                      override: false,        to: 0
  default      :regular_units,                    override: false,        to: 0
  default      :maximum_promo_units,              override: false,        to: 0
  default      :professional_discount_percent,    override: false,        to: 0
  default      :employee_discount_percent,        override: false,        to: 0
  default      :school_discount_percent,          override: false,        to: 0
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
  belongs_to   :user,                            class_name: 'Buildit::User',                     foreign_key: 'user_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :customer,                        class_name: 'Omni::Customer',                foreign_key: 'customer_id'
  belongs_to   :account,                            class_name: 'Omni::Account',                    foreign_key: 'account_id'
  belongs_to   :request_price_book,              class_name: 'Omni::PriceBook',               foreign_key: 'request_price_book_id'
  belongs_to   :price_book,                      class_name: 'Omni::PriceBook',               foreign_key: 'price_book_id'
  belongs_to   :sku_price,                       class_name: 'Omni::SkuPrice',                foreign_key: 'sku_price_id'
  belongs_to   :sku_promo_price,                 class_name: 'Omni::SkuPromoPrice',           foreign_key: 'sku_promo_price_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :user_display,                           to: 'user.full_name'
    map :sku_display,                            to: 'sku.display'
    map :location_display,                       to: 'location.display'
    map :customer_display,                       to: 'customer.display'
    map :account_display,                           to: 'account.display'
    map :request_price_book_display,             to: 'request_price_book.display'
    map :price_book_display,                     to: 'price_book.display'
    map :sku_price_display,                      to: 'sku_price.display'
    map :sku_promo_price_display,                to: 'sku_promo_price.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_id
    string   :state
    string   :user_display do user.full_name if user end
    date     :request_date
    string   :sku_display do sku.display if sku end
    string   :location_display do location.display if location end
    string   :customer_display do customer.display if customer end
    string   :account_display do account.display if account end
    string   :state
    string   :display

    text     :state_fulltext, using: :state
    text     :user_display_fulltext, using: :user_display
    text     :sku_display_fulltext, using: :sku_display
    text     :location_display_fulltext, using: :location_display
    text     :customer_display_fulltext, using: :customer_display
    text     :account_display_fulltext, using: :account_display
  end
  order_search_by :display => :asc
  # INDEXING (End) ====================================================================

  # STATES (Start) ====================================================================
  state_machine :state, initial: :new do

  ### CALLBACKS ###
    after_transition on: :price, do: :after_price

  ### EVENTS ###
    event :price do
      transition :new => :priced
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # price => new to priced
  def after_price
    # Get Price Book
    self.price_book_id = Omni::SystemOption.all.first.price_book_id
    self.price_book_id = self.account.location.price_book.price_book_id if self.account and self.account.location and self.account.location.price_book
    self.price_book_id = self.location.price_book.price_book_id if !self.account_id and self.location and self.location.price_book
    # Get Permanent Price
    self.sku_price = Omni::SkuPrice.where(:price_book_id => self.price_book_id, :sku_id => self.sku_id).first
    self.permanent_sku_retail = self.sku_price.retail_price if self.sku_price
    self.permanent_units = self.sku_price.price_units if self.sku_price
    self.sales_category = self.sku_price.sales_category if self.sku_price
    # Get Promotional Price
    self.sku_promo_price = Omni::SkuPromoPrice.where(:price_book_id => self.price_book_id, :sku_id => self.sku_id).first
    self.promo_sku_retail = self.sku_promo_price.promo_price if self.sku_promo_price
    self.promo_units = self.sku_promo_price.promo_units if self.sku_promo_price
    self.sales_category = self.sku_promo_price.sales_category if self.sku_promo_price
    self.save
  end # def after_price

  # STATE HANDLERS (End)
end # class Omni::SkuPriceRequest

