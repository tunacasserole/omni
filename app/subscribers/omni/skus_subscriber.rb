class Omni::SkusSubscriber < Buildit::Messaging::Subscriber

  queue       'model.sku_requests'
  exchange    'omni.events', :direct
  routing_key 'sku'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      # puts "\nskus subscriber"
      msg      = JSON.parse(message)
      # user_id  = msg['user_id']
      method_name   = msg['method_name']

      data = Omni::Sku.find(msg['sku_id'])
      data.send method_name.to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::SkusSubscriber
