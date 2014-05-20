class Omni::SearchSubscriber < Buildit::Messaging::Subscriber

  queue       'model.search_requests'
  exchange    'omni.events', :direct
  routing_key 'search'
  auto_start  true

  def self.process(delivery_info, properties, message)
    begin

      started_at = Time.now

      msg      = JSON.parse(message)
      model_name = msg['model_name']

      # puts "! Indexing #{model_name}"
      # system("rake sunspot:reindex[1000,#{Omni::Util::Gem.full_model_name(model_name)}]")
      # puts "! Indexed #{model_name} in #{Time.now - started_at}s"

      # puts "msg[model_name] is #{msg[model_name]}"
      # user_id  = msg['user_id']
      # model_name  = msg[:model_name]

    rescue Exception => e
      logger.error (e.message || "").red
    end
  end

end # class Omni::PurchasesSubscriber
