class Omni::Meta::Machine < Omni::Meta::Base
  
  def self.run(model)
    puts 'Machines'
    puts @@has_states.to_s
    if @@has_states
      @@machines = Omni::Meta::Base.excel_to_hash @@meta_folder, @@logic_file, 'machines'    
      @@machines.reject! {|row| row['model_name'] != model.model_name}  	
      @@machines.each do |row|
        # => puts row['machine_name']
        if !Studio::MachineMeta.where(:model_meta_id => model.model_meta_id, :machine_name => row['machine_name']).first
          Studio::MachineMeta.create(:model_meta_id => model.model_meta_id, :machine_name => row['machine_name'], :initial_state => row['initial_state'], :description => row['description'])
          puts '-- Saving machine: ' + row['machine_name'] + ', model: ' + row['model_name'] if @@verbose
        end
      end 

      if !Studio::MachineMeta.where(:model_meta_id => model.model_meta_id, :machine_name => model.model_name).first
        Studio::MachineMeta.create(:model_meta_id => model.model_meta_id, :machine_name => model.model_name, :initial_state => 'new', :description => 'auto-generated')
      end

    end
    
  end

 
end