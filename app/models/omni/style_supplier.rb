class Omni::StyleSupplier < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :style_suppliers
  self.primary_key  = :style_supplier_id
  # METADATA (End)




  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :supplier_id, uniqueness: { scope: :style_id, message: "Supplier already exists for this style." }
  validates    :pack_type,                       :lookup      => 'PACK_TYPE',                  :allow_nil => true
  validates    :master_pack_uom_code,            :lookup      => 'MASTER_PACK_UOM_CODE',       :allow_nil => true
  validates    :inner_pack_uom_code,             :lookup      => 'INNER_PACK_UOM_CODE',        :allow_nil => true
  validates    :order_multiple_type,             :lookup      => 'ORDER_MULTIPLE_TYPE',        :allow_nil => true
  # validates    :fob_point,                       :lookup      => 'FOB_POINT',                  :allow_nil => true
  validates    :freight_term,                    :lookup      => 'FREIGHT_TERM',               :allow_nil => true

    # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :style_supplier_id,                :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.style_display} - #{m.supplier_display}"}
  default      :is_primary_supplier,              :override  =>  false,        :to    => false
  default      :is_manufacturer,                  :override  =>  false,        :to    => false
  default      :is_discontinued,                  :override  =>  false,        :to    => false
  default      :supplier_cost_units,              :override  =>  false,        :to    => 0
  default      :supplier_cost,                    :override  =>  false,        :to    => 0
  default      :master_pack_units,                :override  =>  false,        :to    => 0
  default      :master_pack_length,               :override  =>  false,        :to    => 0
  default      :master_pack_height,               :override  =>  false,        :to    => 0
  default      :master_pack_width,                :override  =>  false,        :to    => 0
  default      :master_pack_weight,               :override  =>  false,        :to    => 0
  default      :inner_pack_units,                 :override  =>  false,        :to    => 0
  default      :inner_pack_length,                :override  =>  false,        :to    => 0
  default      :inner_pack_height,                :override  =>  false,        :to    => 0
  default      :inner_pack_width,                 :override  =>  false,        :to    => 0
  default      :inner_pack_weight,                :override  =>  false,        :to    => 0
  default      :minimum_order_units,              :override  =>  false,        :to    => 0
  default      :minimum_order_value,              :override  =>  false,        :to    => 0
  default      :minimum_order_weight,             :override  =>  false,        :to    => 0
  default      :minimum_order_cube,               :override  =>  false,        :to    => 0
  default      :extra_cost,                       :override  =>  false,        :to    => 0
  default      :is_included_extra_cost,           :override  =>  false,        :to    => false
  default      :is_conveyable_master_pack,        :override  =>  false,        :to    => false
  default      :is_conveyable_inner_pack,         :override  =>  false,        :to    => false
  default      :pallet_tie,                       :override  =>  false,        :to    => 0
  default      :pallet_high,                      :override  =>  false,        :to    => 0
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
  has_many     :style_supplier_colors,           :class_name => 'Omni::StyleSupplierColor',      :foreign_key => 'style_supplier_id'
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_display,                          :to => 'style.display'
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

  hook  :after_create,       :add_style_supplier_colors,                 10

  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :style_display do style.display if style end
    string   :supplier_display do supplier.display if supplier end
    boolean  :is_primary_supplier
    boolean  :is_manufacturer
    string   :style_id
    string   :display
    string   :state

    text     :style_display_fulltext, :using => :style_display
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :active do

  ### CALLBACKS ###
    after_transition :on => :activate, :do => :after_activate
    after_transition :on => :deactivate, :do => :after_deactivate

  ### EVENTS ###
    event :activate do
      transition :inactive => :active
    end

    event :deactivate do
      transition :active => :inactive
    end

  end
  # STATES (End)


  # STATE HANDLERS (Start) ====================================================================
  def after_activate

  end

  def after_deactivate

  end
  # STATE HANDLERS (End)


  # HELPERS (Start) =====================================================================

  def add_style_supplier_colors
  # System inserts a StyleSupplierColor row in active state for the added supplier and every color for the style (from StyleColor).
  # Omni::StyleSupplier.where(:style_supplier_id => self.style_supplier_id).each do |ss|
    colors = Omni::StyleColor.where(:style_id => style_id)
    colors.each do |sc|
      x = Omni::StyleSupplierColor.new
      x.style_supplier_id = self.style_supplier_id
      x.style_color_id = sc.style_color_id
      x.save
    end
  # end

  end
  # HELPERS (End)


end # class Omni::StyleSupplier

