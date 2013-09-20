class Omni::Sync::Omni

  def self.put(message)
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  
  end

  def self.xit
    if Time.now-@start_time > 60
      put "EXECUTION TIME: #{(Time.now-@start_time).to_s}"
      puts @output
      exit
    end
  end

  def self.results
    @start_time = Time.now
    @output = []
    start_date = Date.parse('31-12-2010')
    end_date = Date.parse('30-9-2013')
    put "date range is: #{start_date.to_s} to #{end_date.to_s} for #{(end_date - start_date).to_i} days"

    start_date.upto(end_date) do |date|
      xit
      period_id = Omni::Period.where("start_date <= ? and end_date >= ?", date,date).first.period_id
      daily_results = Omni::DailyResult.where(:date => date)
      daily_results.find_each do |daily|
        period_result = Omni::PeriodResult.where(:period_id => period_id, :sku_id => daily.sku_id, :location_id => daily.location_id).first || Omni::PeriodResult.create(:period_id => period_id, :sku_id => daily.sku_id, :location_id => daily.location_id)
        period_result.net_sale_units += daily.net_sale_units
        period_result.save
      end
    end
    put "compiled period_results"
  end
end
