class Omni::ProjectionForecast
  @queue = :projection_queue

  def self.perform(projection_id)
	@queue = :projection_queue  	
    puts "\n******** PROJECTION FORECAST QUEUEING ************\n"
    Omni::Projection.process_forecast(projection_id)
    puts "\n******** END - PROJECTION FORECAST QUEUEING ************\n"
    puts "resque is ready..."       
  end
end
