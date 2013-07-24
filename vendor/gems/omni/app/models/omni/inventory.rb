class Omni::Inventory < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :inventories
  self.primary_key  = :inventory_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :sku_id,                          :presence    => true
  validates    :location_id,                     :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :inventory_id,                     :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.location_display}"}
  default      :on_hand_units,                    :override  =>  false,        :to    => 0                  
  default      :in_transit_units,                 :override  =>  false,        :to    => 0                  
  default      :non_sellable_units,               :override  =>  false,        :to    => 0                  
  default      :allocated_units,                  :override  =>  false,        :to    => 0                  
  default      :reserved_units,                   :override  =>  false,        :to    => 0                  
  default      :shipping_units,                   :override  =>  false,        :to    => 0                  
  default      :work_in_process_units,            :override  =>  false,        :to    => 0                  
  default      :requested_units,                  :override  =>  false,        :to    => 0                  
  default      :frozen_units,                     :override  =>  false,        :to    => 0                  
  default      :supplier_on_order_units,          :override  =>  false,        :to    => 0                  
  default      :warehouse_on_order_units,         :override  =>  false,        :to    => 0                  
  default      :cost_pool,                        :override  =>  false,        :to    => 0                  
  default      :retail_pool,                      :override  =>  false,        :to    => 0                  
  default      :boy_units,                        :override  =>  false,        :to    => 0                  
  default      :boy_cost,                         :override  =>  false,        :to    => 0                  
  default      :boy_retail,                       :override  =>  false,        :to    => 0                  
  default      :last_inventory_units,             :override  =>  false,        :to    => 0                  
  default      :last_inventory_cost,              :override  =>  false,        :to    => 0                  
  default      :last_inventory_retail,            :override  =>  false,        :to    => 0                  
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
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                       :to => 'location.display'
  end
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
    integer  :on_hand_units
    integer  :in_transit_units
    integer  :non_sellable_units
    integer  :allocated_units
    integer  :work_in_process_units
    integer  :supplier_on_order_units
 
    text     :on_hand_units_fulltext, :using => :on_hand_units
    text     :in_transit_units_fulltext, :using => :in_transit_units
    text     :non_sellable_units_fulltext, :using => :non_sellable_units
    text     :allocated_units_fulltext, :using => :allocated_units
    text     :work_in_process_units_fulltext, :using => :work_in_process_units
    text     :supplier_on_order_units_fulltext, :using => :supplier_on_order_units
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Inventory

