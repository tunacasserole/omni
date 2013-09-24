source 'https://rubygems.org'
source 'http://sbna:muppet5@gems.buildit.io'

gem 'rails', '3.2.14'


platforms :jruby do
  #gem 'jruby-openssl'

  if ENV['RDBMS'] == 'MSSQL'
    gem 'activerecord-jdbcmssql-adapter'
    gem 'jdbc-jtds'
  else
    gem 'activerecord-jdbcmysql-adapter'
  end

  gem 'puma'
  gem 'warbler'
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
  #gem 'rspec-rails'
  #gem 'factory_girl_rails'
end

gem 'jquery-rails'

gem "buildit"#,              :path => "vendor/gems/buildit"
gem "buildit_sockets"#,      :path => "vendor/gems/buildit_sockets"
gem "buildit_comm"#,         :path => "vendor/gems/buildit_comm"


gem 'whenever'
