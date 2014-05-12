class Desk::Approval < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :approvals
  self.primary_key                = :approval_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :approval_id,                       :presence     => true
  validates :display,                       :presence     => true
  # validates :approver_id,                      :presence     => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :approval_id,                         :with => :guid
  default :approver_id,                         :to => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :approval_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"TASK_NBR"
  default :approval_date,                       :override  =>  false,        :with  => :today
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to      :approvable,       :polymorphic => true
  belongs_to      :approver,         :foreign_key => 'approver_id',           :class_name => 'Buildit::User'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :approver_display,              :to => 'approver.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :approval_date => :desc
  # ORDERING (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string    :approvable_type
    string    :approvable_id
    string    :approval_id
    string    :approval_nbr
    string    :display
    string    :approver_display
    date      :approval_date
    string    :state

    text      :display_fulltext,             :using => :display
    text      :description_fulltext,         :using => :description
    text      :approver_display_fulltext,    :using => :approver_display
  end
  # INDEXING (End)

    # STATES (Start) ====================================================================
  state_machine :state, :initial => :active do

    # CALLBACKS ------------------
    after_transition   :draft  => :active,  :do => :notify
    after_transition   :active => :closed,  :do => :notify

    # EVENTS ---------------------
    event :activate do
      transition :draft   => :active
    end

    event :close do
      transition :active   => :closed
    end


    # STATES ---------------------
    state :draft do
    end

    state :active do
      # validates  :product_codes,                           :presence => true
      # validate   :one_active_contract
    end

    state :closed do

    end

    # STATE HELPERS ---------------------
    def notify
      puts 'notify someone'
    end
  end
  # STATES (End)

end # class Desk::Approval

