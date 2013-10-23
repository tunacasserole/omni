  class Omni::Projection < ActiveRecord::Base

  # MIXINS (Start) ======================================================================
  # MIXINS (End)

  # METADATA (Start) ====================================================================
  self.table_name   = :projections
  self.primary_key  = :projection_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                          :uniqueness => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :projection_id,                    :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.department_display} - #{m.plan_year}"}
  default      :plan_year,                        :override  =>  true,         :to    => '2014'
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
  has_many     :projection_details,              :class_name => 'Omni::ProjectionDetail',    :foreign_key => 'projection_id'
  has_many     :projection_locations,            :class_name => 'Omni::ProjectionLocation',  :foreign_key => 'projection_id'
  has_many     :logs,                            :class_name => 'Omni::Log',                 :foreign_key => 'logable_id' , :as => :logable
  belongs_to   :department,                      :class_name => 'Omni::Department',          :foreign_key => 'department_id'
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',     :foreign_key => 'forecast_profile_id'
  belongs_to   :projection_approver_user,        :class_name => 'Buildit::User',            :foreign_key => 'projection_approver_user_id'
  belongs_to   :projection_closer_user,          :class_name => 'Buildit::User',            :foreign_key => 'projection_closer_user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :forecast_profile_display,           :to => 'forecast_profile.display'
    map :department_display,                 :to => 'department.display'
    map :projection_approver_user_display,   :to => 'projection_approver_user.display'
    map :projection_closer_user_display,     :to => 'projection_closer_user.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  eventful do
    after :update,  :if => lambda {|m| m.state == 'built' or m.state == 'forecasted'}, :publish => lambda {|m| "#{m.display} ended at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projections'
    # after :update,  :if => lambda {|m| m.state.changed?}, :publish => lambda {|m| "#{m.display} state was changed at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projection State Changed'
  end

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
  # Exact match attributes
    string   :department_display
    string   :forecast_profile_display
    string   :display
    string   :projection_id
    string   :state
    string   :plan_year
  # Partial match (contains) attributes
    text     :department_display_fulltext, :using => :department_display
    text     :forecast_profile_display_fulltext, :using => :forecast_profile_display
    text     :display_fulltext, :using => :display
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### STATES ###
    state :new do
    end
    state :draft do
      validates :plan_year,                         :presence => true
      validates :department_id,                     :presence => true
    end
    state :forecast do
      validates :forecast_profile_id,               :presence => true
    end
    state :projection_1 do
      validates :projection_approver_user_id,       :presence => true
      validates :projection_closer_user_id,         :presence => true
    end
    state :projection_2 do
    end
    state :projection_3 do
    end
    state :projection_4 do
      validates :approval_3_date,                   :presence => true
    end
    state :complete do
      validates :approval_4_date,                   :presence => true
    end

  ### CALLBACKS ###
    after_transition :on => :build, :do => :process_build

    after_transition :on => :forecast, :do => :process_forecast

  ### EVENTS ###
# The following actions may run on this model:
    # Action      State Event   Description
    # build           true      Build the Projection Details
    # forecast        false     Calculate projection forecast (changes state only if state was previously draft)
    # released        true      Builds Projection Locations
    # close 1         true      Copy projection_1_units to projection_2_units
    # close 2         true      Copy projection_2_units to projection_3_units
    # approve 3       false     Set approval_3 date
    # close 3         true      Copy projection_2_units to projection_3_units
    # approve 4       false     Set approval_4 date
    # cloase 4        true      Copy projection_2_units to projection_3_units
#

    event :build do
      transition :new => :draft
    end

    event :forecast do
      transition ![:new, :complete] => :forecast
    end

    event :release do
      transition any => :released
    end
    event :revise do
      transition :released => :revised
    end
    event :approve do
      transition :released => :approved
    end
    event :activate do
      transition any => :active
      # transition any => :done
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def process_build
  # Create a ProjectionDetail for every active SKU belonging to the Departement in the Projection and every active selling location authorized for the SKU.
    destroy_all # destroy logs and projection details for easy rebuilding.
    locations = self.locations
    locations.each do |l|
      Omni::ProjectionLocation.create(:projection_id => self.projection_id, :location_id => l.location_id) unless Omni::ProjectionLocation.where(:projection_id => self.projection_id, :location_id => l.location_id).first
    end

    sku_locations = self.sku_locations
    sku_locations.select! {|sl| locations.include? sl.location}
    sku_locations.select! {|sl| self.color == sl.sku.color} if self.color

    sku_locations.each do |sl|
      if Omni::PeriodResult.where(:sku_id => sl.sku_id, :location_id => sl.location_id).where("net_sale_units > 0").first
        Omni::ProjectionDetail.create(:projection_id => self.projection_id, :sku_id => sl.sku_id, :location_id => sl.location_id, :forecast_units => 0, :forecast_profile_id => self.forecast_profile_id)
      end
    end

    Omni::Log.create(:log_message =>  "Projection Detail rows created #{Omni::ProjectionDetail.where(:projection_id => self.projection_id).count}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
    self.state = 'built'
    self.save
    Omni::Log.create(:log_message =>  "END of BUILD  at #{Time.now.to_s}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
    # send_notice
  end


  def process_forecast
    reset
    self.projection_details.each do |det|
      Omni::PeriodResult.where(:sku_id => detail.sku_id, :location_id => detail.location_id).where("net_sale_units > 0").each do |pr|
        case
        when pr.period.year_number == '2010'
          det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2010_weight.to_f
          det.sale_units_2010 += pr.net_sale_units
        when pr.period.year_number == '2011'
          det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2011_weight.to_f
          det.sale_units_2011 += pr.net_sale_units
        when pr.period.year_number == '2012'
          det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2012_weight.to_f
          det.sale_units_2012 += pr.net_sale_units
        when pr.period.year_number == '2013'
          det.sale_units_2013 += pr.net_sale_units
        else
          # data is too old to be factored into the forecast
        end
        det.save
      end
    end

    self.projection_details.each do |det|
      if det.sale_units_2012 and det.sale_units_2011 and det.sale_units_2010
        average_sales = (det.sale_units_2012 + det.sale_units_2011 + det.sale_units_2010) / 3
        total_deviation = ((average_sales - det.sale_units_2012) ** 2) + ((average_sales - det.sale_units_2011) ** 2) + ((average_sales - det.sale_units_2010) ** 2)
      end

      if det.sale_units_2012 and det.sale_units_2011 and !det.sale_units_2010
        average_sales = (det.sale_units_2012 + det.sale_units_2011) / 2
        total_deviation = ((average_sales - det.sale_units_2012) ** 2) + ((average_sales - det.sale_units_2011) ** 2)
      end

      if det.sale_units_2012 and !det.sale_units_2011 and !det.sale_units_2010
        average_sales = det.sale_units_2012 / 1
        total_deviation = ((average_sales - det.sale_units_2012) ** 2)
      end

      det.average_sales = average_sales
      det.standard_deviation = Math.sqrt(total_deviation)
      det.forecast_units = det.forecast_units * 1.03 if (det.sale_units_2010 < det.sale_units_2011) and (det.sale_units_2011 < det.sale_units_2012)
      det.save
    end

    self.state = 'forecasted'
    self.save
    Omni::Log.create(:log_message =>  "End Forecast at #{Time.now.to_s}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
    # send_notice
  end

  def skus
    skus = []
    case
    when self.sku
      skus << self.sku
    when self.style
      skus = self.style.skus
    when self.subclass
      skus = self.subclass.skus
    when self.classification
      skus = self.classification.skus
    when self.department
      skus = self.department.skus
    else
      skus = Omni::Sku.all
    end
    Omni::Log.create(:log_message =>  "number of skus #{skus.count}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
    skus
  end

 def locations
    locations = []
    case
    when self.location
      locations << self.location
    when self.district
      locations = self.district.locations
    when self.region
      locations = self.region.locations
    else
      locations = Omni::Location.all
    end
    Omni::Log.create(:log_message =>  "number of locations #{locations.count}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
    locations
  end


 def sku_locations
    sku_locations = []
    case
    when self.sku
      sku_locations = self.sku.sku_locations
    when self.style
      sku_locations = self.style.sku_locations
    when self.subclass
      sku_locations = self.subclass.sku_locations
    when self.classification
      sku_locations = self.classification.sku_locations
    when self.department
      sku_locations = self.department.sku_locations
    else
      sku_locations = Omni::SkuLocation.all
    end
    Omni::Log.create(:log_message =>  "number of sku_locations #{sku_locations.count}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")

    sku_locations
  end


  # Sends an email notification to the user when the projection has finished running
  def send_notice
    puts "********** notice"
    message = Buildit::Comm::Email::Message.create(
        subject: "Omni notice: projection - #{self.display} has completed.",
        body: Buildit::Email::Manager.generate(self, "projection_notice"),
    )
    email_addresses = Buildit::User.all.collect {|u| u.email_address}
    message.send_to email_addresses
    message.queue
  end

  def destroy_all
    # Clear Logging
    Omni::Log.all.each {|log| log.destroy}
    Omni::Log.create(:logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO", :log_message =>  "PROCESS BUILD at #{Time.now.to_s}")

    # Clear details and locations
    self.projection_details.each {|det| det.destroy}
    self.projection_locations.each {|loc| loc.destroy}
    Omni::Log.create(:log_message =>  "START of BUILD  at #{Time.now.to_s}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")
  end

  def reset
    # Clear Logging
    Omni::Log.all.each {|log| log.destroy}
    Omni::Log.create(:log_message => "Begin Forecast at #{Time.now.to_s}", :logable_type => 'Omni::Projection', :logable_id => self.projection_id, :log_type => "INFO")

    # Clear prior forecast numbers
    Omni::ProjectionDetail.all.each do |pd|
      pd.forecast_units = 0
      pd.sale_units_2013 = 0
      pd.sale_units_2012 = 0
      pd.sale_units_2011 = 0
      pd.sale_units_2010 = 0
      pd.number_of_schools = 0
      pd.average_contract_year = 0
      pd.years_active = 0
      pd.average_sales = 0
      pd.standard_deviation = 0
      pd.save
    end
  end

  # STATE HANDLERS (End)

end #