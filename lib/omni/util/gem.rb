class Omni::Util::Gem

  def self.get_gem(model_name)
    case
    when ['Lookup','Sequence'].include?(model_name)
      'Buildit'
    when ['Approval'].include?(model_name)
      'Desk'
    else
      'Omni'
    end
  end

  def self.full_model_name(model_name)
    "#{get_gem(model_name)}::#{model_name}"
  end
end
