class Omni::DailyResult < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :daily_results
  self.primary_key  = :daily_result_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :sku_id,                          :presence    => true
  validates    :location_id,                     :presence    => true
  validates    :date,                            :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :daily_result_id,                  :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.date}"}
  default      :adjusted_cost,                    :override  =>  false,        :to    => 0                  
  default      :adjusted_retail,                  :override  =>  false,        :to    => 0                  
  default      :adjusted_units,                   :override  =>  false,        :to    => 0                  
  default      :backorder_cost,                   :override  =>  false,        :to    => 0                  
  default      :backorder_retail,                 :override  =>  false,        :to    => 0                  
  default      :backorder_units,                  :override  =>  false,        :to    => 0                  
  default      :clearance_sale_cost,              :override  =>  false,        :to    => 0                  
  default      :clearance_sale_retail,            :override  =>  false,        :to    => 0                  
  default      :clearance_sale_units,             :override  =>  false,        :to    => 0                  
  default      :consumed_cost,                    :override  =>  false,        :to    => 0                  
  default      :consumed_retail,                  :override  =>  false,        :to    => 0                  
  default      :consumed_units,                   :override  =>  false,        :to    => 0                  
  default      :net_inventory_cost,               :override  =>  false,        :to    => 0                  
  default      :net_inventory_retail,             :override  =>  false,        :to    => 0                  
  default      :net_inventory_units,              :override  =>  false,        :to    => 0                  
  default      :net_sale_cost,                    :override  =>  false,        :to    => 0                  
  default      :net_sale_retail,                  :override  =>  false,        :to    => 0                  
  default      :net_sale_units,                   :override  =>  false,        :to    => 0                  
  default      :produced_cost,                    :override  =>  false,        :to    => 0                  
  default      :produced_retail,                  :override  =>  false,        :to    => 0                  
  default      :produced_units,                   :override  =>  false,        :to    => 0                  
  default      :promo_sale_cost,                  :override  =>  false,        :to    => 0                  
  default      :promo_sale_retail,                :override  =>  false,        :to    => 0                  
  default      :promo_sale_units,                 :override  =>  false,        :to    => 0                  
  default      :purchased_cost,                   :override  =>  false,        :to    => 0                  
  default      :purchased_retail,                 :override  =>  false,        :to    => 0                  
  default      :purchased_units,                  :override  =>  false,        :to    => 0                  
  default      :received_cost,                    :override  =>  false,        :to    => 0                  
  default      :received_retail,                  :override  =>  false,        :to    => 0                  
  default      :received_units,                   :override  =>  false,        :to    => 0                  
  default      :requested_cost,                   :override  =>  false,        :to    => 0                  
  default      :requested_retail,                 :override  =>  false,        :to    => 0                  
  default      :requested_units,                  :override  =>  false,        :to    => 0                  
  default      :return_sale_cost,                 :override  =>  false,        :to    => 0                  
  default      :return_sale_retail,               :override  =>  false,        :to    => 0                  
  default      :return_sale_units,                :override  =>  false,        :to    => 0                  
  default      :shipped_cost,                     :override  =>  false,        :to    => 0                  
  default      :shipped_retail,                   :override  =>  false,        :to    => 0                  
  default      :shipped_units,                    :override  =>  false,        :to    => 0                  
  default      :work_in_process_cost,             :override  =>  false,        :to    => 0                  
  default      :work_in_process_retail,           :override  =>  false,        :to    => 0                  
  default      :work_in_process_units,            :override  =>  false,        :to    => 0                  
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
    date     :date
    integer  :net_inventory_cost
    integer  :net_inventory_units
    integer  :net_sale_retail
    integer  :net_sale_units
 
    text     :net_inventory_cost_fulltext, :using => :net_inventory_cost
    text     :net_inventory_units_fulltext, :using => :net_inventory_units
    text     :net_sale_retail_fulltext, :using => :net_sale_retail
    text     :net_sale_units_fulltext, :using => :net_sale_units
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::DailyResult
