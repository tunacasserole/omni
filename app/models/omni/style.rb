class Omni::Style < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :styles
  self.primary_key  = :style_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         :presence    => true
  # validates    :subclass_id,                     :presence    => true
  # validates    :size_group_id,                   :presence    => true
  # validates    :display,                         :uniqueness  => true
  # validates    :style_nbr,                       :uniqueness  => true,                         :allow_nil => true
  # validates    :brand,                           :lookup      => 'BRAND',                      :allow_nil => true
  # validates    :fabric_content,                  :lookup      => 'FABRIC_CONTENT',             :allow_nil => true
  # validates    :conversion_type,                 :lookup      => 'CONVERSION_TYPE',            :allow_nil => true
  validates    :replenishment_method,            :lookup      => 'REPLENISHMENT_METHOD',       :allow_nil => true
  validates    :replenishment_source,            :lookup      => 'REPLENISHMENT_SOURCE',       :allow_nil => true
  validates    :pack_type,                       :lookup      => 'PACK_TYPE',                  :allow_nil => true
  validates    :sell_unit_uom_code,              :lookup      => 'SELL_UNIT_UOM_CODE',         :allow_nil => true
  validates    :order_uom_code,                  :lookup      => 'ORDER_UOM_CODE',             :allow_nil => true
  validates    :order_package_type,              :lookup      => 'ORDER_PACKAGE_TYPE',         :allow_nil => true
  validates    :maintenance_level,               :lookup      => 'MAINTENANCE_LEVEL',          :allow_nil => true
  validates    :sku_name_method,                 :lookup      => 'SKU_NAME_METHOD',            :allow_nil => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :style_id,                         :override  =>  false,        :with  => :guid
  default      :style_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"STYLE_NBR"
  default      :initial_retail_price,             :override  =>  false,        :to    => 0
  default      :suggested_retail_price,           :override  =>  false,        :to    => 0
  default      :planning_retail_price,            :override  =>  false,        :to    => 0
  default      :smoothing_factor,                 :override  =>  false,        :to    => 0
  default      :minimum_on_hand_units,            :override  =>  false,        :to    => 0
  default      :maximum_on_hand_units,            :override  =>  false,        :to    => 0
  default      :is_not_stocked,                   :override  =>  false,        :to    => false
  default      :sell_unit_length,                 :override  =>  false,        :to    => 0
  default      :sell_unit_height,                 :override  =>  false,        :to    => 0
  default      :sell_unit_width,                  :override  =>  false,        :to    => 0
  default      :sell_unit_weight,                 :override  =>  false,        :to    => 0
  default      :is_conveyable_sell_unit,          :override  =>  false,        :to    => false
  default      :is_discountable,                  :override  =>  false,        :to    => false
  default      :is_taxable,                       :override  =>  false,        :to    => true
  default      :garment_pieces,                   :override  =>  false,        :to    => 0
  default      :is_special_order,                 :override  =>  false,        :to    => false
  default      :is_converted,                     :override  =>  false,        :to    => false
  default      :is_convertible,                   :override  =>  false,        :to    => false
  default      :is_converted_heatset,             :override  =>  false,        :to    => false
  default      :is_converted_sewn,                :override  =>  false,        :to    => false
  default      :is_alterable,                     :override  =>  false,        :to    => false
  default      :is_usually_altered,               :override  =>  false,        :to    => false
  default      :is_enabled,                       :override  =>  false,        :to    => true
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
  belongs_to   :subclass,                        :class_name => 'Omni::Subclass',                :foreign_key => 'subclass_id'
  belongs_to   :product,                         :class_name => 'Omni::Product',                 :foreign_key => 'product_id'
  belongs_to   :buyer_user,                      :class_name => 'Buildit::User',                 :foreign_key => 'buyer_user_id'
  belongs_to   :product_type,                    :class_name => 'Omni::ProductType',             :foreign_key => 'product_type_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :generic_style,                   :class_name => 'Omni::Style',                   :foreign_key => 'generic_style_id'
  belongs_to   :add_on_sku,                      :class_name => 'Omni::Sku',                     :foreign_key => 'add_on_sku_id'
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  belongs_to   :size_group,                      :class_name => 'Omni::SizeGroup',               :foreign_key => 'size_group_id'
#
  has_many     :style_suppliers,                 :class_name => 'Omni::StyleSupplier',           :foreign_key => 'style_id'
  has_many     :style_locations,                 :class_name => 'Omni::StyleLocation',           :foreign_key => 'style_id'
  has_many     :style_colors,                    :class_name => 'Omni::StyleColor',              :foreign_key => 'style_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  has_many     :skus,                            :class_name => 'Omni::Sku',                     :foreign_key => 'style_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :subclass_display,                       :to => 'subclass.display'
    map :product_display,                        :to => 'product.display'
    map :buyer_user_display,                     :to => 'buyer_user.full_name'
    map :product_type_display,                   :to => 'product_type.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :generic_style_display,                  :to => 'generic_style.display'
    map :size_group_display,                     :to => 'size_group.display'
    map :site_display,                           :to => 'site.display'
    map :add_on_sku_display,                     :to => 'add_on_sku.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HELPERS (Start) =====================================================================
  # HELPERS (End) =====================================================================

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### CALLBACKS ###
    after_transition :on => :release,        :do => :after_release
    # after_transition :on => :locations,   :do => :after_locations
    after_transition :on => :build,       :do => :after_build
    after_transition :on => :discontinue, :do => :after_discontinue
    after_transition :on => :drop,        :do => :after_drop
    after_transition :on => :deactivate,  :do => :after_deactivate
    after_transition :on => :activate,    :do => :after_activate

    ## EVENTS ###
    event :release do
      transition :draft => :pending_approval
    end

    event :approve do
      transition :pending_approval => :active
    end

    event :build do
      transition :active => :active
    end

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

    state :pending_approval do
      validates :description,        :presence    => true
      validates :concatenated_name,  :presence    => true
      validates :pos_name,           :presence    => true
      validates :brand,              :presence    => true
      validates :generic_style_id,   :presence    => true,  if: 'is_converted?'
      validates :site_id,            :presence    => true,  if: 'is_converted?'
      validates :add_on_sku_id,      :presence    => true,  if: 'is_converted?'
      validates :conversion_type,    :presence    => true,  if: 'is_converted?'
      validates :initial_retail_price, :greater_than => 0
      validates :planning_retail_price, :greater_than => 0
      validate :conversion
    end

    state :active do
      validates  :concatenated_name, :presence  => true
      validates  :pos_name, :presence  => true
      validates  :subclass_id, :presence  => true
      validates  :size_group_id, :presence  => true
    end

  end
  # STATES (End)

  def conversion
    errors.add(:generic_style_id, 'Not a valid generic style') if is_converted unless (generic_style && generic_style.is_converted)
  end

  # STATE HANDLERS (Start) ====================================================================
  def after_release
    puts '--- done with after_release ---'
    puts 'ready...'
  end

  def after_activate
    self.effective_date = Time.now
    # self.save
    puts '--- done with activate ---'
    puts 'ready...'
  end

  def locations
  # adds a StyleLocation row for the Style and every Location where is_enabled = True (bypass any Locations that already have a StyleLocation
    puts '--- starting building locations ---'
    Omni::Location.all.each do |l|
      next unless l.is_enabled == true
      x = Omni::StyleLocation.new
      x.style_id = self.style_id
      x.location_id = l.location_id
      x.save
    end
    puts '--- done with building locations ---'
    puts 'ready...'
  end

  ######## GENERATE SKU DATA ##############
  def after_build
    puts '--- starting building skus ---'
    gen_skus
    puts '--- gen sku suppliers ---'
    gen_sku_suppliers
    puts '--- gen inventories ---'
    gen_inventories
    gen_sku_prices
    puts '--- done with building skus ---'
    puts 'ready...'
  end

  def gen_skus
    # Add Sku row for each StyleColorSize row in active state
    self.style_colors.each do |sc|
      Omni::StyleColorSize.where(:style_color_id => sc.style_color_id, :state => 'active').each do |scs|
        x = Omni::Sku.new
        x.display = "#{self.display}-#{scs.style_color.color_display}-#{scs.size_display}"
        x.maintenance_level = self.maintenance_level
        # x.generic_sku_id = self.generic_sku_id
        x.add_on_sku_id = self.add_on_sku_id
        x.site_id = self.site_id
        x.conversion_type = self.conversion_type
        x.style_color_size_id = scs.style_color_size_id
        x.style_id = self.style_id
        x.color_id = scs.style_color.color_id
        x.size_id = scs.size_id
        x.effective_date = Time.now
        x.subclass_id = self.subclass_id
        x.buyer_user_id = self.buyer_user_id
        x.brand = self.brand
        x.product_type_id = self.product_type_id
        x.fabric_content = self.fabric_content
        x.initial_retail_price = self.initial_retail_price
        x.suggested_retail_price = self.suggested_retail_price
        x.smoothing_factor = self.smoothing_factor
        x.replenishment_method = self.replenishment_method
        x.minimum_on_hand_units = self.minimum_on_hand_units
        x.maximum_on_hand_units = self.maximum_on_hand_units
        x.pack_type = self.pack_type
        x.replenishment_source = self.replenishment_source
        x.is_not_stocked = self.is_not_stocked
        x.sell_unit_uom_code = self.sell_unit_uom_code
        x.sell_unit_length = self.sell_unit_length
        x.sell_unit_height = self.sell_unit_height
        x.sell_unit_width = self.sell_unit_width
        x.sell_unit_weight = self.sell_unit_weight
        x.is_conveyable_sell_unit = self.is_conveyable_sell_unit
        x.is_discountable = self.is_discountable
        x.is_taxable = self.is_taxable
        x.order_uom_code = self.order_uom_code
        x.order_package_type = self.order_package_type
        x.garment_pieces = self.garment_pieces
        x.is_special_order = self.is_special_order
        # x.is_special_size = self.is_special_size
        x.save
        # update style color size sku_id
        scs.sku_id = x.sku_id   # Update the StyleColorSize sku_id to the one just built
        scs.state = 'generated'
        scs.save
      end
    end
  end

  def gen_sku_suppliers
    # Add SkuSupplier row for each Sku & all StyleSupplier rows in active state
    self.skus.each do |sku|
      next unless sku.state == 'active'
      Omni::StyleSupplier.where(:style_id => self.style_id).each do |ss|
        x = Omni::SkuSupplier.new
        x.sku_id = sku.sku_id
        x.supplier_id = ss.supplier_id
        x.is_primary_supplier = ss.is_primary_supplier
        x.is_manufacturer = ss.is_manufacturer
        x.is_discontinued = ss.is_discontinued
        x.supplier_cost_units = ss.supplier_cost_units
        x.supplier_cost = ss.supplier_cost
        x.master_pack_units = ss.master_pack_units
        x.master_pack_length = ss.master_pack_length
        x.master_pack_height = ss.master_pack_height
        x.master_pack_width = ss.master_pack_width
        x.master_pack_weight = ss.master_pack_weight
        x.inner_pack_units = ss.inner_pack_units
        x.inner_pack_uom_code = ss.inner_pack_uom_code
        x.inner_pack_length = ss.inner_pack_length
        x.inner_pack_height = ss.inner_pack_height
        x.inner_pack_width = ss.inner_pack_width
        x.inner_pack_weight = ss.inner_pack_weight
        x.pack_type = ss.pack_type
        x.minimum_order_units = ss.minimum_order_units
        x.minimum_order_value = ss.minimum_order_value
        x.minimum_order_weight = ss.minimum_order_weight
        x.minimum_order_cube = ss.minimum_order_cube
        x.order_multiple_type = ss.order_multiple_type
        x.extra_cost = ss.extra_cost
        x.is_included_extra_cost = ss.is_included_extra_cost
        x.origin_country = ss.origin_country
        x.freight_term = ss.freight_term
        x.is_conveyable_master_pack = ss.is_conveyable_master_pack
        x.is_conveyable_inner_pack = ss.is_conveyable_inner_pack
        x.pallet_tie = ss.pallet_tie
        x.pallet_high = ss.pallet_high
        x.save
        puts "sku suppler row created..................................."
      end
    end
  end

  def gen_inventories
    # Add inventory rows for each Sku & all StyleLocation rows in active state
    myself = self
    myself.skus.each do |sku|
      next unless sku.state == 'active'
      Omni::StyleLocation.where(style_id: myself.style_id).each do |sl|
        x = Omni::Inventory.new
        x.sku_id = sku.sku_id
        x.location_id = sl.location_id
        x.supplier_id = myself.supplier_id
        x.is_authorized = sl.is_authorized
        x.is_taxable = sl.is_taxable
        x.is_special_order = sl.is_special_order
        x.is_discontinued = sl.is_discontinued
        x.replenishment_method = sl.replenishment_method
        x.replenishment_source = sl.replenishment_source
        x.supplier_id = sl.supplier_id
        x.safety_stock_units = sl.safety_stock_units
        x.safety_stock_days = sl.safety_stock_days
        # x.is_override_demand_exception = sl.is_override_demand_exception
        x.smoothing_factor = sl.smoothing_factor
        x.forecast_profile_id = sl.forecast_profile_id
        # x.is_soq_override = sl.is_soq_override
        x.minimum_units = sl.minimum_units
        x.maximum_units = sl.maximum_units
        x.seasonal_index_id = sl.seasonal_index_id
        x.save
      end
    end
  end

  def gen_sku_prices
    # Add SkuPrice row for each Sku - Add to National Price Book using initial_retail_price from Style
    npb_id = Omni::SystemOption.first.price_book_id
    self.skus.each do |sku|
      next unless sku.state == 'active'
      x = Omni::SkuPrice.new
      x.sku_id = sku.sku_id
      x.price_book_id = npb_id
      x.retail_price = self.initial_retail_price
      x.effective_date = Time.now
      x.price_units = 1
      x.save
    end
  end

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
  filter :state_pending_approval,  :with => {state: {equal_to: 'pending_approval'}}, :priority => 40
  filter :state_draft,             :with => {state: {equal_to: 'draft'}},        :priority => 50
  filter :state_active,            :with => {state: {equal_to: 'active'}},       :priority => 60
  filter :state_discontinued,      :with => {state: {equal_to: 'discontinued'}}, :priority => 70
  filter :state_obsolete,          :with => {state: {equal_to: 'obsolete'}},     :priority => 80
  filter :state_inactive,          :with => {state: {equal_to: 'inactive'}},     :priority => 90
  # FILTERS (End)

  # HELPERS (Start) =======================================================================
  def inventories
    inventories = []
    self.skus.each do |sku|
      sku.inventories.each do |sl|
        inventories << sl
      end
    end
    inventories
  end
  # HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :style_id
    string   :style_nbr
    string   :display
    string   :subclass_id
    string   :subclass_display do subclass.display if subclass end
    string   :conversion_type
    string   :state

    text     :display_fulltext,  :using => :display
    text     :subclass_display_fulltext do self.subclass.display end
    text     :classification_display_fulltext do self.subclass.classification.display if self.subclass && self.subclass.classification end
    text     :department_display_fulltext do self.subclass.classification.department.display if self.subclass && self.subclass.classification && self.subclass.classification.department end
  end
  # INDEXING (End)


end # class Omni::Style


