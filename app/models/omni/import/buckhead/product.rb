class Omni::Import::Buckhead::Product < Omni::Import::Base

  def self.import
    puts "..Omni::Import::Buckhead::Product.import"
  	total_count = 0
  	error_count = 0
  	created_count = 0

    Omni::RmsItem.all.each_with_index do |item,i|
      puts "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '0000'
    	total_count += 1
      sku = Omni::Sku.create(:source => "BUCKHEAD",:source_id => item.ID, :display=>item.description) unless Omni::Sku.where(:source => "BUCKHEAD",:source_id => item.ID,:display=>item.description).first
      created_count += 1 if sku
    end

    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    puts "******************************"
    puts  "Grits items processed: #{total_count}"
    puts  "creation errors: #{error_count}"
    puts  "rows succesfully created: #{created_count}"
    puts "******************************"
    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    
  end
end