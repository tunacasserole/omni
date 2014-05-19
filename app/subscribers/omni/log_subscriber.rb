class Omni::LogSubscriber < Buildit::Messaging::Subscriber

  queue       'model.search_requests'
  exchange    'omni.events', :direct
  routing_key 'info'
  auto_start  true

  def self.process(delivery_info, properties, message)
    puts message
  end
end # class Omni::PurchasesSubscriber
