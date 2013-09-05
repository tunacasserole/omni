class Omni::Meta::Data < Omni::Meta::Base
  
  def self.run(model)
    Omni::Import::Manager.run model.model_name
  end

end