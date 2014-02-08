class Desk::Task < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name  = :tasks
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :task_id,                       :presence     => true
  validates :owner_id,                      :presence     => true
  validates :display,                       :presence     => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :task_id,                         :with => :guid
  default :owner_id,                        :to => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :task_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"TASK_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to      :taskable,                :polymorphic => true
  belongs_to      :task_owner,              :foreign_key => 'owner_id',           :class_name => 'Buildit::User'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :task_owner_full_name,              :to => 'task_owner.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :task_due_date => :desc
  # ORDERING (End)

  # FILTERS (Start) =====================================================================
  # FILTERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string    :taskable_type
    string    :taskable_id
    string    :task_id
    string    :task_number
    string    :display
    string    :task_owner_full_name
    date      :task_due_date
    string    :state

    text      :display_fulltext,                      :using => :display
    text      :description_fulltext,                  :using => :description
    text      :task_owner_full_name_fulltext,       :using => :task_owner_full_name
  end
  # INDEXING (End)


  # EVENTFUL (Start) ====================================================================
  eventful(:store => 'Desk.store.Task', :inspector => 'sbna-tasks-Inspector') do
    on :create,     :publish => lambda{|m| "#{m.taskable_type} - TITLE: #{m.display} created"},         :display => 'Task Created'
    on :update,     :publish => lambda{|m| "#{m.taskable_type} - TITLE: #{m.display} was updated"},     :display => 'Task Updated'
  end
  # EVENTFUL (End)


  # HOOKS (Start) =======================================================================
  # hook        :before_update,                       :set_initial_dates,       10
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  has_many     :tasks,       :class_name => 'Desk::Task',        :foreign_key => 'taskable_id'
  # HELPERS (End)

end # class Desk::Task

