#require 'spreadsheet'
require 'roo'

class Omni::Meta::Table < ActiveRecord::Migration

  def self.clobber(table_name)
    # drop the table
    #puts "== dropping table: " + table_name.upcase.ljust(30).cyan + " ! " << Time.now.strftime("%H:%M:%S").yellow
    drop_table table_name if ActiveRecord::Base.connection.table_exists? table_name

    # locate any existing migrations for a table and delete them
    base_folder = File.join(Rails.root.to_s,'vendor','gems','omni','db','migrate')
    #puts base_folder
    Dir[File.join(base_folder, '**', '*.rb')].each do |file|
      if file =~ /create_#{table_name}.rb/
        #puts "== deleting migration: " + file.upcase.ljust(30).cyan + " ! " << Time.now.strftime("%H:%M:%S").yellow
        FileUtils.rm_rf(file)
        break
      end
    end
  end
  
  def self.clobber_all
    ActiveRecord::Base.connection.tables.each {|t| clobber t}
  end

  def self.create_import_template
    # create an xls workbook template for data importing based on tables in the db
    @format = Spreadsheet::Format.new(:weight => :bold)
    @template_folder = File.join(Dir.home, 'Dropbox', 'omni', 'data', 'templates')
    @template_file = File.join(@template_folder, "data_import_template_#{Time.now.round(3).to_s.chomp(' -0700').gsub(':','-').gsub(' ','_').chop.chop.chop}.xls")
    @book = Spreadsheet::Workbook.new
    ActiveRecord::Base.connection.tables.each {|t| add_worksheet_to_template t}
    @book.write @template_file
  end

  def self.add_worksheet_to_template(table)
    # create a tab for each table that you wish to import data into
    initiate "Creating the excel file"
    write_sheet = @book.create_worksheet :name => table
    write_sheet.row(0).set_format(0, @format)
    table.classify.constantize.columns.each do |c|
      column = ""
      column << "*" unless c.null # indicate required field 
      column << c.name
      write_sheet.row(0).set_format(i+1, @format)
      write_sheet.row(0).push column
    end
  end
  
end
