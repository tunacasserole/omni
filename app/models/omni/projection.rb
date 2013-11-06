  class Omni::Projection < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :projections
  self.primary_key  = :projection_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                          :uniqueness => true
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
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do
      validates :plan_year,                         :presence => true
      validates :department_id,                     :presence => true
    end

    state :forecast do; end

    state :active do; end

    state :projection_1 do
    # Validate that user has "CLOSE_PROJECTION" privilege
    end

    state :projection_2 do
    # Validate that user has "CLOSE_PROJECTION" privilege
    end

    state :projection_3 do
    # Validate that user has "CLOSE_PROJECTION" privilege
    end

    state :projection_4 do
    # Validate that user has "CLOSE_PROJECTION" privilege
      validates :approval_3_date,                   :presence => true
    end

    state :complete do
    # Validate that user has "CLOSE_PROJECTION" privilege
      validates :approval_4_date,                   :presence => true
    end

  ### CALLBACKS ###
    # after_transition :on => :build, :do => :process_build
    after_transition :on => :release, :do => :process_release
    # after_transition :on => :close, :do => :process_close

  ### EVENTS ###
# The following actions may run on this model:
    # Action      State Event   Description
    # build           true      Build the Projection Details
    # forecast        false     Calculate projection forecast (changes state only if state was previously draft)
    # release         true      Builds Projection Locations
    # close           false     Copy projection_"n"_units to projection_"n+1"_units
    # approve         false     Approve projection_3 or projection_4
#

    # event :build do
    #   transition :new => :draft
    # end

    # event :close do
      # transition :any => :complete
    # end

    event :release do
      transition :forecast => :projection_1
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # STATE HANDLERS (End)

  # HELPERS (Start) =====================================================================
  def forecast
    return false if ['new','complete'].include? self.state
    self.projection_details.each do |pd|

      if pd.last_forecast_date
      # Calculate first_forecast_units using formula from forecast_profile;
        formula = self.forecast_profile.forecast_formula
        first_forecast_units = (formula.sales_py1_weight * pd.inventory.py1_sales)+(formula.sales_py2_weight * pd.inventory.py2_sales)+(formula.sales_py3_weight * pd.inventory.py3_sales)
      # Copy first_forecast_units to last_forecast_units & projection_1_units;
        pd.last_forecast_units = pd.first_forecast_units
        pd.projection_1_units = pd.first_forecast_units
      # Update last_forecast_date to today;
        pd.last_forecast_date = Date.today
      else
      # Calculate first_forecast_units using formula from forecast_profile;
      # Copy first_forecast_units to last_forecast_units & projection_1_units;
      # Update last_forecast_date to today;
      end
    end


    # self.projection_details.each do |det|
    #   Omni::PeriodResult.where(:sku_id => detail.sku_id, :location_id => detail.location_id).where("net_sale_units > 0").each do |pr|
    #     case
    #     when pr.period.year_number == '2010'
    #       det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2010_weight.to_f
    #       det.sale_units_2010 += pr.net_sale_units
    #     when pr.period.year_number == '2011'
    #       det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2011_weight.to_f
    #       det.sale_units_2011 += pr.net_sale_units
    #     when pr.period.year_number == '2012'
    #       det.forecast_units += pr.net_sale_units * self.forecast_profile.sales_2012_weight.to_f
    #       det.sale_units_2012 += pr.net_sale_units
    #     when pr.period.year_number == '2013'
    #       det.sale_units_2013 += pr.net_sale_units
    #     else
    #       # data is too old to be factored into the forecast
    #     end
    #     det.save
    #   end
    # end

    # self.projection_details.each do |det|
    #   if det.sale_units_2012 and det.sale_units_2011 and det.sale_units_2010
    #     average_sales = (det.sale_units_2012 + det.sale_units_2011 + det.sale_units_2010) / 3
    #     total_deviation = ((average_sales - det.sale_units_2012) ** 2) + ((average_sales - det.sale_units_2011) ** 2) + ((average_sales - det.sale_units_2010) ** 2)
    #   end

    #   if det.sale_units_2012 and det.sale_units_2011 and !det.sale_units_2010
    #     average_sales = (det.sale_units_2012 + det.sale_units_2011) / 2
    #     total_deviation = ((average_sales - det.sale_units_2012) ** 2) + ((average_sales - det.sale_units_2011) ** 2)
    #   end

    #   if det.sale_units_2012 and !det.sale_units_2011 and !det.sale_units_2010
    #     average_sales = det.sale_units_2012 / 1
    #     total_deviation = ((average_sales - det.sale_units_2012) ** 2)
    #   end

    #   det.average_sales = average_sales
    #   det.standard_deviation = Math.sqrt(total_deviation)
    #   det.forecast_units = det.forecast_units * 1.03 if (det.sale_units_2010 < det.sale_units_2011) and (det.sale_units_2011 < det.sale_units_2012)
    #   det.save
    # end

    self.state = 'forecast' if self.state =='draft'
    self.save
  end

  def process_approve
  # Approve projection 3 or projection 4

  end

  def build
    # Insert ProjectionDetail row for every authorized SKU/Location combination (Inventory.is_authorized = true) belonging to the Departement in the Projection and every active selling location authorized for the SKU.
    inventories = Omni::Inventory.all
    inventories.where(is_authorized: true).each {|i| Omni::ProjectionDetail.create(projection_id: self.projection_id, sku_id: i.sku_id, location_id: i.location_id, forecast_profile_id: self.forecast_profile_id)}
    self.state = 'built'
    self.save
  end

  def process_close
    user = Buildit::User.current ? Buildit::User.current : Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first

    if self.state =~ /projection_\d/ && user.privileges.where(privilege_code: 'PROJECTION_CLOSER', is_enabled: true).first
        next_phase = (self.state.byteslice(11).to_i + 1)

        self.projection_details.each do |pd|
          pd.send("projection_#{next_phase.to_s}_units=", pd.send("#{self.state.to_s}_units")) unless self.state == 'projection_4'
          pd.state = 'approved'
          pd.save
        end

        self.projection_closer_user_id = user.user_id
        self.state = (self.state == 'projection_4')  ?  'complete'  :  "projection_#{next_phase}"
        self.save
    end
  end

  def process_release
# Build Projection Location records

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
    skus
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

  # HELPERS (End)

end # class Omni::Projection

