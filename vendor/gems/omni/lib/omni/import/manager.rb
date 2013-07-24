class Omni::Import::Manager < Omni::Import::Base

  def self.run_by_id(import_id)
    Omni::Import::Base.load_import import_id
    log_it "Omni::Import::Manager.run_by_id('#{import_id}')"     
    log_it "Omni::Import::#{@@import.data_source.capitalize}::#{@@import.job_type.capitalize}"
    ('Omni::' + @@import.model_name).constantize.all.each {|row| row.destroy} if @@import.is_drop_data  # drop data first, if needed
    "Omni::Import::#{@@import.data_source.capitalize}::#{@@import.job_type.capitalize}".constantize.import(@@import) 
    @@import.state = 'done'
    @@import.save
    log_it "END - Omni::Import::Manager.run_by_id"        
  end

  def self.run(model_name)
    Omni::Import::Base.constants unless defined? @@project_id
    Omni::Import::Data.load(model_name) if @@models.include? 'Omni::' + model_name
    if !@@exceptions.empty?
      log_it @@exceptions
      @@exceptions = []
      #abort 'found exceptions'
    end
    ("Omni::#{model_name}").constantize.reindex
  end
 
  def self.run_all(options = {})
    Omni::Import::Base.constants
    seq = 0
    @@core_data_main.each {|row| seq = row['sequence'] if row['table_name'].classify == options[:restart]} if options[:restart]
    @@core_data_main.each {|row| run row['table_name'].classify unless (@@skip_these_tables.include? row['table_name']) or !row['sequence'] or (row['sequence'] < seq.to_s and options[:restart]) }

   # @@core_data_main.sort!{|x,y| x['table_name'] <=> y['table_name']}
   # @@core_data_main.each {|row| run row['table_name'].classify unless (@@skip_these_tables.include? row['table_name'] and options[:restart] and row['table_name'] < options[:restart])}
  end

end