class Omni::ProjectionDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :projection_details
  self.primary_key  = :projection_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_audit
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :projection_detail_id,             :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.projection_display} - #{m.sku_display} - #{m.location_display}"}
  default      :projection_line_nbr,              :override  =>  false,        :with  => :sequence,         :named=>"PROJECTION_LINE_NBR"
  default      :forecast_units,                   :override  =>  false,        :to    => 0                  
  default      :proposed_units,                   :override  =>  false,        :to    => 0                  
  default      :approved_units,                   :override  =>  false,        :to    => 0                  
  default      :sale_units_2012,                   :override  =>  false,        :to    => 0                  
  default      :sale_units_2011,                   :override  =>  false,        :to    => 0                  
  default      :sale_units_2010,                   :override  =>  false,        :to    => 0                  
  default      :sale_units_2013,                   :override  =>  false,        :to    => 0                          
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
  belongs_to   :projection,                      :class_name => 'Omni::Projection',              :foreign_key => 'projection_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :projection_display,                     :to => 'projection.display'
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                       :to => 'location.display'
    map :style_id,                               :to => 'sku.style_id'
    map :style_display,                          :to => 'sku.style_display'    
    map :color_id,                               :to => 'sku.color_id'
    map :color_display,                          :to => 'sku.color_display'
    map :size_id,                               :to => 'sku.size_id'    
    map :size_display,                          :to => 'sku.size_display'    
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
    string   :projection_display do projection.display if projection end
    string   :sku_display do sku.display if sku end
    string   :location_display do location.display if location end
    string   :projection_id
    string   :sku_id    
    string   :size_id    
    string   :color_id            
    string   :location_id    
    string   :style_id        
    integer  :forecast_units
    integer  :proposed_units
    integer  :approved_units
    string   :display
    string   :color_display do sku.color.display if sku and sku.color end
    string   :style_display do sku.style.display if sku and sku.style end
    string   :size_display do sku.size.display if sku and sku.size end      
 
    text     :size_display_fulltext, :using => :size_display
    text     :style_display_fulltext, :using => :style_display
    text     :color_display_fulltext, :using => :color_display    
    text     :projection_display_fulltext, :using => :projection_display
    text     :sku_display_fulltext, :using => :sku_display
    text     :location_display_fulltext, :using => :location_display
    text     :forecast_units_fulltext, :using => :forecast_units
    text     :proposed_units_fulltext, :using => :proposed_units
    text     :approved_units_fulltext, :using => :approved_units
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ProjectionDetail

