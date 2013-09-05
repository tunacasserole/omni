class Omni::Area < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :areas
  self.primary_key  = :area_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :location_id,                     :presence    => true
  validates    :area_nbr,                        :presence    => true
  validates    :short_name,                      :presence    => true
  validates    :area_nbr,                        :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :area_id,                          :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda {|m| "#{m.location_display} - Area #{m.area_nbr} - #{m.short_name}"}
  default      :area_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"AREA_NBR"
  default      :is_receiving,                     :override  =>  false,        :to    => false              
  default      :is_picking,                       :override  =>  false,        :to    => false              
  default      :is_reserve,                       :override  =>  false,        :to    => false              
  default      :is_putaway,                       :override  =>  false,        :to    => false              
  default      :is_supplier_return,               :override  =>  false,        :to    => false              
  default      :is_processing,                    :override  =>  false,        :to    => false              
  default      :is_shipping,                      :override  =>  false,        :to    => false              
  default      :is_put_location,                  :override  =>  false,        :to    => false              
  default      :is_special_handling,              :override  =>  false,        :to    => false              
  default      :is_quality_control,               :override  =>  false,        :to    => false              
  default      :is_quick_case,                    :override  =>  false,        :to    => false              
  default      :is_many_sku_per_bin,              :override  =>  false,        :to    => false              
  default      :default_cube_capacity,            :override  =>  false,        :to    => 0                  
  default      :is_request_cube_calculation,      :override  =>  false,        :to    => false              
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
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :bins,                            :class_name => 'Omni::Bin',                     :foreign_key => 'area_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
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
    string   :location_display do location.display if location end
    string   :area_nbr
    boolean  :is_receiving
    boolean  :is_picking
    boolean  :is_reserve
    boolean  :is_put_location
    boolean  :is_special_handling
    boolean  :is_quality_control
    boolean  :is_quick_case
 
    text     :location_display_fulltext, :using => :location_display
    text     :area_nbr_fulltext, :using => :area_nbr
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Area
