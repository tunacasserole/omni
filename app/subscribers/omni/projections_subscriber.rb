class Omni::ProjectionsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.projection_requests'
  exchange    'omni.events', :direct
  routing_key 'projection'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      puts "projections subscriber"
      msg      = JSON.parse(message)
      # user_id  = msg['user_id']
      method_name   = msg['method_name']

      data = Omni::Projection.find(msg['projection_id'])
      data.send method_name.to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::ProjectionsSubscriber
