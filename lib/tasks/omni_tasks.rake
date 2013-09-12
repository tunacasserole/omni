# #!/usr/bin/env rake
# # Add your own tasks in files placed in lib/tasks ending in .rake,
# # for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
# require 'rake/dsl_definition'
# require File.expand_path('../config/application', __FILE__)

# Omni::Application.load_tasks

namespace :omni do

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

    task :mark => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
      @start_time = Time.now
      Omni::Sync::Mark.inventories
      Omni::Sync::Mark.orders
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    task :rms => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
      @start_time = Time.now
      Omni::Import::Rms.inventories
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

    task :retail_pro => :environment do |t, args|
      puts "==================================="
      puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
      @start_time = Time.now
      Omni::Import::Grits::Inventory.import
      puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts "==================================="
    end

  end 

end # namespace omni

