class Omni::Import < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  ##self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :imports
  self.primary_key                = :import_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :import_id,                        :presence    => true
  validates :data_source,                      :lookup      => 'DATA_SOURCE',                      :allow_nil => false  
  validates :job_type,                         :lookup      => 'JOB_TYPE',                         :allow_nil => false      
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :import_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to  :department,                       :class_name => 'Omni::Department',              :foreign_key => 'department_id'
  has_many     :logs,                            :class_name => 'Omni::Log',                     :foreign_key => 'logable_id' , :as => :logable
  has_many     :attachments,                     :class_name => 'Buildit::Attachment',           :foreign_key => 'attachable_id' , :as => :attachable  
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  
  # MAPPED ATTRIBUTES (End)

  
  # COMPUTED ATTRIBUTES (Start) =========================================================
  
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================
  
  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  order_search_by :log_nbr => :asc
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # EVENTS (Start) ====================================================================  
  eventful do 
    after :update,  :if => lambda {|m| m.state == 'done' }, :publish => lambda {|m| "#{m.data_source} #{m.job_type} ended at: " << Time.now.strftime("%H:%M:%S")}, :title => 'Imports'
  end
  # EVENTS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :submit, :do => :process_import

  ### EVENTS ###
    event :submit do
      transition any => :running
      transition :running => :done
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  # def schedule_run
  #   # initiate run processing in resque with a worker
  #   puts "\n\n******************** SCHEDULE RUN *****************\n\n"
  #   Resque.enqueue(Omni::ImportRun, self.import_id)
  #   puts "\n\n******************** END - SCHEDULE RUN *****************\n\n"    
  # end

  def process_import
    Omni::Import::Manager.run_by_id(self.import_id)
    self.state = 'done'
    self.save
  end
  # STATE HANDLERS (End)
  

  # HELPERS (Start) =====================================================================
  # HELPERS (End)

end # class Omni::Import