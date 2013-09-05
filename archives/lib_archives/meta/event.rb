class Omni::Meta::Event < Omni::Meta::Base
  
  def self.run(model)
    machine = Studio::MachineMeta.where(:model_meta_id => model.model_meta_id).first
    if @@has_states 
    	@@events = Omni::Meta::Base.excel_to_hash @@meta_folder, @@logic_file, 'events'
      @@events.reject! {|row| row['model_name'] != model.model_name}  	
      @@events.each do |row|
        if !Studio::EventMeta.where(:machine_meta_id => machine.machine_meta_id, :event_name => row['event_name']).first
          Studio::EventMeta.create(:machine_meta_id => machine.machine_meta_id, :event_name => row['event_name'])
          puts '-- Saving event: ' + row['event_name'] + ', model: ' + row['model_name'] if @@verbose
        end
      end 
    end
  end

end