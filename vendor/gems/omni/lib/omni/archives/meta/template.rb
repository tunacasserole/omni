require 'spreadsheet'

class Studio::Import::Template < Studio::Import::Base

  def self.constants
    @format = Spreadsheet::Format.new(:weight => :bold)
    @template_folder = File.join(Rails.root, 'vendor','gems','omni','db','import','templates') 
    @template_file = File.join(@template_folder, "meta_template_#{Time.now.round(3).to_s.chomp(' -0700').gsub(':','-').gsub(' ','_').chop.chop.chop.chop.chop.chop.chop.chop.chop}.xls")
    @book = Spreadsheet::Workbook.new
  end

  def self.run(model)
    constants
    process model
    @book.write @template_file = File.join(@template_folder, @template_file)
  end

  def self.run_all
    constants
	buildit_models = ActiveRecord::Base.descendants
    buildit_models.each {|m| process m if m.to_s.start_with? 'Buildit'}
    @book.write @template_file
	puts 'wrote book to: ' + @template_file
  end

  def self.process(model)
    write_sheet = @book.create_worksheet :name => model.table_name
    write_sheet.row(0).set_format(0, @format)
    write_sheet.row(0).push 'display'
    model.columns.each_with_index do |col, i| 
      puts 'processing attribute: ' + col.name
      column = ""
      column << "*" unless col.null
      column << "#{col.name}"
      write_sheet.row(0).set_format(i+1, @format)
      write_sheet.row(0).push column
    end
  end

end
