class Omni::UniformsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.uniform_requests'
  exchange    'omni.events', :direct
  routing_key 'uniform'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)

      uniform = Omni::Uniform.find(msg[:uniform_id])
      uniform.build_lookups

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::UniformDetailsSubscriber
