class Omni::Meta::ModelGroup < Omni::Meta::Base
  
  def self.load(model_name)
  	#puts 'model group'
    @@models.each do |row|
      next unless row["model_name"] == model_name
      mg_name = row["model_group"]
      #puts mg_name
      Buildit::ModelGroupMeta.create(:package_name => 'omni', :name => mg_name) unless Buildit::ModelGroupMeta.all(:package_name => 'omni', :name => mg_name).first
    end
  end

end