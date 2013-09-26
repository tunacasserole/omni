class Omni::Location < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :locations
  self.primary_key  = :location_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :district_id,                     :presence    => true
  validates    :location_nbr,                    :uniqueness  => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :location_id,                      :override  =>  false,        :with  => :guid
  default      :location_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"LOCATION_NBR"
  default      :is_owned,                         :override  =>  false,        :to    => false
  default      :is_store,                         :override  =>  false,        :to    => false
  default      :is_temporary_store,               :override  =>  false,        :to    => false
  default      :is_webstore,                      :override  =>  false,        :to    => false
  default      :is_factory,                       :override  =>  false,        :to    => false
  default      :is_warehouse,                     :override  =>  false,        :to    => false
  default      :selling_square_feet,              :override  =>  false,        :to    => 0
  default      :storage_square_feet,              :override  =>  false,        :to    => 0
  default      :is_enabled,                       :override  =>  false,        :to    => false
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
  belongs_to   :parent_location,                 :class_name => 'Omni::Location',                :foreign_key => 'parent_location_id'
  belongs_to   :district,                        :class_name => 'Omni::District',                :foreign_key => 'district_id'
  belongs_to   :price_book,                      :class_name => 'Omni::PriceBook',               :foreign_key => 'price_book_id'
  belongs_to   :promo_price_book,                :class_name => 'Omni::PriceBook',               :foreign_key => 'promo_price_book_id'
  has_many     :inventories,                     :class_name => 'Omni::Inventory',               :foreign_key => 'location_id'
  has_many     :sites,                           :class_name => 'Omni::Site',                    :foreign_key => 'location_id'
  has_many     :pick_tickets,                    :class_name => 'Omni::PickTicket',              :foreign_key => 'location_id'
  has_many     :style_locations,                 :class_name => 'Omni::StyleLocation',           :foreign_key => 'location_id'
  has_many     :purchases,                       :class_name => 'Omni::Purchase',                :foreign_key => 'location_id'
  has_many     :period_results,                  :class_name => 'Omni::PeriodResult',            :foreign_key => 'location_id'
  has_many     :sku_locations,                   :class_name => 'Omni::SkuLocation',             :foreign_key => 'location_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  has_many     :shipments,                       :class_name => 'Omni::Shipment',                :foreign_key => 'shippable_id',     :as => :shippable
  has_many     :adjustments,                     :class_name => 'Omni::Adjustment',              :foreign_key => 'location_id'
  has_many     :payments,                        :class_name => 'Omni::Payment',                 :foreign_key => 'location_id'
  has_many     :projection_details,              :class_name => 'Omni::ProjectionDetail',        :foreign_key => 'location_id'
  has_many     :location_tax_authorities,        :class_name => 'Omni::LocationTaxAuthority',    :foreign_key => 'location_id'
  has_many     :daily_results,                   :class_name => 'Omni::DailyResult',             :foreign_key => 'location_id'
  has_many     :transfers,                       :class_name => 'Omni::Transfer',                :foreign_key => 'location_id'
  has_many     :location_tax_holidays,           :class_name => 'Omni::LocationTaxHoliday',      :foreign_key => 'location_id'
  has_many     :containers,                      :class_name => 'Omni::Container',               :foreign_key => 'location_id'
  has_many     :order_details,                   :class_name => 'Omni::OrderDetail',             :foreign_key => 'location_id'
  has_many     :location_users,                  :class_name => 'Omni::LocationUser',            :foreign_key => 'location_id'
  has_many     :areas,                           :class_name => 'Omni::Area',                    :foreign_key => 'location_id'
  has_many     :orders,                          :class_name => 'Omni::Order',                   :foreign_key => 'location_id'
  has_many     :stock_ledger_activities,         :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'location_id'
  has_many     :bins,                            :class_name => 'Omni::Bin',                     :foreign_key => 'location_id'
  has_many     :tills,                           :class_name => 'Omni::Till',                    :foreign_key => 'location_id'
  has_many     :receipts,                        :class_name => 'Omni::Receipt',                 :foreign_key => 'location_id'
  has_many     :terminals,                       :class_name => 'Omni::Terminal',                :foreign_key => 'location_id'
  has_many     :work_orders,                     :class_name => 'Omni::WorkOrder',               :foreign_key => 'location_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :parent_location_display,                :to => 'parent_location.display'
    map :district_display,                       :to => 'district.display'
    map :price_book_display,                     :to => 'price_book.display'
    map :promo_price_book_display,               :to => 'promo_price_book.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :district_id
    string   :district_display
    string   :location_nbr
    string   :location_brand
    string   :line_1
    string   :city
    string   :state_code
    boolean  :is_store
    boolean  :is_warehouse
    date     :open_date
    string   :district_display do district.display if district end
    string   :parent_location_id

    text     :display_fulltext, :using => :display
    text     :location_nbr_fulltext, :using => :location_nbr
    text     :location_brand_fulltext, :using => :location_brand
    text     :line_1_fulltext, :using => :line_1
    text     :city_fulltext, :using => :city
    text     :state_code_fulltext, :using => :state_code
    text     :district_display_fulltext, :using => :district_display
  end
  # INDEXING (End)

  # HELPERS (Start) =======================================================================
  # def self.mark_outlets
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create location hash"
  #   source_hash = {}
  #   self.all.each do |loc|
  #     source_hash[loc.location_nbr.to_i] = loc.location_id
  #   end
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create location hash: #{source_hash.count.to_s}"
  #   source_hash
  # end

  def self.source_hash(legacy_source)
    source_hash = {}
    case legacy_source
    when "PARKER"
      self.where(:location_brand => 'PARKER SCHOOL UNIFORMS').each { |loc| source_hash[loc.location_nbr.to_i] = loc.location_id}
    when 'BUCKHEAD'
      source_hash = {1 => '54BA7E26AC3E11E2947800FF58D32228', 2 => '54DA89BEAC3E11E2947800FF58D32228', 3 => '54FFC58AAC3E11E2947800FF58D32228', 4 => '551C007EAC3E11E2947800FF58D32228', 5 => '555BC98EAC3E11E2947800FF58D32228', 6 => '55A83D00AC3E11E2947800FF58D32228'}
    when 'GRITS'
      source_hash = {610 => '56072748AC3E11E2947800FF58D32228', 611 => '562B2A8AAC3E11E2947800FF58D32228', 62 => '564FA306AC3E11E2947800FF58D32228', 63 => '5678132CAC3E11E2947800FF58D32228', 64 => '569FE712AC3E11E2947800FF58D32228', 65 => '56CAEF52AC3E11E2947800FF58D32228', 66=>'56EB490AAC3E11E2947800FF58D32228'}
    end
    source_hash
  end

  # HELPERS (End)

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Location
