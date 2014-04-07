class Omni::Sync::DailyResult

  def self.go
    puts "---results---"
    load
    sum_to_year
    # sum_to_month
    xit
  end

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these products: #{@no_skus}"
    # put "no sku found for that item: #{@no_sku_count}"
    # put "no location found for that store: #{@no_location_count}"
    # put "no inventory found: #{@no_id_count}"
    put "***********************************"
    put "legacy source rows: #{@source_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "omni rows created: #{@created_count}"
    put "***********************************"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # exit
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_periods = []
    @no_period_count = 0
    # @locations = Omni::Location.to_hash('PARKER')
    # @skus = Omni::Sku.to_hash('PARKER')
    @updates = []
  end

  def self.sum_to_month
    @period_results = Omni::PeriodResult.to_hash
    @periods = Omni::Period.where("year_number > '2010' and year_number < '2014'").order('year_number ASC').order('period_number ASC')
    @periods.each do |p|
        # p = Omni::Period.where(:display => '2011-Period 1').first
        # units = x['sold']  #JRUBY
        # location_id = x['location_id'] #JRUBY
        # sku_id = x['sku_id'] #JRUBY
      sql = "select location_id, sku_id, sum(net_sale_units) as sold from daily_results where date >= '#{p.start_date}' and date <= '#{p.end_date}' group by sku_id, location_id"
      data = ActiveRecord::Base.connection.execute sql
      data.each do |x|
        @source_count += 1
        units = x[2]
        period_id = p.period_id
        location_id = x[0] #MRI
        sku_id = x[1] #MRI
        row_id = @period_results["#period_id},#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
        @updates.push "('#{row_id}','#{period_id}','#{location_id}','#{sku_id}',#{units})"

        if @created_count.to_s.end_with? '000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into period_results (period_result_id, period_id, location_id, sku_id, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
        @created_count += 1
      end
    end
    @period_results = {}
  end

  def self.sum_to_year_from_periods
    puts "sum to year"
    @period_results = Omni::PeriodResult.to_hash
    periods = ""
    ['2011','2012','2013'].each do |year|
      @period_id = Omni::Period.where(:display => year).first.period_id
      @periods = Omni::Period.where(:year_number => year).order('display')
      @periods.each do |p|
        periods += "'#{p.period_id}',"
      end
      # puts "year is #{p.display}"
      sql = "select location_id, sku_id, sum(net_sale_units) as sold from period_results where period_id in (#{periods.chop}) group by sku_id, location_id"
      data = ActiveRecord::Base.connection.execute sql
      data.each do |x|
        @source_count += 1
        units = x[2]
        location_id = x[0] #MRI
        sku_id = x[1] #MRI
        period_id = @period_id
        row_id = @period_results["#{period_id},#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
        @updates.push "('#{row_id}','#{period_id}','#{location_id}','#{sku_id}',#{units})"

        if @created_count.to_s.end_with? '000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into period_results (period_result_id, period_id, location_id, sku_id, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
        @created_count += 1
      end
    end
  end

  def self.sum_to_year
    # update year on daily_results
    ActiveRecord::Base.connection.execute "update daily_results set year = year(date)"

    # sum results by year to update inventories ytd, py1, py2, and py3
    # @daily_results = Omni::DailyResult.to_hash
    @daily_results = Omni::DailyResult.where(year: 2011).order()


    # @dailys = Omni::Period.where("year_number > '2010' and year_number < '2014'").order('year_number ASC').order('period_number ASC')
    # @periods.each do |p|
    #     # p = Omni::Period.where(:display => '2011-Period 1').first
    #     # units = x['sold']  #JRUBY
    #     # location_id = x['location_id'] #JRUBY
    #     # sku_id = x['sku_id'] #JRUBY
    #   data.each do |x|
    #     @source_count += 1
    #     units = x[2]
  end

end
