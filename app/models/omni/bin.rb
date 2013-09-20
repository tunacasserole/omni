class Omni::Bin < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :bins
  self.primary_key  = :bin_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :location_id,                     :presence    => true
  validates    :area_id,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :bin_id,                           :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda {|m| "#{m.area_display} - #{m.aisle} - #{m.section} - #{m.level} - #{m.position} - Bin Code: #{m.bin_code}"}
  default      :bin_nbr,                          :override  =>  false,        :with  => :sequence,         :named=>"BIN_NBR"
  default      :is_many_sku_per_bin,              :override  =>  false,        :to    => false              
  default      :pick_sequence,                    :override  =>  false,        :to    => 0                  
  default      :cube_capacity,                    :override  =>  false,        :to    => 0                  
  default      :is_area,                          :override  =>  false,        :to    => false              
  default      :is_count_cartons,                 :override  =>  false,        :to    => false              
  default      :is_empty,                         :override  =>  false,        :to    => false              
  default      :carton_count,                     :override  =>  false,        :to    => 0                  
  default      :on_hand_cube,                     :override  =>  false,        :to    => 0                  
  default      :due_in_cube,                      :override  =>  false,        :to    => 0                  
  default      :due_out_cube,                     :override  =>  false,        :to    => 0                  
  default      :is_request_label_print,           :override  =>  false,        :to    => false              
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
  has_many     :bin_skus,                        :class_name => 'Omni::BinSku',                  :foreign_key => 'bin_id'
  has_many     :adjustments,                     :class_name => 'Omni::Adjustment',              :foreign_key => 'bin_id'
  has_many     :containers,                      :class_name => 'Omni::Container',               :foreign_key => 'bin_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :area,                            :class_name => 'Omni::Area',                    :foreign_key => 'area_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :area_display,                           :to => 'area.display'
    map :area_short_name,                        :to => 'area.short_name'
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
    string   :area_display do area.display if area end
    string   :area_short_name do area.short_name if area.short_name end
    string   :aisle
    string   :section
    string   :level
    string   :position
    string   :bin_nbr
    string   :bin_code
    string   :bin_type
    date     :last_activity_date
    string   :zone
    string   :pick_zone
    boolean  :is_empty
    boolean  :is_request_label_print
    string   :bin_label_type
    boolean  :is_enabled
 
    text     :area_display_fulltext, :using => :area_display
    text     :area_short_name_fulltext, :using => :area_short_name
    text     :aisle_fulltext, :using => :aisle
    text     :section_fulltext, :using => :section
    text     :level_fulltext, :using => :level
    text     :position_fulltext, :using => :position
    text     :bin_nbr_fulltext, :using => :bin_nbr
    text     :bin_code_fulltext, :using => :bin_code
    text     :bin_type_fulltext, :using => :bin_type
    text     :zone_fulltext, :using => :zone
    text     :pick_zone_fulltext, :using => :pick_zone
    text     :bin_label_type_fulltext, :using => :bin_label_type
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Bin

