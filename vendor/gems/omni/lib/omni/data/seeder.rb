#
#                   Copyright (c) 2012 BUILDIT.IO, Inc.
#                          ALL RIGHTS RESERVED
#
#  THIS PROGRAM CONTAINS PROPRIETARY INFORMATION OF BUILDIT.IO, INC.
#  --------------------------------------------------------------------
#
#  THIS PROGRAM CONTAINS THE CONFIDENTIAL AND/OR PROPRIETARY INFORMATION
#  OF BUILDIT.IO, INC. ANY DUPLICATION, MODIFICATION, DISTRIBUTION, PUBLIC
#  PERFORMANCE, OR PUBLIC DISPLAY OF THIS PROGRAM, OR ANY PORTION OR
#  DERIVATION THEREOF WITHOUT THE EXPRESS WRITTEN CONSENT OF
#  BUILDIT.IO, INC. IS STRICTLY PROHIBITED.  USE OR DISCLOSURE OF THIS
#  PROGRAM DOES NOT CONVEY ANY RIGHTS TO REPRODUCE, DISCLOSE OR DISTRIBUTE
#  ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT CONTAINS IN
#  WHOLE OR IN PART ANY ASPECT OF THIS PROGRAM.
#

require 'fileutils'
require 'buildit/util/data/seed_proxy'

module Omni::Data::Seeder

  # this is the primary entry point into the Seeder responsible for running all of the seed files in each of the
  # registered GEMs and the host rails application. Unlike the migrator, it is not require to move each file into 
  def self.run(options={})

    gem_name = options[:gem_name] || 'all'

    # locate the paths for all seed files
    if (gem_name != 'all') then
      paths = Array(process_gem_path(gem_name))
      puts paths.first
    else
      paths = Array(process_paths("demo"))
      abort("End")
    end

    # fetch the full path names for each file
    files = Dir[*paths.map { |p| "#{p}/**/[0-9]*_*.rb" }]

    # load all of the current seeds and reference in an array
    loaded_seeds = Buildit::Seed.select(:version).map {|r| r.version}

    seeds = files.map do |file|
      version, name, scope = file.scan(/([0-9]+)_([_a-z0-9]*)\.?([_a-z0-9]*)?.rb/).first
      name, version = name.camelize, version.to_i
      Buildit::Util::Data::SeedProxy.new(name, version, file)
    end

    # reorder the seeds to ensure they run in the correct order across all gems
    seeds = seeds.sort_by(&:version)

    puts "==  Loading Data =============================================================="
    # process each seed determining first if they are eligible to be run.
    seeds.each do |seed|

      unless loaded_seeds.include?(seed[:version].to_s)
        start = Time.now
        puts "-- #{seed[:name]} (#{seed[:version]})"
        begin
          load seed[:filename]
          Buildit::Seed.create(:version => seed[:version].to_s)
        end
        diff = Time.now - start
        puts "   -> #{diff}s"
      end
    end

  end

  # def self.run

  def self.process_paths(demo_only)
    result = []

    path   = (demo_only ? "demo" : "seed")

    Buildit::Framework.configuration.gems.each { |k, v| result += [File.join(v[:path], "db", path)] }
    result += [File.join(Rails.root.to_s, "db", path)]
  end

  def self.process_gem_path(gem_name)
    result = ""
    result += File.join(Rails.root.to_s, "vendor","gems",gem_name, "db","demo")
  end

end # module Buildit::Util::Sequel::Migrator