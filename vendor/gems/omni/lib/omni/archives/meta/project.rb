class Omni::Meta::Project < Omni::Meta::Base
  
  def self.run_all
    #Meta::Base.constants
    p = Buildit::ProjectMeta.new(:name => 'Omni', :project_code => 'omni_01', :default_package_name => 'omni')
  end

end