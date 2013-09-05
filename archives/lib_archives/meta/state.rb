class Omni::Meta::State < Omni::Meta::Base
  
  def self.run(model)
    if @@has_states    
      machine = Studio::MachineMeta.where(:model_meta_id => model.model_meta_id).first
      if machine
        @@states = Omni::Meta::Base.excel_to_hash @@meta_folder, @@logic_file, 'states-not used'    
        @@states.reject! {|row| row['model_name'] != model.model_name}  	
        @@states.each do |row|
          if !Studio::StateMeta.where(:machine_meta_id => machine.machine_meta_id, :state_name => row['state_name']).first
            Studio::StateMeta.create(:machine_meta_id => machine.machine_meta_id, :state_name => row['state_name'], :description => row['description'])
            puts '-- Saving state: ' + row['state_name'] + ', model: ' + row['model_name'] if @@verbose
          end
        end 
      end
    end
  end

end