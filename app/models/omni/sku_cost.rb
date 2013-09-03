class Omni::SkuCost < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :sku_costs
  self.primary_key  = :sku_cost_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :sku_id,                          :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :sku_cost_id,                          :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display}"}
  default      :first_cost,                       :override  =>  false,        :to    => 0                  
  default      :last_cost,                        :override  =>  false,        :to    => 0                  
  default      :average_cost,                     :override  =>  false,        :to    => 0                  
  default      :on_hand_units,                    :override  =>  false,        :to    => 0                  
  default      :cost_pool,                        :override  =>  false,        :to    => 0                  
  default      :retail_pool,                      :override  =>  false,        :to    => 0                  
  default      :is_updated_average_cost,          :override  =>  false,        :to    => false              
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
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
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
    integer  :last_cost
    integer  :average_cost
    integer  :on_hand_units
    integer  :cost_pool
    boolean  :is_updated_average_cost
    integer  :first_cost
 
    text     :last_cost_fulltext, :using => :last_cost
    text     :average_cost_fulltext, :using => :average_cost
    text     :on_hand_units_fulltext, :using => :on_hand_units
    text     :cost_pool_fulltext, :using => :cost_pool
    text     :first_cost_fulltext, :using => :first_cost
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Cost

