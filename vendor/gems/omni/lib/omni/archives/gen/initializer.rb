class Omni::Gen::Initializer

  def self.run!
    Buildit::Framework.configuration.scaffolders.buildit_service -= [Buildit::Gen::Scaffold::Service::SearchWorker]
    Buildit::Framework.configuration.scaffolders.buildit_service -= [Buildit::Gen::Scaffold::Service::StateWorker]    
    Buildit::Framework.configuration.scaffolders.buildit_service -= [Buildit::Gen::Scaffold::Service::ModelWorker]      
    #Buildit::Framework.configuration.scaffolders.buildit_client -= [Buildit::Gen::Scaffold::Desktop::ExplorerWorker]    
    Buildit::Framework.configuration.scaffolders.buildit_service += [Omni::Gen::SearchWorker]
    Buildit::Framework.configuration.scaffolders.buildit_service += [Omni::Gen::StateWorker]
    Buildit::Framework.configuration.scaffolders.buildit_service += [Omni::Gen::ModelWorker]    
    #Buildit::Framework.configuration.scaffolders.buildit_client += [Omni::Gen::ExplorerWorker]    
  end
end