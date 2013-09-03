class Omni::Meta::Package < Omni::Meta::Base
  
  def self.run_all
    #Meta::Base.constants
    p = Buildit::PackageMeta.new(:package_name => 'Omni', :project_code => 'omni_01', :default_package_name => 'omni')
  end

end