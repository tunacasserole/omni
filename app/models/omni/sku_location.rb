class Omni::SkuLocation < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :sku_locations
  self.primary_key  = :sku_location_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :replenishment_method,            :lookup      => 'REPLENISHMENT_METHOD',       :allow_nil => true
  validates    :replenishment_source,            :lookup      => 'REPLENISHMENT_SOURCE',       :allow_nil => true
  validates    :location_id, uniqueness: { scope: :sku_id, message: "Location already exists for this SKU." }
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :sku_location_id,                  :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.location_display}"}
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
  default      :forecast,                         :override  =>  false,        :to    => 0
  default      :economic_order,                   :override  =>  false,        :to    => 0
  default      :demand_filter_count,              :override  =>  false,        :to    => 0
  default      :tracking_signal_count,            :override  =>  false,        :to    => 0
  default      :tracking_signal,                  :override  =>  false,        :to    => 0
  default      :tracking_signal_signed_deviation,  :override  =>  false,        :to    => 0
  default      :tracking_signal_absolute_deviation,  :override  =>  false,        :to    => 0
  default      :standard_deviation,               :override  =>  false,        :to    => 0
  default      :order_point,                      :override  =>  false,        :to    => 0
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
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',         :foreign_key => 'forecast_profile_id'
  belongs_to   :seasonal_index,                  :class_name => 'Omni::SeasonalIndex',           :foreign_key => 'seasonal_index_id'

  has_many     :bts_details,                     :class_name => 'Omni::BtsDetail',               :foreign_key => :sku_id,           :primary_key => :sku_id,           :conditions => proc {"bts_details.location_id = '#{send(:location_id)}'"}
  has_many     :projection_details,              :class_name => 'Omni::ProjectionDetail',        :foreign_key => :sku_id,           :primary_key => :sku_id,           :conditions => proc {"bts_details.location_id = '#{send(:location_id)}'"}
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                       :to => 'location.display'
    map :outlet_nbr,                             :to => 'location.location_nbr'
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


  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_display do sku.display if sku end
    string   :location_display do location.display if location end
    string   :sku_id
    boolean  :is_authorized
    boolean  :is_taxable
    boolean  :is_special_order
    boolean  :is_discontinued
    string   :display

    text     :sku_display_fulltext, :using => :sku_display
    text     :location_display_fulltext, :using => :location_display
  end
  # INDEXING (End)


  # STATES (Start) ====================================================================
  # state_machine :state, :initial => :new do

  ### CALLBACKS ###
    # after_transition :on => :activate,       :do => :after_activate

    ## EVENTS ###
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
  # STATES (End)


  # STATE HANDLERS (Start) ====================================================================
  # def after_activate
  #   puts '--- done with after_activate ---'
  #   puts 'ready...'
  # end
  # STATE HANDLERS (End)

end # class Omni::SkuLocation

