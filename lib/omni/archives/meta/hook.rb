class Omni::Meta::Hook < Omni::Meta::Base
  
  def self.run(model)
  	@@hooks = Omni::Meta::Base.excel_to_hash  @@meta_folder, @@meta_file, 'hooks'
    @@hooks.reject! {|row| row['model_name'] != model.model_name}  	
    @@hooks.each do |row|
    	#puts row['model_name']
      if !Buildit::HookMeta.all(:model_meta_id => model.model_meta_id, :hook_event => row['hook_event'], :hook_method_name => row['hook_method_name']).first
        Buildit::HookMeta.create(:model_meta_id => model.model_meta_id, :hook_event => row['hook_event'], :hook_method_name => row['hook_method_name'], :hook_priority => row['hook_priority'], :description => row['description'])  
        puts '-- Saving hook: ' + row['hook_method_name'].yellow + ', model: ' + row['model_name'].cyan + ' =' if @@verbose
      end
    end 
  end

end