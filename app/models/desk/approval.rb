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
  state_machine :state, :initial => :draft do

    # CALLBACKS ------------------
    after_transition   :draft  => :request, :do => :notify
    # after_transition   :request  => :final

    # EVENTS ---------------------
    event :request do
      transition :draft   => :request
    end

    event :finalize do
      transition :request   => :final
    end

    event :reject do
      transition :request   => :draft
    end


    # STATES ---------------------
    state :draft do
    end

    state :request do
    end

    state :final do
    end
  end

  # HELPERS (Start) =====================================================================
  # # Sends an email notification to the approver and owner of the case
  def notify
    # Determine target address

    email_addresses = [self.approver].collect { |u| u.email_address if u }
    email_addresses.reject! { |e| e == Buildit::User.current.email_address } # do not notify user who made the changes
    if email_addresses.count > 0
      message = Buildit::Comm::Email::Message.create(
          subject: "OMNI notice: your approval has been requested for #{self.approvable.display_as}",
          body: Buildit::Email::Manager.generate(self, "approval_notice"),
      )

      email_addresses.each { |x| puts x}
      message.send_to email_addresses
      message.queue
      Buildit::Comm::Email::OutboundService.process
    end
  end # def notify

  def display_as
    self.display
  end
  # HELPERS (End)

end # class Desk::Case
