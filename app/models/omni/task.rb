class Omni::Task < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :tasks
  self.primary_key                = :task_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :task_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :task_id,                         :with => :guid
  default :task_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"TASK_NBR"
  default :creator_id,                      :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :assignee_id,                     :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}  
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to            :project,              :foreign_key => 'project_id',            :class_name => 'Omni::Project'
  belongs_to            :creator,              :foreign_key => 'creator_id',            :class_name => 'Buildit::User'
  belongs_to            :assignee,            :foreign_key => 'assignee_id',             :class_name => 'Buildit::User'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :project_display,                        :to => 'project.display'
    map :creator_display,                        :to => 'creator.full_name'    
    map :assignee_display,                      :to => 'assignee.full_name'
  end  
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
  
  # SCOPES (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :complete, :do => :process_complete

  ### EVENTS ###
    event :complete do
      transition any => :done
    end
  end
  # STATES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :task_id
    string   :display
    string   :project_display do project.display if project end
    string   :task_nbr
    string   :state
    string   :task_type
    string   :importance
    string   :points
    string   :assignee_display
    string   :creator_display
    date     :target_release
    text     :display_fulltext, :using => :display
  end
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::Task