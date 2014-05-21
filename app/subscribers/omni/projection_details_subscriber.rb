class Omni::ProjectionDetailsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.projection_detail_requests'
  exchange    'omni.events', :direct
  routing_key 'projection_detail'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      # puts "projection_details subscriber"
      msg      = JSON.parse(message)
      # user_id  = msg['user_id']
      method_name   = msg['method_name']

      data = Omni::ProjectionDetail.find(msg['projection_detail_id'])
      data.send method_name.to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::ProjectionDetailsSubscriber
