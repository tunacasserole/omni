# require "bunny"

class Omni::Bunny::Receive
  # to run - Omni::Bunny:Send.go

  def go
    conn = Bunny.new
    conn.start

    # Next we create a channel, which is where most of the API for getting things done resides
    ch   = conn.create_channel

#  puts " [*] Waiting for messages in #{q.name}. To exit press CTRL+C"
# q.subscribe(:block => true) do |delivery_info, properties, body|
#   puts " [x] Received #{body}"

#   # cancel the consumer to exit
#   delivery_info.consumer.cancel
# end
    conn.close

  end
end
