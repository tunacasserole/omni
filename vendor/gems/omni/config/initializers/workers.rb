# Buildit::Framework.configure do  
#   config.initializers                     += [Omni::Gen::Initializer]
# end


# Buildit::Framework.register_scaffolders(:omni, :service, [

#   # register generators
#   Omni::Gen::Worker,
#   #Omni::Gen::CsvWorker,
#   #Omni::Gen::ExcelWorker,
#   Omni::Gen::HubWorker,
#   #Omni::Gen::SearchWorker

# ])

# Buildit::Framework.register_scaffolders(:omni, :convert, [

#     # register generators
#     Omni::Convert::Mark::Inventory,
#     Omni::Convert::Mark::Sku,
#     Omni::Convert::Mark::Order    
# ])

# Buildit::Framework.register_scaffolders(:omni, :stub, [

#     # register generators
#     Omni::Stub::Model,
# ])

# Buildit::Framework.register_scaffolders(:omni, :meta, [

#   # register meta importers
#   #Omni::Meta::Destroy,
#   Omni::Meta::Attribute,
#   Omni::Meta::Validation,
#   Omni::Meta::Association,
#   Omni::Meta::Polymorphic,
#   Omni::Meta::Explorer,
#   Omni::Meta::Column,
#   Omni::Meta::Form,
#   Omni::Meta::Fieldset,
#   Omni::Meta::Field,
#   Omni::Meta::Inspector,
#   Omni::Meta::Card,
#   #Omni::Meta::Hook,
#   Omni::Meta::Service,
#   Omni::Meta::Client
#   #Omni::Meta::Data
#   #Omni::Meta::Excel,
#   #Omni::Meta::Solr,
# ])