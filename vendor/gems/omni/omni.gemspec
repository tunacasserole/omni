$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "omni/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "omni"
  s.version     = Omni::VERSION
  s.authors     = ["Aaron Henderson", "Jason Ihaia"]
  s.email       = ["aaron.henderson@highergroundsolutions.com", "jason@buildit.io"]
  s.homepage    = "http://www.highergroundsolutions.com"
  s.summary     = "Summary of Omni."
  s.description = "Description of Omni."

  s.bindir = 'bin'

  s.files = Dir["{app,config,db,lib}/**/*"] + ["Rakefile", "README.md", "LICENSE.md"]
  s.test_files = Dir["test/**/*"]

  s.add_runtime_dependency "rails", "~> 3.2.2"
  s.add_runtime_dependency "buildit"
  s.add_runtime_dependency "buildit_comm"
  s.add_runtime_dependency "roo"
  # s.add_runtime_dependency "mark"  
  # s.add_runtime_dependency "rms"  
  s.add_runtime_dependency "json"

end
