class Omni::Util::Gem

  def self.get_gem(model_name)
    case
    when ['Lookup','Sequence','User','UserRole','Note'].include?(model_name)
      'Buildit'
    when ['Approval','Case','Checklist','Feature','Project','Task','Team'].include?(model_name)
      'Desk'
    else
      'Omni'
    end
  end

  def self.full_model_name(model_name)
    "#{get_gem(model_name)}::#{model_name}"
  end
end
