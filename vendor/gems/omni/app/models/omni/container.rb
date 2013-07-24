class Omni::Container < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :containers
  self.primary_key  = :container_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :container_nbr,                   :presence    => true
  validates    :container_nbr,                   :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :container_id,                     :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda {|m| "#{m.container_type} - #{m.description} - #{m.container_nbr}"}
  default      :container_nbr,                    :override  =>  false,        :with  => :sequence,         :named=>"CONTAINER_NBR"
  default      :is_labeled,                       :override  =>  false,        :to    => false              
  default      :barcode_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"BARCODE_NBR"
  default      :is_located,                       :override  =>  false,        :to    => false              
  default      :is_moving,                        :override  =>  false,        :to    => false              
  default      :is_in_transit,                    :override  =>  false,        :to    => false              
  default      :is_container_lost,                :override  =>  false,        :to    => false              
  default      :capacity,                         :override  =>  false,        :to    => 0                  
  default      :capacity_weight,                  :override  =>  false,        :to    => 0                  
  default      :inside_length,                    :override  =>  false,        :to    => 0                  
  default      :inside_height,                    :override  =>  false,        :to    => 0                  
  default      :inside_width,                     :override  =>  false,        :to    => 0                  
  default      :is_outside_dimensions,            :override  =>  false,        :to    => false              
  default      :outside_length,                   :override  =>  false,        :to    => 0                  
  default      :outside_height,                   :override  =>  false,        :to    => 0                  
  default      :outside_width,                    :override  =>  false,        :to    => 0                  
  default      :tare_weight,                      :override  =>  false,        :to    => 0                  
  default      :fill_percent,                     :override  =>  false,        :to    => 0                  
  default      :carton_count,                     :override  =>  false,        :to    => 0                  
  default      :actual_weight,                    :override  =>  false,        :to    => 0                  
  default      :actual_cube,                      :override  =>  false,        :to    => 0                  
  default      :filled_percent,                   :override  =>  false,        :to    => 0                  
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
  has_many     :shipment_details,                :class_name => 'Omni::ShipmentDetail',          :foreign_key => 'container_id'
  belongs_to   :parent_container,                :class_name => 'Omni::Container',               :foreign_key => 'parent_container_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :bin,                             :class_name => 'Omni::Bin',                     :foreign_key => 'bin_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :container_details,               :class_name => 'Omni::ContainerDetail',         :foreign_key => 'container_id'
  has_many     :sku_suppliers,                   :class_name => 'Omni::SkuSupplier',             :foreign_key => 'container_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :parent_container_display,               :to => 'parent_container.display'
    map :location_display,                       :to => 'location.display'
    map :bin_display,                            :to => 'bin.display'
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
    string   :container_nbr
    string   :description
    string   :container_type
    string   :parent_container_display do parent_container.display if parent_container end
    string   :barcode_nbr
    string   :location_display do location.display if location end
    string   :state
    string   :bin_display do bin.display if bin end
 
    text     :container_nbr_fulltext, :using => :container_nbr
    text     :description_fulltext, :using => :description
    text     :container_type_fulltext, :using => :container_type
    text     :parent_container_display_fulltext, :using => :parent_container_display
    text     :barcode_nbr_fulltext, :using => :barcode_nbr
    text     :location_display_fulltext, :using => :location_display
    text     :state_fulltext, :using => :state
    text     :bin_display_fulltext, :using => :bin_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Container

