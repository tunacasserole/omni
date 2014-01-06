class Omni::ProjectionDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :projection_details
  self.primary_key  = :projection_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_audit
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                          :uniqueness  => true
  validates    :projection_id,                    :presence    => true
  validates    :sku_id,                           :presence    => true
  validates    :location_id,                      :presence    => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :projection_detail_id,             :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.projection_display} - #{m.sku_display} - #{m.location_display}"}
  default      :projection_detail_nbr,            :override  =>  false,        :with  => :sequence,         :named=>"PROJECTION_DETAIL_NBR"
  default      :inventory_id,                     :override  =>  false,        :to    => lambda { |m| Omni::Inventory.where(sku_id: m.sku_id, location_id: m.location_id).first.inventory_id if Omni::Inventory.where(sku_id: m.sku_id, location_id: m.location_id).first unless m.inventory_id }
  default      :last_forecast_units,              :override  =>  false,        :to    => 0
  default      :first_forecast_units,             :override  =>  false,        :to    => 0
  default      :projection_1_units,               :override  =>  false,        :to    => 0
  default      :projection_2_units,               :override  =>  false,        :to    => 0
  default      :projection_3_units,               :override  =>  false,        :to    => 0
  default      :projection_4_units,               :override  =>  false,        :to    => 0
  default      :sale_units_py1,                   :override  =>  false,        :to    => 0
  default      :sale_units_py2,                   :override  =>  false,        :to    => 0
  default      :sale_units_py3,                   :override  =>  false,        :to    => 0
  default      :sale_units_ytd,                   :override  =>  false,        :to    => 0
  default      :on_hand,                          :override  =>  false,        :to    => 0
  default      :on_order,                         :override  =>  false,        :to    => 0
  default      :sd_raw,                           :override  =>  false,        :to    => 0
  default      :sd_floor,                         :override  =>  false,        :to    => 0
  default      :sd_ceiling,                       :override  =>  false,        :to    => 0
  default      :sd_smooth,                        :override  =>  false,        :to    => 0
  default      :sd_percent,                       :override  =>  false,        :to    => 0
  default      :coverage_allowed,                 :override  =>  false,        :to    => 0
  default      :coverage_complete,                :override  =>  false,        :to    => 0
  default      :usable,                           :override  =>  false,        :to    => 0
  default      :unusable,                         :override  =>  false,        :to    => 0
  default      :custom_need,                      :override  =>  false,        :to    => 0
  default      :generic_need,                     :override  =>  false,        :to    => 0
  default      :total_need,                       :override  =>  false,        :to    => 0
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
  has_many     :notes,                            :as          => :notable
  belongs_to   :projection,                      :class_name => 'Omni::Projection',              :foreign_key => 'projection_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :inventory,                       :class_name => 'Omni::Inventory',               :foreign_key => 'inventory_id' # JASON need two part key here
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',         :foreign_key => 'forecast_profile_id'
  belongs_to   :projection_location,             :class_name => 'Omni::ProjectionLocation',      :foreign_key => 'projection_location_id'
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
    map :size_id,                                :to => 'sku.size_id'
    map :size_display,                           :to => 'sku.size_display'
    map :forecast_profile_display,               :to => 'forecast_profile.display'
    map :projection_location_display,            :to => 'projection_location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    # compute :sale_units_ytd,                     :with => :compute_sale_units_ytd
    # compute :sale_units_py1,                     :with => :compute_sale_units_py1
    # compute :sale_units_py2,                     :with => :compute_sale_units_py2
    # compute :sale_units_py3,                     :with => :compute_sale_units_py3
    # compute :average_sales,                      :with => :compute_average_sales
    # compute :standard_deviation,                 :with => :compute_standard_deviation
  end
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  hook :before_update, :reset, 10
  # HOOKS (End)

  def reset
    self.state = 'draft' if [projection_1_units_changed?, projection_2_units_changed?, projection_3_units_changed?, projection_4_units_changed?].any?
  end
  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :projection_detail_id
    string   :display
    string   :projection_id
    string   :projection_location_id
    string   :forecast_profile_id
    string   :sku_id
    string   :location_id
    string   :sku_display
    string   :location_display
    string   :size_id
    string   :color_id
    string   :style_id
    string   :color_display do sku.color.display if sku and sku.color end
    string   :style_display do sku.style.display if sku and sku.style end
    string   :size_display do sku.size.display if sku and sku.size end
    # Partial match attributes
    text     :size_display_fulltext, :using => :size_display
    text     :style_display_fulltext, :using => :style_display
    text     :color_display_fulltext, :using => :color_display
    text     :projection_display_fulltext, :using => :projection_display
    text     :sku_display_fulltext, :using => :sku_display
    text     :location_display_fulltext, :using => :location_display
  end
  # INDEXING (End)

  # HELPERS (Start) =====================================================================
  def compute_sale_units_ytd
    # read SkuPeriodResults for ProjectionDetail.sku_id, ProjectionDetail.location_id and current year. Sum regular_sale_units.
  end
  def compute_sale_units_py1
    # read SkuPeriodResults for ProjectionDetail.sku_id, ProjectionDetail.location_id and current year - 1. Sum regular_sale_units.
  end
  def compute_sale_units_py2
    # read SkuPeriodResults for ProjectionDetail.sku_id, ProjectionDetail.location_id and current year - 2. Sum regular_sale_units.
  end
  def compute_sale_units_py3
    # read SkuPeriodResults for ProjectionDetail.sku_id, ProjectionDetail.location_id and current year -3. Sum regular_sale_units.
  end
  def compute_average_sales
    ((self.sale_units_py1||0)+(self.sale_units_py2||0)+(self.sale_units_py3||0)) / 3
  end
  def compute_standard_deviation
    # avg = self.average_sales
    #squared_deviations = (((self.sale_units_py1 - avg)**2 + (self.sale_units_py2 - avg)**2 + (self.sale_units_py3 - avg)**2) / 3)
#  Need to calculate square root of squared_deviations to get standard deviation
    # std = 0
  end
  def set_current_approved_units
    # puts "setting *************"
    self.current_approved_units =
      case self.projection.state
        when 'draft','forecast'
          last_forecast_units
        when 'projection_1'
          projection_1_units
        when 'projection_2'
          projection_1_units
        when 'projection_3'
          projection_2_units
        when 'projection_4'
          projection_3_units
        when 'complete'
          projection_4_units
      end
    save
  end
  # HELPERS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

    state :approve do
      validate  :validate_approve
    end

  ### EVENTS ###
    event :approve do
      transition :draft => :approved
    end

    event :reset do
      transition [:draft, :approved] => :draft
    end

    def self.validate_approve
      errors.add('State','This action is only valid if the Projection State is Forecast, Projection 1, Projection 2, Projection 3 or Projection 4.') unless self.projection.state == 'forecast' or self.projection_state =~ /projection_\d_units/
    end

    after_transition :on => :approve, :do => :set_current_approved_units

  end

  # STATES (End)

end # class Omni::ProjectionDetail

