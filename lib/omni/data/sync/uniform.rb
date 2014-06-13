class Omni::Data::Sync::Uniform

  def self.go
    Omni::Account.all.each do |x|
      x.uniforms.create(state: 'active', school_year: '2015', uniform_name: '2015') unless x.uniforms.where(school_year: '2015').first
    end
  end

end
