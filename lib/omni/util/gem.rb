class Omni::Util::Gem

  def self.get_gem(m)
    ['Lookup','Sequence'].include?(m) ? 'Buildit' : 'Omni'
  end

  def self.full_model_name(m)
    "#{get_gem(m)}::#{m}"
  end
end
