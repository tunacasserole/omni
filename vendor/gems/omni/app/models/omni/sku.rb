class Omni::Sku < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :skus
  self.primary_key  = :sku_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness  => true,                         :allow_nil => false
  validates    :sku_nbr,                         :uniqueness  => true,                         :allow_nil => true  
  validates    :maintenance_level,               :lookup      => 'MAINTENANCE_LEVEL',          :allow_nil => true  
  validates    :conversion_type,                 :lookup      => 'CONVERSION_TYPE',            :allow_nil => true
  validates    :brand,                           :lookup      => 'BRAND',                      :allow_nil => true  
  validates    :fabric_content,                  :lookup      => 'FABRIC_CONTENT',             :allow_nil => true  
  validates    :replenishment_method,            :lookup      => 'REPLENISHMENT_METHOD',       :allow_nil => true  
  validates    :pack_type,                       :lookup      => 'PACK_TYPE',                  :allow_nil => true  
  validates    :sell_unit_uom_code,              :lookup      => 'SELL_UNIT_UOM_CODE',         :allow_nil => true  
  validates    :replenishment_source,            :lookup      => 'REPLENISHMENT_SOURCE',       :allow_nil => true  
  validates    :order_uom_code,                  :lookup      => 'ORDER_UOM_CODE',             :allow_nil => true  
  validates    :order_package_type,              :lookup      => 'ORDER_PACKAGE_TYPE',         :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :sku_id,                           :override  =>  false,        :with  => :guid              
  default      :sku_nbr,                          :override  =>  false,        :with  => :sequence,         :named=>"SKU_NBR"
  default      :is_converted,                     :override  =>  false,        :to    => false              
  default      :is_enabled,                       :override  =>  false,        :to    => false              
  default      :initial_retail_price,             :override  =>  false,        :to    => 0                  
  default      :suggested_retail_price,           :override  =>  false,        :to    => 0                  
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
  default      :is_taxable,                       :override  =>  false,        :to    => false              
  default      :garment_pieces,                   :override  =>  false,        :to    => 0                  
  default      :is_special_order,                 :override  =>  false,        :to    => false              
  default      :is_special_size,                  :override  =>  false,        :to    => false              
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
  belongs_to   :generic_sku,                     :class_name => 'Omni::Sku',                     :foreign_key => 'generic_sku_id'
  belongs_to   :add_on_sku,                      :class_name => 'Omni::Sku',                     :foreign_key => 'add_on_sku_id'
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  belongs_to   :style_color_size,                :class_name => 'Omni::StyleColorSize',          :foreign_key => 'style_color_size_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  belongs_to   :color,                           :class_name => 'Omni::Color',                   :foreign_key => 'color_id'
  belongs_to   :size,                            :class_name => 'Omni::Size',                    :foreign_key => 'size_id'
  belongs_to   :subclass,                        :class_name => 'Omni::Subclass',                :foreign_key => 'subclass_id'
  belongs_to   :buyer_user,                      :class_name => 'Buildit::User',                 :foreign_key => 'buyer_user_id'
  belongs_to   :product_type,                    :class_name => 'Omni::ProductType',             :foreign_key => 'product_type_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  has_many     :sku_aliases,                     :class_name => 'Omni::SkuAlias',                :foreign_key => 'sku_id'
  has_many     :sku_locations,                   :class_name => 'Omni::SkuLocation',             :foreign_key => 'sku_id'  
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :generic_sku_display,                    :to => 'generic_sku.display'
    map :add_on_sku_display,                     :to => 'add_on_sku.display'
    map :site_display,                           :to => 'site.display'
    map :style_color_size_display,               :to => 'style_color_size.display'
    map :style_display,                          :to => 'style.display'
    map :color_display,                          :to => 'color.display'
    map :size_display,                           :to => 'size.display'
    map :subclass_display,                       :to => 'subclass.display'
    map :buyer_user_display,                     :to => 'buyer_user.full_name'
    map :product_type_display,                   :to => 'product_type.display'
    map :supplier_display,                       :to => 'supplier.display'
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

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :active do

  ### CALLBACKS ###
    after_transition :on => :discontinue, :do => :after_discontinue
    after_transition :on => :drop,        :do => :after_drop
    after_transition :on => :deactivate,  :do => :after_deactivate
    after_transition :on => :activate,    :do => :after_activate
    
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
  # FILTERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :sku_nbr
    string   :state
    string   :site_display do site.display if site end
    string   :conversion_type
    string   :color_display do color.display if color end
    string   :size_display do size.display if size end
    string   :state
    string   :sku_id    
    string   :style_id        
 
    text     :display_fulltext, :using => :display
    text     :sku_nbr_fulltext, :using => :sku_nbr
    text     :state_fulltext, :using => :state
    text     :site_display_fulltext, :using => :site_display
    text     :conversion_type_fulltext, :using => :conversion_type
    text     :color_display_fulltext, :using => :color_display
    text     :size_display_fulltext, :using => :size_display
  end 
  # INDEXING (End)

end # class Omni::Sku

