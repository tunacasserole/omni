class Omni::Sync::Projection < Omni::Sync::Base

  def self.go
    @profile = Omni::ForecastProfile.first
    @year = '2014'
    @depts = {}; Omni::Projection.where(plan_year: @year).each {|x| @depts[x.department_id] = x.projection_id}
    @is_generic = true

    puts "Create a projection for each department unless it already exists for this plan @year, forecast profel and department"
    Omni::Department.all.each {|d| Omni::Projection.create(forecast_profile_id: @profile.forecast_profile_id, plan_year: @year, department_id: d.department_id) unless Omni::Projection.where(forecast_profile_id: @profile.forecast_profile_id, plan_year: @year, department_id: d.department_id).first }

    puts "create projection_detail rows if needed so that every inventory row has a projection detail rows"
    data = ActiveRecord::Base.connection.execute("select inventory_id, sku_id, location_id, department_id from inventories where inventory_id is null or inventory_id not in (select inventory_id from projection_details a, projections b where a.projection_id = b.projection_id and b.plan_year = '#{@year}')")
    bar = ProgressBar.new(data.count)
    data.each do |row|
      bar.increment!
      ActiveRecord::Base.connection.execute("insert into projection_details (projection_detail_id, projection_id, inventory_id, sku_id, location_id, forecast_profile_id, state) values ( '#{Buildit::Util::Guid.generate}', '#{@depts[row[3]]}', '#{row[0]}', '#{row[1]}', '#{row[2]}', '#{@profile.forecast_profile_id}', 'draft' )")
    end

    puts "update projection details from inventories"
    data = ActiveRecord::Base.connection.execute("select a.inventory_id, a.sku_id, a.location_id, a.on_hand_units, a.supplier_on_order_units, a.sale_units_ytd, a.sale_units_py1, a.sale_units_py2, a.sale_units_py3, b.last_forecast_date, b.first_forecast_units, b.projection_1_units, b.current_approved_units, b.projection_detail_id from inventories a, projection_details b where a.inventory_id = b.inventory_id")
    bar = ProgressBar.new(data.count)
    data.each do |row|
      bar.increment!
      forecast row
    end
  end

  def self.forecast(i)
    # Snapshot of current inventory
    on_hand = i[3] || 0
    on_order = i[4] || 0
    # puts on_order
    # Sales history
    ytd = i[5] || 0
    py1 = i[6] || 0
    py2 = i[7] || 0
    py3 = i[8] || 0

    # calculate forecasted units using formula from forecast_profile;
    forecasted_units = (@profile.sales_py1_weight * py1) + (@profile.sales_py2_weight * py2) + ((@profile.sales_py3_weight) * py3)

    # x.last_forecast_units = forecasted_units
    # x.last_forecast_date = Date.today

    # Standard deviation of py1, py2 and forecasted units
    mean = (py1 + py2 + forecasted_units) / 3
    tot_dev = (mean - py1)**2 + (mean - py2)**2 + (mean - forecasted_units)**2
    sd_raw = Math.sqrt(tot_dev)
    sd_floor = forecasted_units * 0.2
    sd_ceiling = forecasted_units * 0.4
    sd_smooth = sd_raw < sd_floor ? sd_floor : sd_raw > sd_ceiling ? sd_ceiling : sd_raw
    sd_percent = forecasted_units > 0 ? sd_smooth / forecasted_units : 0

    # Coverage and need
    coverage_allowed = [forecasted_units + sd_smooth - ytd, 0].max
    custom_need = @is_generic ? 0 : coverage_allowed - on_hand
    generic_need = 0 #@is_generic ? total_generic_need : 0
    coverage_complete = coverage_allowed + generic_need
    unusable = [on_hand - coverage_complete].max
    usable = coverage_complete - on_hand < 1 ? coverage_complete : on_hand
    total_need = coverage_complete - usable + on_order
    # total_need = 1.12 - usable + on_order

    first_forecast_units = i[9] ? i[10] : forecasted_units
    projection_1_units = i[9] ? i[11] : forecasted_units
    current_approved_units = i[9] && i[12] && i[12] > 0 ? i[12] : forecasted_units
    pd_id = i[13]

    ActiveRecord::Base.connection.execute("update projection_details set on_hand = #{on_hand}, on_order = #{on_order}, sale_units_ytd = #{ytd}, sale_units_py1 = #{py1}, sale_units_py2 = #{py2}, sale_units_py3 = #{py3}, first_forecast_units = #{first_forecast_units}, last_forecast_units = #{forecasted_units}, current_approved_units = #{current_approved_units}, projection_1_units = #{projection_1_units}, last_forecast_date = now(), sd_raw = #{sd_raw}, sd_floor = #{sd_floor}, sd_ceiling = #{sd_ceiling}, sd_smooth = #{sd_smooth}, sd_percent = #{sd_percent}, coverage_allowed = #{coverage_allowed}, coverage_complete = #{coverage_complete}, custom_need = #{custom_need}, total_need = #{total_need}, unusable = #{unusable}, usable = #{usable} where projection_detail_id = '#{pd_id}'")

  end

end

