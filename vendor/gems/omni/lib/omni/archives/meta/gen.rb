class Omni::Meta::Gen < Omni::Meta::Base
  
  def self.run(model)
    #Omni::Gen::HubWorker.run('TestHub')
    system ("rails g buildit:service Omni::#{model.model_name}")
    system ("rails g buildit:client Omni::#{model.model_name}")
  end

end