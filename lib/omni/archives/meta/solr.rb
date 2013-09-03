class Omni::Meta::Solr < Omni::Meta::Base

  def self.run model
    model.reindex batchSize:100 if model.searchable?
  end

  def self.run_all
     @models = ActiveRecord::Base.subclasses.collect { |type| type.name }.sort
     @models.each do |model_name|
       puts "\n== " + model_name.upcase.ljust(26).cyan + " ! " << Time.now.strftime("%H:%M:%S").yellow
       run model_name
     end
  end

end