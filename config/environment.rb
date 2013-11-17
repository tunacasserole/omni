# Load the Rails application.
require File.expand_path('../application', __FILE__)

::ActiveSupport::Deprecation.silenced = true
# to output deprecation warnings to a file
# ActiveSupport::Deprecation.behavior = Proc.new { |msg, stack| MyLogger.warn(msg) }
# Initialize the Rails application.
Omni::Application.initialize!
