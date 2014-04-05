class Omni::Sku < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :skus
  self.primary_key  = :sku_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         uniqueness: true,                         :allow_nil => false
  validates    :sku_nbr,                         uniqueness: true,                         allow_nil: true
  validates    :maintenance_level,               lookup: 'MAINTENANCE_LEVEL',          allow_nil: true
  validates    :conversion_type,                 lookup: 'CONVERSION_TYPE',            allow_nil: true
  validates    :brand,                           lookup: 'BRAND',                      allow_nil: true
  validates    :fabric_content,                  lookup: 'FABRIC_CONTENT',             allow_nil: true
  validates    :replenishment_method,            lookup: 'REPLENISHMENT_METHOD',       allow_nil: true
  validates    :replenishment_source,            lookup: 'REPLENISHMENT_SOURCE',       allow_nil: true
  validates    :pack_type,                       lookup: 'PACK_TYPE',                  allow_nil: true
  validates    :sell_unit_uom_code,              lookup: 'SELL_UNIT_UOM_CODE',         allow_nil: true
  validates    :order_uom_code,                  lookup: 'ORDER_UOM_CODE',             allow_nil: true
  validates    :order_package_type,              lookup: 'ORDER_PACKAGE_TYPE',         allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_id,                           override: false,        with: :guid
  default      :sku_nbr,                          override: false,        with: :sequence,         named: "SKU_NBR"
  default      :is_converted,                     override: false,        to: false
  default      :initial_retail_price,             override: false,        to: 0
  default      :suggested_retail_price,           override: false,        to: 0
  default      :smoothing_factor,                 override: false,        to: 0
  default      :minimum_on_hand_units,            override: false,        to: 0
  default      :maximum_on_hand_units,            override: false,        to: 0
  default      :sell_unit_length,                 override: false,        to: 0
  default      :sell_unit_height,                 override: false,        to: 0
  default      :sell_unit_width,                  override: false,        to: 0
  default      :sell_unit_weight,                 override: false,        to: 0
  default      :garment_pieces,                   override: false,        to: 0
  default      :first_cost,                       override: false,        to: 0
  default      :last_cost,                        override: false,        to: 0
  default      :average_cost,                     override: false,        to: 0
  default      :on_hand_units,                    override: false,        to: 0
  default      :cost_pool,                        override: false,        to: 0
  default      :retail_pool,                      override: false,        to: 0
  default      :is_not_stocked,                   override: false,        to: false
  default      :is_special_order,                 override: false,        to: false
  default      :is_special_size,                  override: false,        to: false
  default      :is_updated_average_cost,          override: false,        to: false
  default      :is_conveyable_sell_unit,          override: false,        :to    => true
  default      :is_taxable,                       override: false,        :to    => true
  default      :is_discountable,                  override: false,        :to    => true
  default      :is_enabled,                       override: false,        to: false
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
  # belongs_to   :subclass,                        class_name: 'Omni::Subclass',                foreign_key: 'subclass_id'
  belongs_to   :style,                           class_name: 'Omni::Style',                   foreign_key: 'style_id'
  belongs_to   :generic_sku,                     class_name: 'Omni::Sku',                     foreign_key: 'generic_sku_id'
  belongs_to   :add_on_sku,                      class_name: 'Omni::Sku',                     foreign_key: 'add_on_sku_id'
  belongs_to   :account,                         class_name: 'Omni::Account',                 foreign_key: 'account_id'
  belongs_to   :style_color_size,                class_name: 'Omni::StyleColorSize',          foreign_key: 'style_color_size_id'
  belongs_to   :color,                           class_name: 'Omni::Color',                   foreign_key: 'color_id'
  belongs_to   :size,                            class_name: 'Omni::Size',                    foreign_key: 'size_id'
  belongs_to   :buyer_user,                      class_name: 'Buildit::User',                 foreign_key: 'buyer_user_id'
  belongs_to   :product_type,                    class_name: 'Omni::ProductType',             foreign_key: 'product_type_id'
  belongs_to   :supplier,                        class_name: 'Omni::Supplier',                foreign_key: 'supplier_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  has_many     :sku_aliases,                     class_name: 'Omni::SkuAlias',                foreign_key: 'sku_id'
  has_many     :sku_prices,                      class_name: 'Omni::SkuPrice',                foreign_key: 'sku_id'
  has_many     :sku_suppliers,                   class_name: 'Omni::SkuSupplier',             foreign_key: 'sku_id'
  has_many     :inventories,                     class_name: 'Omni::Inventory',               foreign_key: 'sku_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :generic_sku_display,                    to: 'generic_sku.display'
    map :add_on_sku_display,                     to: 'add_on_sku.display'
    map :account_display,                        to: 'account.display'
    map :style_color_size_display,               to: 'style_color_size.display'
    map :style_display,                          to: 'style.display'
    map :color_display,                          to: 'color.display'
    map :size_display,                           to: 'size.display'
    map :buyer_user_display,                     to: 'buyer_user.full_name'
    map :product_type_display,                   to: 'product_type.display'
    map :supplier_display,                       to: 'supplier.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # computed_attributes do
  #   compute :on_hand_units,                     :with => :compute_on_hand_units
  # end
  # COMPUTED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
    # hook  :before_create,      :get_sequence_nbr,                  10
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  def self.source_hash(legacy_source)
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create sku hash"
    # legacy_source = 'PARKER'
    # ActiveRecord::Base.connection.execute("select sku_id, source_id from skus where source = '#{legacy_source}'").each {|x| to_hash[x['source_id']] = x['sku_id']}  # JRUBY!!!
    to_hash = {}
    ActiveRecord::Base.connection.execute("select sku_id, source_id from skus where source = '#{legacy_source}' or source = 'MARK AUTO CREATE'").each {|x| to_hash[x[1]] = x[0]} # MRI
    to_hash
    # sku_array = []
    # sku_array = ActiveRecord::Base.connection.execute("select sku_id, source_id from skus where source = '#{legacy_source}'")
    # sku_array.each do |x|

      # source = x['source_id']
      # sku_id = x['sku_id']
      # sku_hash[x['source_id']] = x['sku_id']
   # end
    # sku_hash
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: END....create sku hash: #{sku_hash.count.to_s}"
    # sku_hash
  end

  # HELPERS (End) =====================================================================

  # STATES (Start) ====================================================================
  state_machine :state, initial: :active do

  ### CALLBACKS ###
    after_transition on: :discontinue, do: :after_discontinue
    after_transition on: :drop,        do: :after_drop
    after_transition on: :deactivate,  do: :after_deactivate
    after_transition on: :activate,    do: :after_activate

    ## EVENTS ###
    event :discontinue do
      transition :active => :discontinued
    end
    event :drop do
      transition :discontinued => :obsolete
    end
    event :activate do
      transition :inactive => :active
    end
    event :deactivate do
      transition :active => :inactive
    end
    state :deactivate do
      # Make sure there is no on hand or on order
    end
    state :autocreated do
      # Make sure there is no on hand or on order
    end
  end
  # STATES (End)


  # STATE HANDLERS (Start) ====================================================================
  def after_discontinue
    puts '--- done with discontinue ---'
    puts 'ready...'
  end

  def after_drop
    puts '--- done with drop ---'
    puts 'ready...'
  end

  def after_activate
    puts '--- done with activate ---'
    puts 'ready...'
  end

  def after_deactivate
    puts '--- done with deactivate ---'
    puts 'ready...'
  end
  # STATE HANDLERS (End)

  # FILTERS (Start) =====================================================================
  filter :state_active,            :with => {state: {equal_to: 'active'}},       :priority => 60
  filter :state_discontinued,      :with => {state: {equal_to: 'discontinued'}}, :priority => 70
  filter :state_obsolete,          :with => {state: {equal_to: 'obsolete'}},     :priority => 80
  filter :state_inactive,          :with => {state: {equal_to: 'inactive'}},     :priority => 90

  # filter :source_parker,           :with => {source: {equal_to: 'Parker'}},       :priority => 60
  # filter :source_buckhead,         :with => {source: {equal_to: 'Buckhead'}}, :priority => 70
  # filter :source_grits,            :with => {source: {equal_to: 'True Grits'}},     :priority => 80

  filter :department_accessories,  :with => {department_display_fulltext: {equal_to: 'ACCESSORIES'}}, :priority => 10
  filter :department_activewear,  :with => {department_display_fulltext: {equal_to: 'ACTIVEWEAR'}}, :priority => 20
  filter :department_components,  :with => {department_display_fulltext: {equal_to: 'COMPONENTS'}}, :priority => 30
  filter :department_footwear,  :with => {department_display_fulltext: {equal_to: 'FOOTWEAR'}}, :priority => 40
  filter :department_girls_specialty,  :with => {department_display_fulltext: {equal_to: 'GIRLS SPECIALTY'}}, :priority => 50
  filter :department_knit_tops,  :with => {department_display_fulltext: {equal_to: 'KNIT TOPS'}}, :priority => 60
  filter :department_outerwear,  :with => {department_display_fulltext: {equal_to: 'OUTERWEAR'}}, :priority => 60
  filter :department_pants_and_shorts,  :with => {department_display_fulltext: {equal_to: 'PANTS AND SHORTS'}}, :priority => 70
  filter :department_woven_tops,  :with => {department_display_fulltext: {equal_to: 'WOVEN TOPS'}}, :priority => 80
  # FILTERS (End)


  # INDEXING (Start) ====================================================================
  def department

  end

  searchable do
    # string   :sku_id
    string   :display
    string   :style_display do style.display if style end
    string   :account_display do account.display if account end
    string   :color_display do color.display if color end
    string   :size_display do size.display if size end
    string   :state
    # string   :style_id
    # string   :color_id
    # string   :conversion_type

    text     :display_fulltext, using: :display
    text     :account_display_fulltext, using: :account_display
    # text     :style_display_fulltext do self.style.subclass.display if self.style end
    # text     :subclass_display_fulltext do self.style.subclass.display if self.style && self.style.subclass end
    # text     :classification_display_fulltext do self.style.subclass.classification.display if self.style && self.style.subclass && self.style.subclass.classification end
    # text     :department_display_fulltext do self.style.subclass.classification.department.display if self.style && self.style.subclass && self.style.subclass.classification && self.style.subclass.classification.department end
    # text     :color_display_fulltext, using: :color_display
    # text     :size_display_fulltext, using: :size_display
  end
  # INDEXING (End)

end # class Omni::Sku

