class Omni::StylesSubscriber < Buildit::Messaging::Subscriber

  queue       'model.style_requests'
  exchange    'omni.events', :direct
  routing_key 'style'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)
      method_name   = msg['method_name']

      data = Omni::Style.find(msg['row_id'])
      data.send method_name.to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::StylesSubscriber
