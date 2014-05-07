class Omni::UniformDetailsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.build_lookups_requests'
  exchange    'omni.events', :direct
  routing_key 'build_lookups'
  auto_start  false  #changing

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)
      user_id  = msg[:user_id]

      uniform_detail = Omni::UniformDetail.find(msg[:uniform_detail_id])
      uniform_detail.build_lookups

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::UniformDetailsSubscriber
