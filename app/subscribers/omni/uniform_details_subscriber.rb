class Omni::UniformDetailsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.uniform_details_requests'
  exchange    'omni.events', :direct
  routing_key 'uniform_detail'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)

      data = Omni::UniformDetail.find(msg['uniform_detail_id'])
      data.send msg['method_name'].to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::UniformDetailDetailsSubscriber
