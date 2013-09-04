#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
require 'rake/dsl_definition'
require File.expand_path('../config/application', __FILE__)

Omni::Application.load_tasks

namespace :build do

  task :system, [:worker, :model] => :environment do |t, args|
    # worker options: meta, service, client, data, all
    puts "\n== starting " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now

    if !args[:model_name]
      Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| [Omni::Meta::Destroy,Omni::Meta::Service,Omni::Meta::Client].include? x}
      Omni::Meta::Manager.run_all :verbose => true
    else
      Omni::Meta::Manager.run(args[:model_name], :verbose => true)
    end

    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end
end

namespace :omni do

  task :bts, [:bts_id] => :environment do |t, args|
    ### Sample:  rake omni:bts['9E37B80C0FFD11E39FFA668FFF712A0D']
    puts "\n== starting " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now
    bts_id = args[:bts_id]
    Omni::Bts.rake_run bts_id
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end

  task :meta, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "\n== starting " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now

    if !args[:model_name]
      Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| [Omni::Meta::Destroy,Omni::Meta::Service,Omni::Meta::Client].include? x}
      Omni::Meta::Manager.run_all :verbose => true
    else
      Omni::Meta::Manager.run(args[:model_name], :verbose => true)
    end

    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end

  task :service, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "\n== starting " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now

    Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| x != Omni::Meta::Service}
    if !args[:model_name]
      Omni::Meta::Manager.run_all :restart => args[:model_name]
    else
      Omni::Meta::Manager.run_all :restart => args[:model_name]
      system ("rake buildit:api") 
    end

    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end

  task :client, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "\n== starting " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now

    Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| x != Omni::Meta::Client}
    if args[:model_name]
      Omni::Meta::Manager.run_all :restart => args[:model_name]
    else
      Omni::Meta::Manager.run_all
    end

    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end
  
  task :import, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Location']
    puts "\n==================================="    
    puts "== seeding application  " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now

    Omni::Import::Base.constants

    if !args[:model_name]
      #Omni::Import::Sequence.run_all
      #Omni::Import::Lookup.run_all
      Omni::Import::Manager.run_all
    else
      #Omni::Import::Manager.run args[:model_name]
      Omni::Import::Manager.run_all :restart=>"#{args[:model_name]}"
    end

    puts "== seeded application in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :hub, [:hub_name, :gem_name] => :environment do |t, args|
    ### Sample:  rake omni:hub['ParkerHub']
    puts "==================================="    
    puts "== generating " << args[:hub_name] << " " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now

    Omni::Gen::HubWorker.run args[:hub_name], args[:gem_name]

    puts "== generated hub in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :state, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "==================================="    
    puts "== generating all states " #<< args[:hub_name] << " " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now

    Omni::Gen::StateWorker.run args[:model_name]

    puts "== generated states in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :seed, [:type,:model_name] => :environment do |t, args|
    puts "==================================="
    puts "== generating  Seeds  #{Time.now.strftime("%H:%M:%S").yellow}"
    @start_time = Time.now

    if args[:type] == "r"
      Omni::Gen::SeedWorker.run :restart=>"#{args[:model_name]}"
    else
      if args[:type] == "s"
        Omni::Gen::SeedWorker.run  :type=>"single",:restart=>"#{args[:model_name]}"
      else
        if args[:type] == "t"
          Omni::Gen::SeedWorker.run  :type=>"table",:mark_model=>"#{args[:model_name]}"
        else
        Omni::Gen::SeedWorker.run
        end
      end
    end

    puts "== generated seed in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :excel, [:model_name] => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "==================================="    
    puts "\n== generating excel template " << Time.now.strftime("%H:%M:%S").yellow        
    
    @start_time = Time.now
    
    if !args[:model_name]
      Omni::Gen::ExcelWorker.run_all
    else
      #puts args[:model_name]
      model = Buildit::ModelMeta.all(:model_name => args[:model_name]).first
      #puts model.model_name
      Omni::Gen::ExcelWorker.run model
    end
    
    puts "== generated excel template in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :api => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "==================================="    
    puts "== generating shared files " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now
    
    #model = Buildit::ModelMeta.all(:model_name => args[:model_name]).first
    system ('rake buildit:api')
    system ('rake buildit:i18n')
    system ('rake buildit:sources')

    puts "== generated shared files in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :lookup => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "==================================="    
    puts "== importing lookups " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now
    
    #model = Buildit::ModelMeta.all(:model_name => args[:model_name]).first
    Omni::Import::Base.constants
    Omni::Import::Sequence.run_all
    Omni::Import::Lookup.load_meta
    Buildit::Lookup::Manager.generate('omni')

    puts "== imported lookups in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  task :search => :environment do |t, args|
    ### Sample:  rake omni:import['Hub']
    puts "==================================="    
    #puts "== generating search block " << Time.now.strftime("%H:%M:%S").yellow        
    @start_time = Time.now
    
    #model = Buildit::ModelMeta.all(:model_name => args[:model_name]).first
    Omni::Meta::Search.run_all

    #puts "== generated search block in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "===================================\n\n"
  end

  desc "Runs only demo based seed files from each registered GEM and the host application"
  task :demo, [:gem_name]  => :environment do |t, args|
     #Rake::Task["buildit:db:seed"].invoke
     puts "Running demo seeds for #{args[:gem_name]}"
     puts Rails.root.to_s
     Omni::Data::Seeder.run :gem_name => "#{args[:gem_name]}"
  end
  

end # namespace omni

