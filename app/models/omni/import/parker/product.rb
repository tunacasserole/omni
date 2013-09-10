class Omni::Import::Parker::Product < Omni::Import::Base

  def self.import
    puts "..Omni::Import::Parker::Product.import"
  	total_count = 0
  	error_count = 0
  	created_count = 0

    Omni::MarkInventory.all.each_with_index do |mi,i|
      puts "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '00000'
    	total_count += 1
      sku = Omni::Sku.create(:source => "PARKER",:display=>"#{mi.stock_nbr},#{mi.size}") unless Omni::Sku.where(:source => "PARKER",:display => "#{mi.stock_nbr},#{mi.size}").first
      created_count += 1 if sku
    end

    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    puts "******************************"
    puts  "Mark items processed: #{total_count}"
    puts  "creation errors: #{error_count}"
    puts  "rows succesfully created: #{created_count}"
    puts "******************************"
    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    
  end
end