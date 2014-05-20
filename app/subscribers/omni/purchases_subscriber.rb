class Omni::PurchasesSubscriber < Buildit::Messaging::Subscriber

  queue       'model.purchase_requests'
  exchange    'omni.events', :direct
  routing_key 'purchase'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      puts "purchases subscriber"
      msg      = JSON.parse(message)
      user_id  = msg['user_id']
      method_name   = msg['method_name']


      data = Omni::Purchase.find(msg['purchase_id'])
      data.send("q_#{method_name}".to_sym)

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::PurchasesSubscriber
