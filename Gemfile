source 'https://rubygems.org'
source 'http://tunacasserole:horizon@gems.buildit.io'

gem 'rails', '3.2.14'

# platforms :jruby do

#   if ENV['RDBMS'] == 'MSSQL'
#     gem 'activerecord-jdbcmssql-adapter'
# gem 'jruby-openssl', :require => false
#     # gem 'jdbc-jtds'
#     # gem 'jdbc-jtds', '~> 1.2.8'
#   else
#     gem 'activerecord-jdbcmysql-adapter'
#   end

#   gem 'puma'
# end
platforms :jruby do
  gem 'activerecord-jdbcmssql-adapter'
  gem 'activerecord-jdbcmysql-adapter'
  gem 'jdbc-jtds'
  gem 'puma'
#   gem 'warbler'
end

platforms :ruby do
  gem 'mysql2', '0.3.13'
  gem 'ruby-net-ldap'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

group :development, :test do
  gem 'pry'
  gem 'pry-rails'
  gem 'sunspot_solr'
  gem 'sunspot_rails'
  #gem 'rspec-rails'
  #gem 'factory_girl_rails'
end

# gem 'jquery-rails'

gem "buildit"#, '= 0.8.87'
gem "buildit_sockets"#,      :path => "vendor/gems/buildit_sockets"
gem "buildit_comm"#,         :path => "vendor/gems/buildit_comm"

# gem 'whenever'
gem 'roo'
gem 'prawn'