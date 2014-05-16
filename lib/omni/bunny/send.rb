# class Omni::Bunny::Send
  # to run - Omni::Bunny:Send.go

  # def go
    require 'bunny'
    conn = Bunny.new
    conn.start

    # Next we create a channel, which is where most of the API for getting things done resides
    ch   = conn.create_channel

    # To send, we must declare a queue for us to send to; then we can publish a message to the queue:
    q    = ch.queue("hello")
    ch.default_exchange.publish("Hello World!", :routing_key => q.name)
    puts " [x] Sent 'Hello World!'"

    conn.close

  # end
# end
