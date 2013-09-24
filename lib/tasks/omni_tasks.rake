# #!/usr/bin/env rake
# # Add your own tasks in files placed in lib/tasks ending in .rake,
# # for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
# require 'rake/dsl_definition'
# require File.expand_path('../config/application', __FILE__)

# Omni::Application.load_tasks

# namespace :omni do

#   task :migrations => :environment do |t, args|

#     puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
#     @start_time = Time.now
#     Omni::Sync::Script.go
#     puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"

#   end

#   task :bts, [:bts_id] => :environment do |t, args|

#     puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
#     @start_time = Time.now
#     bts_id = args[:bts_id]
#     b=Omni::Bts.where(:bts_id => bts_id).first
#     b.rake_run
#     puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"

#   end

#   namespace :sync do
#     namespace :mark do
#       desc "load Omni inventories on hand from Mark inventory qoh."
#       task :on_hand => :environment do |t, args|
#         Omni::Sync::Mark.on_hand
#       end
#       desc "load Omni inventories wip from Mark wip."
#       task :wip => :environment do |t, args|
#         Omni::Sync::Mark.wip
#       end
#       desc "load Omni inventories allocated from Mark transfer line qty."
#       task :allocated => :environment do |t, args|
#         Omni::Sync::Mark.allocated
#       end
#       desc "load Omni inventories transit from Mark transfer line qty."
#       task :transit => :environment do |t, args|
#         Omni::Sync::Mark.transit
#       end
#       desc "load Omni daily results net sale units from Mark order line qty_ordered."
#       task :sold => :environment do |t, args|
#         Omni::Sync::Mark.results
#       end
#     end

#     namespace :rms do
#       desc "load Omni daily results net sale units from rms."
#       task :on_hand => :environment do |t, args|
#         Omni::Sync::Rms.on_hand
#       end
#       desc "load Omni inventory, cost, daily, and period results from the RMS System."
#       task :on_order => :environment do |t, args|
#         Omni::Sync::Rms.on_order
#       end
#       desc "load Omni daily results net sale units from rms transaction_entry quantity."
#       task :sold => :environment do |t, args|
#         Omni::Sync::Rms.on_order
#       end
#     end

#     namespace :grits do
#       desc "load Omni inventory, cost, daily, and period results from the RMS System."
#       task :rms => :environment do |t, args|
#         Omni::Sync::Rms.results
#       end

#     end
#   end # namespace omni
# end
