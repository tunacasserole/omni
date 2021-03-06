  class Omni::Projection < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :projections
  self.primary_key  = :projection_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_audit
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates :display,                           :uniqueness => true
  # validates :plan_year,                         presence: true
  validates :forecast_profile_id,               presence: true
  # validates :department_id,                     presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :projection_id,                    override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{ m.department_display } - #{m.plan_year}"}
  default      :plan_year,                        override: false,        :to    => '2014'
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :department,                      class_name: 'Omni::Department',          foreign_key: 'department_id'
  belongs_to   :forecast_profile,                class_name: 'Omni::ForecastProfile',     foreign_key: 'forecast_profile_id'
  belongs_to   :projection_approver_user,        class_name: 'Buildit::User',            foreign_key: 'projection_approver_id'
  belongs_to   :projection_closer_user,          class_name: 'Buildit::User',            foreign_key: 'projection_closer_id'
  has_many     :projection_details,              class_name: 'Omni::ProjectionDetail',    foreign_key: 'projection_id'
  has_many     :projection_locations,            class_name: 'Omni::ProjectionLocation',  foreign_key: 'projection_id'
  has_many     :notes,                           class_name: 'Buildit::Note',             foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :forecast_profile_display,           to: 'forecast_profile.display'
    map :department_display,                 to: 'department.display'
    map :projection_approver_user_display,   to: 'projection_approver_user.full_name'
    map :projection_closer_user_display,     to: 'projection_closer_user.full_name'
  end
  # MAPPED ATTRIBUTES (End)
  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # eventful do
    # after :update,  :if => lambda {|m| m.state == 'built' or m.state == 'forecasted'}, :publish => lambda {|m| "#{m.display} ended at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projections'
    # after :update,  :if => lambda {|m| m.state.changed?}, :publish => lambda {|m| "#{m.display} state was changed at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Projection State Changed'
  # end

  # HOOKS (Start) =======================================================================
  hook        :before_destroy,                :cascading_destroy,                10
  hook        :before_update,                 :update_current_approved_units,    20

  def update_current_approved_units
    # self.projection_details.each { |x| x.set_current_approved_units } if self.state_changed?
  end
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
    text     :department_display_fulltext, using: :department_display
    text     :forecast_profile_display_fulltext, using: :forecast_profile_display
    text     :display_fulltext, using: :display
    text     :state_fulltext, using: :state
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

    state :projection_1 do
    end

    state :projection_2 do
    end

    state :projection_3 do
    end

    state :projection_4 do
      validates :approval_3_date,                   presence: true
    end

    state :complete do
      validates :approval_4_date,                   presence: true
    end

    # FORECAST
    # event :forecast do
    #   transition :draft => :forecasting
    # end
    # state :forecasting do
    #   validate  :department_id, presence: true
    #   validate  :forecast_profile_id, presence: true
    # end
    # after_transition on: :forecast, do: :do_forecast

    # RELEASE
    after_transition on: :release, do: :do_release
    event :release do
      transition :draft => :projection_1
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def forecast_q
    message     = {
      projection_id: self.id,
      user_id: Omni::Util::User.id,
      method_name: 'forecast'
    }

    # publish the above message to the omni.events exchange
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'projection')

  end # def initiate_forecast

  def forecast
    self.department.classifications.each { |c| c.subclasses.each { |s| s.forecast_q } }
    Sunspot.commit_if_dirty
  end

  # def forecast_old
  #   puts "forecasting projection.  details count is #{self.projection_details.count}"
  #   # Omni::Sku.where(department_id: self.department_id).each { |x| x.forecast_q }
  #   sql = "select i.inventory_id, i.sku_id, i.location_id from inventories i, skus s where i.sku_id = s.sku_id and s.department_id = '#{self.department_id}' and i.inventory_id not in ( select inventory_id from projection_details where projection_id = '#{self.projection_id}' )"
  #   data = ActiveRecord::Base.connection.execute sql
  #   puts "projection_details to create: #{data.count}"
  #   bar1 = ProgressBar.new(data.count)
  #   data.each_with_index do |x,i|
  #     bar1.increment!
  #     Omni::ProjectionDetail.create(projection_id: self.projection_id, inventory_id: x[0], sku_id: x[1], location_id: x[2], forecast_profile_id: self.forecast_profile_id)
  #     # ActiveRecord::Base.connection.execute("insert into projection_details (projection_detail_id, projection_id, inventory_id, sku_id, location_id, forecast_profile_id, state) values ( '#{Buildit::Util::Guid.generate}', '#{self.projection_id}', '#{x[0]}', '#{x[1]}', '#{x[2]}', '#{self.forecast_profile_id}', 'draft' )")
  #   end
  #   puts "done creating projection_details"
  #   Sunspot.commit_if_dirty

  #   bar2 = ProgressBar.new(self.projection_details.count)
  #   self.projection_details.each { |x| bar2.increment!; x.forecast_q }
  # end
  # def notify

  #   # push a message to the users channel
  #   Buildit::User.current.push_message("The forecast you requested for #{} is now complete.")

  #   # send an email to the same user indicating completion

  # end


  # def forecast
  #   # return 'invalid action for the current state' if self.state == 'complete'

  #   # Insert or update ProjectionDetail row for every authorized SKU/Location combination (TO DO: in the Departement in the Projection) and every active selling location authorized for the SKU.
  #   # DEBUG myself = Omni::Projection.first
  #   # DEBUG Omni::Inventory.where(is_authorized: true).each {|i| Omni::ProjectionDetail.create(projection_id: myself.projection_id, sku_id: i.sku_id, location_id: i.location_id, forecast_profile_id: myself.forecast_profile_id) unless Omni::ProjectionDetail.where(projection_id: myself.projection_id).first} #unless Omni::Inventory.where(is_authorized: true).count == self.projection_details.count
  #   Omni::Inventory.where(is_authorized: true, department_id: self.department_id).each do |i|
  #     # Create Projection Detail;
  #     x = Omni::ProjectionDetail.where(projection_id: self.projection_id, inventory_id: i.inventory_id, sku_id: i.sku_id, location_id: i.location_id).first || Omni::ProjectionDetail.create(projection_id: self.projection_id, inventory_id: i.inventory_id, sku_id: i.sku_id, location_id: i.location_id)
  #     # TODO: Add support for generics
  #     is_generic = false
  #     total_generic_need = 0
  #     x.inventory_id = i.inventory_id
  #     x.forecast_profile_id = self.forecast_profile_id

  #     # Snapshot of current inventory
  #     x.on_order = i.supplier_on_order_units
  #     x.on_hand = i.on_hand_units

  #     # Sales history
  #     x.sale_units_ytd = i.sale_units_ytd
  #     x.sale_units_py1 = i.sale_units_py1
  #     x.sale_units_py2 = i.sale_units_py2
  #     x.sale_units_py3 = i.sale_units_py3

  #     # calculate forecasted units using formula from forecast_profile;
  #     profile = self.forecast_profile
  #     forecasted_units = (profile.sales_py1_weight * i.sale_units_py1) + (profile.sales_py2_weight * i.sale_units_py2) + (profile.sales_py3_weight * i.sale_units_py3)

  #     unless x.last_forecast_date
  #       x.first_forecast_units = forecasted_units
  #       x.projection_1_units = forecasted_units
  #     end
  #   end
  # end


  # def time_stamp
  #   "== #{Time.now.strftime("%H:%M:%S").yellow}: "
  # end

  # # def self.styles
  # #   self.department.styles
  # # end

  # def forecast_by_dept
  #   puts "#{time_stamp} dept: #{self.department.display} - starting"
  #   self.department.inventories.each do |inv, i|
  #     forecast_one_row(inv)
  #     Omni::Util::Clock.go(row: i, total: excel.self.department.inventories.count)
  #   end
  #   puts "#{time_stamp} dept: #{self.department.display} - finishing"
  # end



  # STATE HANDLERS (End)

  # HELPERS (Start) =====================================================================
  def approve
    # ensure current_user has privilege APPROVE_PROJECTION AND ((Projection.state = projection_3 AND Projection.approval_3_date nil) OR (Projection.state = projection_4 AND Projection.approval_4_date nil))
    user = Buildit::User.current ? Buildit::User.current : Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first
    is_approver = user.privileges.where(privilege_code: 'PROJECTION_APPROVER', is_enabled: true).first ? true : false
    is_approver = true

    if is_approver && (self.state == 'projection_3' && !self.approval_3_date) or (self.state == 'projection_4' && !self.approval_4_date)
      case self.state
      when 'projection_3'
        self.approval_3_date = Date.today

      when 'projection_4'
        self.approval_4_date = Date.today
      end

      self.projection_approver_id = user.user_id
      self.save
    end
  end

  def close
    # ensure current_user has privilege CLOSE_PROJECTION AND ((Projection.state in [projection_1, projection_2]) OR (Projection.state = projection_3 AND Projection.approval_3_date not nil) OR (Projection.state = projection_4 AND Projection.approval_4_date not nil))
    user = Buildit::User.current ? Buildit::User.current : Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first

    is_closer = user.privileges.where(privilege_code: 'PROJECTION_CLOSER', is_enabled: true).first ? true : false
    is_closer = true

    if is_closer && ((self.state == 'projection_1') or (self.state == 'projection_2') or (self.state == 'projection_3' && self.approval_3_date) or (self.state == 'projection_4' && self.approval_4_date))

      next_state = (self.state == 'projection_4')  ?  'complete' : "projection_#{(self.state.byteslice(11).to_i + 1).to_s}"

      ActiveRecord::Base.connection.execute( "update projection_details set state = 'draft', #{next_state}_units = #{self.state.to_s}_units where projection_id = '#{self.projection_id}'" ) unless next_state == 'complete'

      self.projection_closer_id = user.user_id
      self.state = next_state
      self.save

    end
  end

  def do_release
    # *** This is now part of the weekly load - Insert a ProjectionLocation row for every distinct location in the Projection Detail
    # self.projection_details.each {|detail| Omni::ProjectionLocation.create(projection_id: self.projection_id, location_id: detail.location_id) unless Omni::ProjectionLocation.where(projection_id: self.projection_id, location_id: detail.location_id).first}
  end

  def cascading_destroy
    self.projection_details.each {|x| x.destroy}
    self.projection_locations.each {|x| x.destroy}
  end
  # HELPERS (End)


  def display_as
    self.display
  end
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
