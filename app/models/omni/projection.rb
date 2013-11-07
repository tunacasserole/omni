  class Omni::Projection < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :projections
  self.primary_key  = :projection_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :display,                           :uniqueness => true
  validates :plan_year,                         :presence => true
  validates :department_id,                     :presence => true

  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :projection_id,                    :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{ m.department_display } - #{m.plan_year}"}
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
  belongs_to   :department,                      :class_name => 'Omni::Department',          :foreign_key => 'department_id'
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',     :foreign_key => 'forecast_profile_id'
  belongs_to   :projection_approver_user,        :class_name => 'Buildit::User',            :foreign_key => 'projection_approver_user_id'
  belongs_to   :projection_closer_user,          :class_name => 'Buildit::User',            :foreign_key => 'projection_closer_user_id'
  has_many     :projection_details,              :class_name => 'Omni::ProjectionDetail',    :foreign_key => 'projection_id'
  has_many     :projection_locations,            :class_name => 'Omni::ProjectionLocation',  :foreign_key => 'projection_id'
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

  # eventful do
    # after :update,  :if => lambda {|m| m.state == 'built' or m.state == 'forecasted'}, :publish => lambda {|m| "#{m.display} ended at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projections'
    # after :update,  :if => lambda {|m| m.state.changed?}, :publish => lambda {|m| "#{m.display} state was changed at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projection State Changed'
  # end

  # HOOKS (Start) =======================================================================
  hook        :before_destroy,                :cascading_destroy,    10
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

    state :projection_1 do
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

    after_transition :on => :release, :do => :process_release

    event :release do
      transition :forecast => :projection_1
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def forecast
    return 'invalid action for the current state' if self.state == 'complete'

    # Insert or update ProjectionDetail row for every authorized SKU/Location combination (TO DO: in the Departement in the Projection) and every active selling location authorized for the SKU.
    Omni::Inventory.where(is_authorized: true).each {|i| Omni::ProjectionDetail.create(projection_id: self.projection_id, sku_id: i.sku_id, location_id: i.location_id, forecast_profile_id: self.forecast_profile_id) unless Omni::ProjectionDetail.where(projection_id: self.projection_id).first} unless Omni::Inventory.where(is_authorized: true).count == self.projection_details.count

    self.projection_details.each do |detail|
      # JASON - inventory is a two part key, how to leverage an association
      inv = Omni::Inventory.where(sku_id: detail.sku_id, location_id: detail.location_id).first
      next unless inv

      # calculate forecasted units using formula from forecast_profile;
      profile = self.forecast_profile
      forecasted_units = (profile.sales_py1_weight * (inv.sale_units_py1||0)) +(profile.sales_py2_weight * (inv.sale_units_py2||0))+(profile.sales_py3_weight * (inv.sale_units_py3||0))

      unless detail.last_forecast_date
        # set first_forecast_units and projection_1_units with forecasted_units if this is the first forecast
        detail.first_forecast_units = forecasted_units
        detail.projection_1_units = forecasted_units
        # set historical sales data
        detail.sale_units_ytd = inv.sale_units_ytd
        detail.sale_units_py1 = inv.sale_units_py1
        detail.sale_units_py2 = inv.sale_units_py2
        detail.sale_units_py3 = inv.sale_units_py3
      end

      # update last_forecast_units with forecasted_units and  last_forecast_date to today;
      detail.last_forecast_units = forecasted_units
      detail.last_forecast_date = Date.today
      detail.save
    end

    self.state = 'forecast' if self.state =='draft'
    self.save
  end
  # STATE HANDLERS (End)

  # HELPERS (Start) =====================================================================
  def approve
    # ensure current_user has privilege APPROVE_PROJECTION AND ((Projection.state = projection_3 AND Projection.approval_3_date nil) OR (Projection.state = projection_4 AND Projection.approval_4_date nil))
    user = Buildit::User.current ? Buildit::User.current : Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first
    is_approver = user.privileges.where(privilege_code: 'PROJECTION_APPROVER', is_enabled: true).first ? true : false

    if  is_approver && (self.state == 'projection_3' && !self.approval_3_date) or (self.state == 'projection_4' && !self.approval_4_date)

      case self.state

      when 'projection_3'
        self.approval_3_date = Date.today

      when 'projection_4'
        self.approval_4_date = Date.today

      end

    end
  end

  def close
    # ensure current_user has privilege CLOSE_PROJECTION AND ((Projection.state in [projection_1, projection_2]) OR (Projection.state = projection_3 AND Projection.approval_3_date not nil) OR (Projection.state = projection_4 AND Projection.approval_4_date not nil))
    user = Buildit::User.current ? Buildit::User.current : Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first
    is_closer = user.privileges.where(privilege_code: 'PROJECTION_CLOSER', is_enabled: true).first ? true : false

    if is_closer && ((self.state == 'projection_1') or (self.state == 'projection_2') or (self.state == 'projection_3' && self.approval_3_date) or (self.state == 'projection_4' && self.approval_4_date))
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
    # Insert a ProjectionLocation row for every distinct location in the Projection Detail where last_forecast_date is not null
    self.projection_details.each {|detail| Omni::ProjectionLocation.create(projection_id: self.projection_id, location_id: detail.location_id) if detail.last_forecast_date} #unless Omni::ProjectionLocation.where(projection_id: self.projection_id, location_id: detail.location_id).first}
  end

  def cascading_destroy
    self.projection_details.each {|x| x.destroy}
    self.projection_locations.each {|x| x.destroy}
  end
  # HELPERS (End)

end # class Omni::Projection

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
