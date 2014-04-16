class Omni::Data::Sync::Base

  def self.go(model_name)
    model_name.downcase == 'all' ? sync_all : "Omni::Data::Fix::#{model_name}".constantize.go
  end

end
