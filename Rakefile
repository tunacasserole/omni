#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Omni::Application.load_tasks

namespace :omni do

  desc "dump existing data into seed files"
  task :dump, [:model] => :environment do |t, args|
    Omni::Util::Seed.go(args.model)
  end

  desc "run existing migration files containing the supplied tag."
  task :migrate, [:tag] => :environment do |t, args|
    Dir[File.join(Rails.root, 'db', 'migrate', '*.rb')].each do |filename|
      puts "skipping #{filename}".cyan
      if filename.include? args.tag
        puts "running migration #{filename} - #{args.tag}"
        load(filename)
      end
    end
  end

  desc "run existing seed files containing the supplied tag."
  task :seed, [:tag] => :environment do |t, args|
    Dir[File.join(Rails.root, 'db', 'seed', '*.rb')].each do |filename|
      puts "skipping #{filename}".cyan
      if filename.include? args.tag
        puts "***running seed #{filename} - #{args.tag}***".yellow
        load(filename)
      end
    end
  end

  desc "run existing demo seed files containing the supplied tag."
  task :demo, [:tag] => :environment do |t, args|
    Dir[File.join(Rails.root, 'db', 'demo', '*.rb')].sort.each do |filename|
      if filename.include? args.tag
        puts "== running seed #{filename} - #{args.tag}"
        @start_time = Time.now
        load(filename)
        puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
      end
    end
  end

  desc "Setup test database - drops, loads schema, migrates and seeds the test db"
  task :prepare => :environment do
    # system("rake buildit:db:rebuild RAILS_ENV='test'")
    system("rake buildit:db:migrate RAILS_ENV=test")
    system("rake buildit:db:seed RAILS_ENV=test")
    system("rake omni:resequence RAILS_ENV=test")
  end

  desc 'Indexes the given model'
  task :index, [:model] => :environment do |t,args|
    puts "Indexing Started\n\n"
    Rails.application.eager_load!
    started_at = Time.now

    puts "! Indexing #{args.model}"
    system("rake sunspot:reindex[1000,#{Omni::Util::Gem.full_model_name(args.model)}]") unless ['Lookup','Sequence'].include? args.model
    puts "! Indexed #{args.model} in #{Time.now - started_at}s"
  end

  desc 'Reindexes all models alphabetically, optionally starting with the given model'
  task :reindex, [:model] => :environment do |t,args|
    puts "\nIndexing Started\n\n"
    Rails.application.eager_load!
    started_at = Time.now
    slow_classes = []

    ActiveRecord::Base.descendants.sort { |x, y| x.name <=> y.name }.each do |klass|
      args.model && klass.name != Omni::Util::Gem.full_model_name(args.model) ? next : args.model = nil

      if klass.searchable?
        if klass.count < 20000
          puts "! Indexing #{klass.name}"
          klass.reindex(batch_size: nil)
        else
          slow_classes << klass.name
        end
      end

    end

    puts "! Remaining classes to index"
    slow_classes.each do |k|
      puts "- #{k}"
    end
    slow_classes.each do |k|
      puts "! Indexing #{k}"
      system("rake sunspot:reindex[1000,#{k}]")
    end

    puts "\n\n! All reindexing completed in #{(Time.now - started_at).to_i}s"
  end


  desc "update sequences table for current model"
  task :sequence, [:model] => :environment do |t, args|
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    Omni::Data::Sync::Base.re_sequence(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  desc "fix all sequences"
  task :resequence   => :environment do |t, args|
    @start_time = Time.now
    Omni::Util::Sequence.update
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  desc "sync parker data from spreadsheets, staging tables, and other databases"
  task :sync, [:model] => :environment do |t, args|
    args.with_defaults(:model => "AllModels")
    @start_time = Time.now
    Omni::Data::Sync::Base.go(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  desc "fix data via sql and activerecord updates"
  task :fix, [:model] => :environment do |t, args|
    args.with_defaults(:model => "AllModels")
    @start_time = Time.now
    Omni::Data::Fix::Base.go(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

end

# COPIED AS AN EXAMPLE OF DEPLOYMENT TASKS
#   desc "Drops all unused tables from the source"
#   task :drop => :environment do

#     exit 0 unless ENV['FORCE'] == 'true'

#     USED_TABLES_SYM = [
#       # REQUIRED tables
#       :schema_migrations,
#       :seeds,

#       # BUILDIT tables
#       :applications,
#       :application_roles,
#       :attachments,
#       :contents,
#       :dashlets,
#       :events,
#       :exports,
#       :lookups,
#       :modules,
#       :notes,
#       :permissions,
#       :privileges,
#       :roles,
#       :sequences,
#       :user_roles,
#       :users,
#       :vendors,
#       :comm_email_addresses,
#       :comm_inbox_items,
#       :comm_email_messages,
#       :comm_outbox_items,
#       :comm_sent_items,
#     ]

#     USED_TABLES = USED_TABLES_SYM.map{|x| x.to_s}

#     USED_TABLES_SYM.each {|x| USED_TABLES << x.to_s.upcase}

#     conn = ActiveRecord::Base.connection
#     drop_tables = conn.tables - USED_TABLES

#     drop_tables.each do |table_name|
#       begin
#         conn.drop_table table_name
#       rescue
#       end
#     end
#   end

#   desc "Generates Binary Conversion"
#   task :convert => :environment do

#     exit 0 unless ENV['FORCE'] == 'true'

#     conn   = ActiveRecord::Base.connection
#     tables = conn.tables
#     exclusions = ['data']

#     # Drop all indexes first
#     indexes = conn.execute("SELECT name,OBJECT_NAME(ID) AS 'table', * FROM [dbo].[sysindexes] WHERE OBJECTPROPERTY(ID,N'IsTable') = 1 AND OBJECTPROPERTY(ID,N'IsMSShipped') = 0 AND name IS NOT NULL AND status = 0")
#     indexes.each do |index|
#       idxName = index['name']
#       table   = index['table']

#       if tables.include? table
#         dropIndex = "DROP INDEX [#{idxName}] ON [dbo].[#{table}]"
#         conn.execute dropIndex
#       end
#     end

#     # Drop primary keys
#     tables.each do |table|
#       pks = conn.execute("SELECT name FROM [dbo].[sysobjects] WHERE xtype in ('F', 'PK', 'C', 'D', 'UQ') AND parent_obj = OBJECT_ID('#{table}')")
#       pks.each do |key|
#         conn.execute("ALTER TABLE #{table} DROP CONSTRAINT #{key['name']}")
#       end
#     end


#     # rename the binary columns with _bin and copy data to new column
#     tables.each do |table|
#       conn.columns(table).each do |col|
#         if col.type == :binary
#           unless exclusions.include?(col.name)
#             conn.rename_column table, col.name, "#{col.name}_bin"
#             conn.add_column table, col.name, :string, :limit => 32
#             conn.execute("UPDATE #{table} SET #{col.name} = CONVERT(NVARCHAR(34), #{col.name}_bin, 2);\n")
#           end
#         end
#       end
#     end


#     tables.each do |table|
#       conn.columns(table).each do |col|
#         if col.type == :binary
#           unless exclusions.include?(col.name)
#             conn.remove_column table, col.name
#           end
#         end
#       end
#     end

#   end

#   # ------------------------------------------------------------------------------
#   # DOCUMENTATION Tasks
#   # ------------------------------------------------------------------------------

#   desc "Generates the model specs"
#   task :document do

#     [
#       'omni::Customer 01',

#     ].each do |doc|
#       system("rails g buildit:model_spec #{doc}")
#     end

#     system("./doc/model_specs/wordsmith generate")
#   end

#   # ------------------------------------------------------------------------------
#   # BUILD Tasks
#   # ------------------------------------------------------------------------------

#   desc 'Generates the WAR file for deployment to server'
#   task :war do
#     system("warble")
#   end

#   desc 'Performs all release steps to generate WAR'
#   task :release do
#     Rake::Task['assets:precompile'].invoke
#     Rake::Task['omni:war'].invoke
#   end


#   # ------------------------------------------------------------------------------
#   # DEPLOYMENT Tasks
#   # ------------------------------------------------------------------------------

#   namespace :deploy  do
#     REMOTES.keys.each do |env|
#       desc "Deploy to #{env} remote at Heroku"
#       task env do
#         current_branch = `git branch | grep ^* | awk '{ print $2 }'`.strip

#         Rake::Task['omni:deploy:before_deploy'].invoke(env, current_branch)
#         Rake::Task['omni:deploy:update_code'].invoke(env, current_branch)
#         Rake::Task['omni:deploy:after_deploy'].invoke(env, current_branch)
#       end
#     end

#     task :before_deploy, :env, :branch do |t, args|
#       puts "Deploying #{args[:branch]} to #{args[:env]}"

#       # Ensure the user wants to deploy a non-master branch to production
#       if args[:env] == :production && args[:branch] != 'master'
#         print "Are you sure you want to deploy '#{args[:branch]}' to production? (y/n) " and STDOUT.flush
#         char = $stdin.getc
#         if char != ?y && char != ?Y
#           puts "Deploy aborted"
#           exit
#         end
#       end
#     end

#     task :after_deploy, :env, :branch do |t, args|

#       system('heroku run rake buildit:db:seed')

#       puts "Deployment Complete"
#     end

#     task :update_code, :env, :branch do |t, args|
#       FileUtils.cd Rails.root do
#         puts "Updating #{REMOTES[args[:env]]} with branch #{args[:branch]}"
#         `git push #{REMOTES[args[:env]]} +#{args[:branch]}:master`
#       end
#     end
#   end
# end

# # List of environments and their heroku git remotes
# REMOTES = {
#   :staging    => 'omni-prod',
#   :prod       => 'omni-jruby'
# }
