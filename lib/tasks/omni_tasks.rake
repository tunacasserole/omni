# #!/usr/bin/env rake
# # Add your own tasks in files placed in lib/tasks ending in .rake,
# # for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
# require 'rake/dsl_definition'
# require File.expand_path('../config/application', __FILE__)

# Omni::Application.load_tasks

namespace :omni do

  task :migrations => :environment do |t, args|
    puts "==================================="
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    Omni::Sync::Script.go
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end
  
  task :bts, [:bts_id] => :environment do |t, args|
    puts "==================================="
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    bts_id = args[:bts_id]
    b=Omni::Bts.where(:bts_id => bts_id).first
    b.rake_run
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end

  namespace :sync do
   
    desc "load Omni inventory, cost, daily, and perion results from the Mark System."
    task :mark => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now
      # setting program parameters
      run_size = 1000

      # Omni::Sync::Mark.inventory
      # Omni::Sync::Mark.costs
      Omni::Sync::Mark.results
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    desc "load Omni inventory, cost, daily, and period results from the RMS System."
    task :rms => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now
      Omni::Sync::Rms.results
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    desc "load Omni inventory, cost, daily, and period results from Retail Pro."
    task :retail_pro => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now
      Omni::Sync::Grits.results
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    desc "Sync omni tables to omni tables."
    task :omni => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now
      # Summarize daily results into period results
      Omni::Sync::Omni.results 
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    desc "Timings for different etl techniques."
    task :time => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
      @start_time = Time.now

      # Omni::Sync::Time.mri
      Omni::Sync::Time.jruby      
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

  end

end # namespace omni

