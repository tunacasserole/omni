class Omni::Data::Fix::Base

  def self.go(model_name)
     "#{Omni::Util::Gem.get_gem(model_name)}::Data::Fix::#{model_name}".constantize.go(model_name)
  end

end
