class Desk::Task < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :tasks
  self.primary_key                = :task_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :task_id,                       :presence     => true
  validates :display,                       :presence     => true
  # validates :owner_id,                      :presence     => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :task_id,                         :with => :guid
  default :owner_id,                        :to => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :task_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"TASK_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to      :taskable,       :polymorphic => true
  belongs_to      :owner,          :foreign_key => 'owner_id',           :class_name => 'Buildit::User'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :owner_name,              :to => 'owner.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :task_due => :desc
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
    string    :owner_name
    date      :task_due
    string    :state

    text      :display_fulltext,                      :using => :display
    text      :description_fulltext,                  :using => :description
    text      :owner_name_fulltext,       :using => :owner_name
  end
  # INDEXING (End)
end # class Desk::Task

