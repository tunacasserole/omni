class Omni::Meta::Transition < Omni::Meta::Base
  
  def self.run(model)
    puts 'transition meta import' if @@verbose
    if @@has_states
      machine = Studio::MachineMeta.where(:model_meta_id => model.model_meta_id).first
      @@transitions = Omni::Meta::Base.excel_to_hash @@meta_folder, @@logic_file, 'transitions'    
      @@transitions.reject! {|row| row['model_name'] != model.model_name}  	
      @@transitions.each do |row|
        puts row['model_name'] + ' ' + row['event_name'] if @@verbose
        event = Studio::EventMeta.where(:machine_meta_id => machine.machine_meta_id,:event_name => row['event_name']).first || Studio::EventMeta.create(:machine_meta_id => machine.machine_meta_id, :event_name => row['event_name']) 
        from_state = row['from_state']
        to_state = row['to_state']
        if !Studio::TransitionMeta.where(:event_meta_id => event.event_meta_id, :from_state => from_state, :to_state => to_state).first
          Studio::TransitionMeta.create(:event_meta_id => event.event_meta_id, :from_state => from_state, :to_state => to_state, :before_transition => row['before_transition'], :after_transition => row['after_transition'])
          puts '-- Saving transition: ' + row['transition_name'] + ', model: ' + row['model_name'] if @@verbose
        end
      end
    end 
    
  end

end