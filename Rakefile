#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
require 'rake/dsl_definition'
require File.expand_path('../config/application', __FILE__)

Omni::Application.load_tasks

namespace :omni do

  task :bts, [:bts_id] => :environment do |t, args|
    puts "==================================="
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "       
    @start_time = Time.now
    bts_id = args[:bts_id]
    Omni::Bts.rake_run bts_id
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts "==================================="
  end

end # namespace omni

