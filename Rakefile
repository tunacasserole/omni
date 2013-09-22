#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Omni::Application.load_tasks

# List of environments and their heroku git remotes
REMOTES = {
  :staging    => 'omni-prod',
  :prod       => 'omni-jruby'
}

namespace :omni do

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

      # LEGACY FOR Migration
      :content,
      :content_data,
      :e_attachment,
      :e_rel_attachment,
      :address,
      :agent,
      :lookup_attribute_domain_view,
      :audit_data,
      :individual,
      :customer,
      :email_address,
      :interaction,
      :lookup,
      :organization_indiv,
      :organization,
      :organization_rel,
      :omni_prob_success,
      :product,
      :omni_related_product,
      :request,
      :row_level_audit,
      :omni_sales_call_indiv,
      :telephone,
      :omni_tollgate_track,
      :omni_tollgate,
      :user_note,

      # PRIMARY tables
      :people,
      :customers,
      :sales_calls,
      :addresses,
      :email_addresses,
      :telephones,
      :products,
      :cfars,
      :ccrs,
      :omni_sample,
      :omni_tollgate_track,
      :omni_project,
      :omni_technical_response,
      :omni_sample_approval,
      :omni_request_approval,
      :omni_request_team,
      :omni_severity,
      :omni_request_followup,
      :omni_request_notification,
      :omni_checkpoint,
      :omni_cust_end_use_lkp,
      :omni_financial_scorecard,
      :probabilities,
      :omni_prod_review,
      :omni_product_grade_lkp,
      :omni_quality_plant,
      :omni_technical_report,
      :sales_call_people,
      :omni_technical_response,
      :omni_tollgate_checkpoint,
      :omni_monthly_report,
      :omni_project_approval,
      :omni_tollgate_admin,
      :omni_trans_package_lkp,
      :customer_products,
      :omni_project_goal,
      :omni_track,
      :omni_user_extensions,
      :account_plans,
      :sales_periods,
      :opportunities,
      :posis,
      :vro_agent_roles,
      :contracts,
      :approval_requests,
      :tasks
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
      'omni::CustomerNeed 02',
      'omni::CustomerProduct 03',

      'omni::Person 04',
      'omni::Address 05',
      'omni::Telephone 06',
      'omni::EmailAddress 07',

      'omni::Project 08',
      'omni::TollgateTrack 09',
      'omni::TollgateCheckpoint 10',
      'omni::FinancialScorecard 11',

      'omni::Sample 12',
      'omni::SampleApproval 13',


      'omni::SalesCall 14',
      'omni::SalesCallPerson 15',

      'omni::Cfar 16',
      'omni::CfarApproval 17',
      'omni::CfarFollowup 18',
      'omni::CfarNotification 19',

      'omni::Track 20',
      'omni::Checkpoint 21',
      'omni::QualityPlant 22',
      'omni::Severity 23',
      'omni::Probability 24',
      'omni::Product 25'

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
