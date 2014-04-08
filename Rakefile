#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Omni::Application.load_tasks

namespace :omni do

  namespace :db do
    desc "dump existing data into seed files"
    task :dump, [:model] => :environment do |t, args|
      puts "== " << Time.now.strftime("%H:%M:%S").yellow << " starting ============ "
      # puts "model is #{args[:model]} and #{args.model}"  # both notations work
      @start_time = Time.now
      Omni::Seed::Base.dump_to_seed(args.model)
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
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

    desc "fix sequences"
    task :sequences   => :environment do |t, args|
      # puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now
      Desk::Helper::Sequence.update
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
    end

    desc "re sequence existing data"
    task :re_sequence, [:model] => :environment do |t, args|
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      # puts "model is #{args[:model]} and #{args.model}"  # both notations work
      @start_time = Time.now
      Omni::Sync::Base.re_sequence(args.model)
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
    end

  end # end of namespace db

  namespace :solr do

     # started_at = Time.now
     #  ActiveRecord::Base.descendants.sort { |x, y| x.name <=> y.name }.each do |klass|
     #    puts "klass name is #{klass.name} and args.model is #{args.model} and resume is #{args.resume}"
     #    next unless args.model and klass.name.end_with? args.model
     #    if klass.searchable?
     #      puts "! Indexing #{klass.name}"
     #      before = Time.now
     #      # klass.reindex(batch_size: nil)
     #      puts "! Indexed #{klass.name} in #{Time.now - before}s"
     #    end
     #    break if args.model and klass.name.end_with? args.model unless args.resume
     #  end
     #  puts "\n\n\n! All reindexing completed in #{Time.now - started_at}s"


    desc 'Indexes the given model'
    task :index, [:model] => :environment do |t,args|
      puts "Indexing Started\n\n"
      Rails.application.eager_load!
      started_at = Time.now

      puts "! Indexing #{args.model}"
      system("rake sunspot:reindex[1000,Omni::#{args.model}]")
      puts "! Indexed #{args.model} in #{Time.now - started_at}s"
    end

    desc 'Reindexes all models alphabetically, optionally starting with the given model'
    task :reindex, [:model] => :environment do |t,args|
      puts "Indexing Started\n\n"
      Rails.application.eager_load!
      started_at = Time.now
      resumed = args.model ? false : true

      ActiveRecord::Base.descendants.sort { |x, y| x.name <=> y.name }.each do |klass|
        next unless resumed || klass.name == "Omni::#{args.model}"

        if klass.searchable?
          puts "! Indexing #{klass.name}"
          before = Time.now
          klass.count > 1000 ? system("rake sunspot:reindex[1000,#{klass.name}]") : klass.reindex(batch_size: nil)
          puts "! Indexed #{klass.name} in #{Time.now - before}s"
        end
        resumed = true
      end

      puts "\n\n\n! All reindexing completed in #{Time.now - started_at}s"

    end

  end # end of namespace solr

  desc "index"
  task :index, [:model] => :environment do |t, args|
    system("rake sunspot:reindex[1000,Omni::#{args.model}]")
  end

  desc "reindex"
  task :reindex, [:model] => :environment do |t, args|
    system("rake omni:solr:reindex[#{args.model}]")
  end

    # namespace :solr do
  #   desc "reindex"
  #   task :reindex, [:model] => :environment do |t, args|
  #     args.with_defaults(:model => 'all')
  #     puts "Args with defaults were: #{args}"
  #     puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
  #     @start_time = Time.now
  #     if args.model == 'all'
  #       puts "all"
  #     end
  #     puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  #   end
  # end

  # desc "run automated test suite"
  # task :test => :environment do |t, args|
  #   # puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
  #   @start_time = Time.now
  #   puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  # end

  # desc "index parker data one row at a time.  only for models that have the is_indexed attribute."
  # task :index, [:model] => :environment do |t, args|
  #   puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
  #   args.with_defaults(:model => "AllModels")
  #   # puts "model is #{args[:model]} and #{args.model}"  # both notations work
  #   @start_time = Time.now
  #   Omni::Sync::Base.index(args.model)
  #   puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  # end
    # Dir[File.join(Rails.root, 'db', 'seed', '*.rb')].each do |filename|
    #   task_name = File.basename(filename, '.rb').intern
    #   puts "task name is #{task_name}"
    #   task task_name => :environment do
    #     # if File.exist?(filename)
    #       puts "... loading. the filename is #{filename}"
    #       # load(filename)
    #     end
    #   end
    # end
    # puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  # end

  # end

  desc "sync parker data from spreadsheets, staging tables, and other databases"
  task :sync, [:model] => :environment do |t, args|
    # puts "== " << Time.now.strftime("%H:%M:%S").yellow << " starting ============ "
    args.with_defaults(:model => "AllModels")
    # puts "model is #{args[:model]} and #{args.model}"  # both notations work
    @start_time = Time.now
    Omni::Sync::Base.go(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  namespace :sync do
    namespace :mark do
      desc "load Omni inventory from RMS inventory."
      task :inventory => :environment do |t, args|
        Omni::Sync::Mark.inventory
      end
      desc "load Omni daily results net sale units from Mark order line qty_ordered."
      task :results => :environment do |t, args|
        Omni::Sync::Mark.results
      end
    end

    namespace :rms do
      desc "load Omni daily results net sale units from rms."
      task :inventory => :environment do |t, args|
        Omni::Sync::Rms.inventory
      end
      desc "load Omni daily results net sale units from rms transaction_entry quantity."
      task :results => :environment do |t, args|
        Omni::Sync::Rms.results
      end
    end

    namespace :grits do
      desc "load Omni inventory on hand from the RMS System."
      task :inventory => :environment do |t, args|
        Omni::Sync::Grits.inventory
      end
      desc "load Omni daily results from sales history from the RMS System."
      task :results => :environment do |t, args|
        Omni::Sync::Grits.results
      end
    end

    namespace :omni do
      desc "load Omni daily results from sales history from the RMS System."
      task :results => :environment do |t, args|
        Omni::Sync::Omni.results
      end
      desc "Run the back to school report"
      task :bts => :environment do |t, args|
        Omni::Sync::Omni.bts
      end
    end
  end

  desc "Drops all unused tables from the source"
  task :drop => :environment do

    exit 0 unless ENV['FORCE'] == 'true'

    USED_TABLES_SYM = [
      # REQUIRED tables
      :schema_migrations,
      :seeds,

      # BUILDIT tables
      :applications,
      :application_roles,
      :attachments,
      :contents,
      :dashlets,
      :events,
      :exports,
      :lookups,
      :modules,
      :notes,
      :permissions,
      :privileges,
      :roles,
      :sequences,
      :user_roles,
      :users,
      :vendors,
      :comm_email_addresses,
      :comm_inbox_items,
      :comm_email_messages,
      :comm_outbox_items,
      :comm_sent_items,
    ]

    USED_TABLES = USED_TABLES_SYM.map{|x| x.to_s}

    USED_TABLES_SYM.each {|x| USED_TABLES << x.to_s.upcase}

    conn = ActiveRecord::Base.connection
    drop_tables = conn.tables - USED_TABLES

    drop_tables.each do |table_name|
      begin
        conn.drop_table table_name
      rescue
      end
    end
  end

  desc "Generates Binary Conversion"
  task :convert => :environment do

    exit 0 unless ENV['FORCE'] == 'true'

    conn   = ActiveRecord::Base.connection
    tables = conn.tables
    exclusions = ['data']

    # Drop all indexes first
    indexes = conn.execute("SELECT name,OBJECT_NAME(ID) AS 'table', * FROM [dbo].[sysindexes] WHERE OBJECTPROPERTY(ID,N'IsTable') = 1 AND OBJECTPROPERTY(ID,N'IsMSShipped') = 0 AND name IS NOT NULL AND status = 0")
    indexes.each do |index|
      idxName = index['name']
      table   = index['table']

      if tables.include? table
        dropIndex = "DROP INDEX [#{idxName}] ON [dbo].[#{table}]"
        conn.execute dropIndex
      end
    end

    # Drop primary keys
    tables.each do |table|
      pks = conn.execute("SELECT name FROM [dbo].[sysobjects] WHERE xtype in ('F', 'PK', 'C', 'D', 'UQ') AND parent_obj = OBJECT_ID('#{table}')")
      pks.each do |key|
        conn.execute("ALTER TABLE #{table} DROP CONSTRAINT #{key['name']}")
      end
    end


    # rename the binary columns with _bin and copy data to new column
    tables.each do |table|
      conn.columns(table).each do |col|
        if col.type == :binary
          unless exclusions.include?(col.name)
            conn.rename_column table, col.name, "#{col.name}_bin"
            conn.add_column table, col.name, :string, :limit => 32
            conn.execute("UPDATE #{table} SET #{col.name} = CONVERT(NVARCHAR(34), #{col.name}_bin, 2);\n")
          end
        end
      end
    end


    tables.each do |table|
      conn.columns(table).each do |col|
        if col.type == :binary
          unless exclusions.include?(col.name)
            conn.remove_column table, col.name
          end
        end
      end
    end

  end

  # ------------------------------------------------------------------------------
  # DOCUMENTATION Tasks
  # ------------------------------------------------------------------------------

  desc "Generates the model specs"
  task :document do

    [
      'omni::Customer 01',
      # 'omni::CustomerNeed 02',
      # 'omni::CustomerProduct 03',

      # 'omni::Person 04',
      # 'omni::Address 05',
      # 'omni::Telephone 06',
      # 'omni::EmailAddress 07',

      # 'omni::Project 08',
      # 'omni::TollgateTrack 09',
      # 'omni::TollgateCheckpoint 10',
      # 'omni::FinancialScorecard 11',

      # 'omni::Sample 12',
      # 'omni::SampleApproval 13',


      # 'omni::SalesCall 14',
      # 'omni::SalesCallPerson 15',

      # 'omni::Cfar 16',
      # 'omni::CfarApproval 17',
      # 'omni::CfarFollowup 18',
      # 'omni::CfarNotification 19',

      # 'omni::Track 20',
      # 'omni::Checkpoint 21',
      # 'omni::QualityPlant 22',
      # 'omni::Severity 23',
      # 'omni::Probability 24',
      # 'omni::Product 25'

    ].each do |doc|
      system("rails g buildit:model_spec #{doc}")
    end

    system("./doc/model_specs/wordsmith generate")
  end

  # ------------------------------------------------------------------------------
  # BUILD Tasks
  # ------------------------------------------------------------------------------

  desc 'Generates the WAR file for deployment to server'
  task :war do
    system("warble")
  end

  desc 'Performs all release steps to generate WAR'
  task :release do
    Rake::Task['assets:precompile'].invoke
    Rake::Task['omni:war'].invoke
  end


  # ------------------------------------------------------------------------------
  # DEPLOYMENT Tasks
  # ------------------------------------------------------------------------------

  namespace :deploy  do
    REMOTES.keys.each do |env|
      desc "Deploy to #{env} remote at Heroku"
      task env do
        current_branch = `git branch | grep ^* | awk '{ print $2 }'`.strip

        Rake::Task['omni:deploy:before_deploy'].invoke(env, current_branch)
        Rake::Task['omni:deploy:update_code'].invoke(env, current_branch)
        Rake::Task['omni:deploy:after_deploy'].invoke(env, current_branch)
      end
    end

    task :before_deploy, :env, :branch do |t, args|
      puts "Deploying #{args[:branch]} to #{args[:env]}"

      # Ensure the user wants to deploy a non-master branch to production
      if args[:env] == :production && args[:branch] != 'master'
        print "Are you sure you want to deploy '#{args[:branch]}' to production? (y/n) " and STDOUT.flush
        char = $stdin.getc
        if char != ?y && char != ?Y
          puts "Deploy aborted"
          exit
        end
      end
    end

    task :after_deploy, :env, :branch do |t, args|

      system('heroku run rake buildit:db:seed')

      puts "Deployment Complete"
    end

    task :update_code, :env, :branch do |t, args|
      FileUtils.cd Rails.root do
        puts "Updating #{REMOTES[args[:env]]} with branch #{args[:branch]}"
        `git push #{REMOTES[args[:env]]} +#{args[:branch]}:master`
      end
    end
  end
end

# List of environments and their heroku git remotes
REMOTES = {
  :staging    => 'omni-prod',
  :prod       => 'omni-jruby'
}
