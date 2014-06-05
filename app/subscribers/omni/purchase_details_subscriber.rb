class Omni::PurchaseDetailsSubscriber < Buildit::Messaging::Subscriber

  queue       'model.purchase_detail_requests'
  exchange    'omni.events', :direct
  routing_key 'purchase_detail'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin
      msg      = JSON.parse(message)
      method_name   = msg['method_name']

      data = Omni::PurchaseDetail.find(msg['row_id'])
      data.send method_name.to_sym

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::PurchaseDetailsSubscriber
