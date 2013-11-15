class Omni::SkuSupplier < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :sku_suppliers
  self.primary_key  = :sku_supplier_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :supplier_id, uniqueness: { scope: :sku_id, message: "Supplier already exists for this SKU." }
  # validates    :pack_type,                       :lookup      => 'PACK_TYPE',                  :allow_nil => true
  # validates    :master_pack_uom_code,            :lookup      => 'MASTER_PACK_UOM_CODE',       :allow_nil => true
  # validates    :inner_pack_uom_code,             :lookup      => 'INNER_PACK_UOM_CODE',        :allow_nil => true
  validates    :order_multiple_type,             :lookup      => 'ORDER_MULTIPLE_TYPE',        :allow_nil => true
  # validates    :fob_point,                       :lookup      => 'FOB_POINT',                  :allow_nil => true
  # validates    :freight_term,                    :lookup      => 'FREIGHT_TERM',               :allow_nil => true

  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :sku_supplier_id,                  :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.supplier_display}"}
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
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :cost,                            :class_name => 'Omni::Cost',                    :foreign_key => 'cost_id'
  belongs_to   :pallet_container,                :class_name => 'Omni::Container',               :foreign_key => 'pallet_container_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :cost_display,                           :to => 'cost.display'
    map :pallet_container_display,               :to => 'pallet_container.display'
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
    string   :sku_id
    string   :supplier_id
    string   :sku_display do sku.display if sku end
    string   :supplier_display do supplier.display if supplier end
    string   :supplier_item_identifier
    boolean  :is_primary_supplier
    integer  :supplier_cost
    string   :display

    text     :sku_display_fulltext, :using => :sku_display
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :supplier_item_identifier_fulltext, :using => :supplier_item_identifier
    text     :supplier_cost_fulltext, :using => :supplier_cost
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  # state_machine :state, :initial => :new do

  # ### CALLBACKS ###
  #   after_transition :on => :activate,       :do => :after_activate

  #   ## EVENTS ###
  #   event :activate do
  #     transition :new => :active
  #     transition :inactive => :active
  #   end

  #   event :deactivate do
  #     transition :active => :inactive
  #   end

  #   state :active do
  #     # validates  :concatenated_name, :presence  => true
  #   end

  # end
  # # STATES (End)


  # # STATE HANDLERS (Start) ====================================================================
  # def after_activate
  #   puts '--- done with after_activate ---'
  #   puts 'ready...'
  # end
  # STATE HANDLERS (End)
end # class Omni::SkuSupplier

