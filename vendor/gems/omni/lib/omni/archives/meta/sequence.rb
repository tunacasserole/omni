require 'csv'

class Omni::Meta::Sequence < Omni::Meta::Base

  # def self.load_from_meta
  #   if Buildit::Sequence.all.count < 26
  #     # Count number of sequences the system needs
  #     attrs = []
  #     Buildit::AttributeMeta.all.each {|a| attrs << a if a.attribute_name.end_with? '_nbr'}
  #     if attrs.count >= Buildit::Sequence.all.count
  #       attrs.each {|a| Buildit::Sequence.create(:sequence_code => a.attribute_name.upcase, :padding => 3, :value => 1000) unless Buildit::Sequence.where(:sequence_code => a.attribute_name.upcase).first}
  #     end
  #     #logger.debug "Sequences are screwed - expected: #{attrs.count.to_s}, actual: #{Buildit::Sequence.count.to_s}" if Buildit::Sequence.count < attrs.count
  #   end
    
  #   #logger.debug "== #{'Sequence'.cyan} => expected: #{'26'.cyan} actual #{Buildit::Sequence.all.count.to_s.cyan}"

  # end

  def self.run_all
    if Buildit::Sequence.count < 26
      @@data_folder = File.join(Rails.root,'db','import')
      file = File.open(File.join(@@data_folder, 'core_data.xlsx'), mode = 'r')
      spreadsheet = Excelx.new(file.path, nil, :ignore)
      ##logger.debug "-- looking for spreadsheet tab: " + model_name.tableize
      spreadsheet.default_sheet = spreadsheet.sheets.index('sequences') + 1
      header = spreadsheet.row(1)
      (2..spreadsheet.last_row).each do |i|
        row = Hash[[header, spreadsheet.row(i)].transpose]
        ##logger.debug '-- saving sequence: ' + row['display'] if row['display']
        if !Buildit::Sequence.where(:sequence_code => row['display']).first
          Buildit::Sequence.create(:sequence_code => row['display'], :padding => row['padding'], :value => row['value'])
        end
      end
      #logger.debug "Sequences are screwed - expected: #{spreadsheet.last_row-1}, actual: #{Buildit::Sequence.count.to_s}" if Buildit::Sequence.count < spreadsheet.last_row - 1
      #logger.debug "-- #{'Sequences'.cyan} => expected: #{(spreadsheet.last_row-1).to_s.cyan} actual #{Buildit::Sequence.all.count.to_s.cyan}"
    end
  end  

end

