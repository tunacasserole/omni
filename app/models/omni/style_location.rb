class Omni::StyleLocation < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :style_locations
  self.primary_key  = :style_location_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness  => true
  validates    :replenishment_method,            :lookup      => 'REPLENISHMENT_METHOD',       :allow_nil => true  
  validates    :replenishment_source,            :lookup      => 'REPLENISHMENT_SOURCE',       :allow_nil => true  
  validates    :location_id, uniqueness: { scope: :style_id, message: "Location already exists for this style." }  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :style_location_id,                :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.style_display} - #{m.location_display}"}
  default      :is_authorized,                    :override  =>  false,        :to    => false              
  default      :is_taxable,                       :override  =>  false,        :to    => false              
  default      :is_special_order,                 :override  =>  false,        :to    => false              
  default      :is_discontinued,                  :override  =>  false,        :to    => false              
  default      :safety_stock_units,               :override  =>  false,        :to    => 0                  
  default      :safety_stock_days,                :override  =>  false,        :to    => 0                  
  default      :is_override_demand_exception,     :override  =>  false,        :to    => false              
  default      :smoothing_factor,                 :override  =>  false,        :to    => 0                  
  default      :is_soq_override,                  :override  =>  false,        :to    => false              
  default      :minimum_units,                    :override  =>  false,        :to    => 0                  
  default      :maximum_units,                    :override  =>  false,        :to    => 0                  
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
  belongs_to   :style,                           :class_name => 'Omni::Style',                   :foreign_key => 'style_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',         :foreign_key => 'forecast_profile_id'
  belongs_to   :seasonal_index,                  :class_name => 'Omni::SeasonalIndex',           :foreign_key => 'seasonal_index_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :style_display,                          :to => 'style.display'
    map :location_display,                       :to => 'location.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :forecast_profile_display,               :to => 'forecast_profile.display'
    map :seasonal_index_display,                 :to => 'seasonal_index.display'
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
    after_transition :on => :activate,    :do => :after_activate
    after_transition :on => :deactivate,  :do => :after_deactivate
    after_transition :on => :discontinue, :do => :after_discontinue
    after_transition :on => :drop,        :do => :after_drop    

  ### EVENTS ###
    event :activate do
      transition :inactive => :active
    end

    event :deactivate do
      transition :active => :inactive
    end

    event :discontinue do
      transition :active => :discontinued
    end

    event :drop do
      transition :discontinued => :obsolete
    end
                       

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def after_activate
    puts '--- done with activate ---'
    puts 'ready...'
  end

  def after_deactivate
    puts '--- done with deactivate ---'
    puts 'ready...'
  end

  def after_discontinue
    puts '--- done with discontinue ---'
    puts 'ready...'
  end

  def after_drop
    puts '--- done with drop ---'
    puts 'ready...'
  end

  # STATE HANDLERS (End)
  


  # INDEXING (Start) ====================================================================
  searchable do
    string   :style_location_id
    string   :style_display do style.display if style end
    string   :location_display do location.display if location end
    string   :location_id
    string   :style_id
    string   :state    
    boolean  :is_authorized
    boolean  :is_taxable
    boolean  :is_special_order
    boolean  :is_discontinued
    string   :display
 
    text     :style_display_fulltext, :using => :style_display
    text     :location_display_fulltext, :using => :location_display
    text     :state_fulltext, :using => :state
  end 
  # INDEXING (End)

  # HELPERS (Start) =====================================================================


  # HELPERS (End)


end # class Omni::StyleLocation

