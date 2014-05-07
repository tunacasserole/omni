class Omni::ProjectionsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.forecast_requests'
  exchange    'omni.events', :direct
  routing_key 'forecast'
  auto_start  false  #changing

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)
      user_id  = msg[:user_id]

      projection = Omni::Projection.find(msg[:projection_id])
      projection.forecast(user_id)

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::ProjectionsSubscriber
