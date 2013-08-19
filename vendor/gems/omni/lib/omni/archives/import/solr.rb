class Omni::Import::Solr < Omni::Import::Base

  def self.run_all
    Omni::Program.reindex
  end  

end

