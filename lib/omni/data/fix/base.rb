class Omni::Data::Fix::Base

  def self.go(model_name)
    model_name.downcase == 'all' ? sync_all : "Omni::Data::Fix::#{model_name}".constantize.go(model_name)
  end

end
