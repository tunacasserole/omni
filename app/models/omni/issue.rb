class Omni::Issue < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
 #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :issues
  self.primary_key                = :issue_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :issue_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :issue_id,                          :with => :guid
  default :issue_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"ISSUE_NBR"

  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to            :creator,              :foreign_key => 'creator_id',            :class_name => 'Buildit::User'
  belongs_to            :assignee,            :foreign_key => 'assignee_id',             :class_name => 'Buildit::User'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
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
  order_search_by :issue_nbr => :desc
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, :initial => :active do

  ### CALLBACKS ###
    after_transition :on => :close,        :do => :after_close
    after_transition :on => :backlog,      :do => :after_backlog

    ## EVENTS ###
    event :close do
      transition :any => :closed
    end

    event :backlog do
      transition :any => :backlog
    end

  end
  # STATES (End)
  

  # FILTERS (Start) =====================================================================
  filter :state_active,          :with => {state: {equal_to: 'active'}},     :priority => 40
  filter :state_closed,             :with => {state: {equal_to: 'closed'}},        :priority => 50
  filter :state_backlog,             :with => {state: {equal_to: 'backlog'}},        :priority => 60 
  filter :type_bug,             :with => {issue_type: {equal_to: 'BUG'}},        :priority => 10
  filter :type_feature,         :with => {issue_type: {equal_to: 'FEATURE'}},        :priority => 20
  filter :type_unknown,             :with => {issue_type: {equal_to: 'UNKNOWN'}},        :priority => 30  
  filter :severity_low,             :with => {severity: {equal_to: 'LOW'}},        :priority => 10  
  filter :severity_medium,             :with => {severity: {equal_to: 'MEDIUM'}},        :priority => 20  
  filter :severity_high,             :with => {severity: {equal_to: 'HIGH'}},        :priority => 30      
  # FILTERS (End)

  # HELPERS (Start) =======================================================================
  def after_close
  end

  def after_backlog
  end
  # HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :issue_nbr
    string   :assignee_id
    string   :assignee_display do assignee.full_name if assignee end
    string   :creator_id
    string   :creator_display do creator.full_name if creator end      
    string   :issue_type
    string   :severity
    string   :state
 
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
  end 
  # INDEXING (End)

end # class Omni::Issue