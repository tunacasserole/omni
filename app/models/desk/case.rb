class Desk::Case < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :cases
  self.primary_key                = :case_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :case_id,                        presence: true, uniqueness: true
  validates :display,                        presence: true
  validates :project_id,                     presence: true
  validates :owner_id,                       presence: true
  validates :requestor_id,                   presence: true
  validates :reviewer_id,                    presence: true
  validates :case_type,                      lookup: 'CASE_TYPE',       allow_nil: true
  validates :case_size,                      lookup: 'CASE_SIZE',       allow_nil: true
  validates :case_urgency,                   lookup: 'CASE_URGENCY',    allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :case_id,                          with: :guid
  default :case_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"CASE_NBR"
  default :project_id,                       to: lambda{ |m| Desk::Project.omni_project.project_id }
  default :owner_id,                         to: lambda{ |m| m.project.owner_id if m.project }
  default :requestor_id,                     to: lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  default :reviewer_id,                      to: lambda{ |m| m.project.reviewer_id if m.project }
  default :details,                          to: "select a request type for further instructions"
  default :case_urgency,                     to: 'STANDARD'
  default :case_type,                        to: 'QUESTION'
  # default :case_size,                        to: 'SMALL'
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :tasks,                as: :taskable
  has_many     :approvals,            as: :approvable
  has_many     :notes,                as: :notable, class_name: 'Buildit::Note', foreign_key: 'notable_id'
  has_many     :teams,                as: :teamable
  belongs_to   :project,              class_name: 'Desk::Project',        foreign_key: 'project_id'
  belongs_to   :owner,                class_name: 'Buildit::User',        foreign_key: 'owner_id'
  belongs_to   :requestor,            class_name: 'Buildit::User',        foreign_key: 'requestor_id'
  belongs_to   :reviewer,            class_name: 'Buildit::User',        foreign_key: 'reviewer_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :owner_display,            to: 'owner.full_name'
  map :requestor_display,            to: 'requestor.full_name'
  map :reviewer_display,            to: 'reviewer.full_name'
  map :project_display,            to: 'project.display'
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    # compute :note_history,                  to: lambda{ |m| m.notes.first.detail}
    # compute :backlog_time,                with: :compute_backlog_time
    # compute :response_time,               with: :compute_response_time
    # compute :resolve_time,                with: :compute_resolve_time
  end
  # COMPUTED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
    # string   :billing_state   do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.billing_state) end
  searchable do
    string   :case_id
    string   :project_id
    string   :case_nbr
    string   :case_type do |x| x.case_type.downcase end
    string   :case_size do |x| Buildit::Lookup::Manager.display_for('CASE_SIZE', x.case_size) end
    string   :case_urgency do |x| Buildit::Lookup::Manager.display_for('CASE_URGENCY', x.case_urgency) end
    string   :state do |x| x.state.gsub('_',' ') end
    string   :display
    string   :description
    string   :project_display
    string   :owner_display
    string   :requestor_display
    string   :reviewer_display

    text     :case_nbr_fulltext, using: :case_nbr
    text     :case_type_fulltext, using: :case_type
    text     :case_urgency_fulltext, using: :case_urgency
    text     :case_size_fulltext, using: :case_size
    text     :state_fulltext, using: :state
    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
    text     :project_display_fulltext, using: :project_display
    text     :owner_display_fulltext, using: :owner_display
    text     :requestor_display_fulltext, using: :requestor_display
    text     :reviewer_display_fulltext, using: :reviewer_display
  end
  order_search_by :case_nbr => :asc
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

    # CALLBACKS ------------------
    after_transition  [:needs_approval,:ready_to_close] => any, do: :do_approve

    # EVENTS ---------------------
    event :activate do
      transition :backlog  => :draft
      transition :draft  => :active
      transition :approved_to_activate  => :active
    end

    event :backlog do
      transition [:draft,:active]  => :backlog
      transition :backlog  => :draft
    end

    event :review do
      transition :draft => :needs_approval
      transition :active => :ready_to_close
    end

    event :reject do
      transition :ready_to_close => :active
      transition :needs_approval => :draft
    end

    event :approve do
      transition :ready_to_close => :closed
      transition :needs_approval => :approved_to_activate
    end

    event :close do
      transition [:draft,:backlog,:active,:ready_to_close]  => :closed
    end


    # STATES ---------------------
    state :backlog do
    end

    state :draft do
    end

    state :active do
    end

    state :ready_to_close do
    end

    state :needs_approval do
    end

    state :closed do
    end
  end

  def set_detail
    if self.case_type_changed?
      self.details =
        case self.case_type
        when 'BUG'
          '... please include steps to reproduce, expected results, and actual results in the description field for all bug reports. '
        when 'ENHANCEMENT'
          '... please list as much detail about the enhancement as possible in the description field for all enhancement requests.'
        when 'QUESTION'
          '... please give as much detail about your question as possible in the description field for any question you may have.'
        when 'DATA'
          '... please include a description of the exact data you expected to see as well as what you actually saw for all data related issues.'
        else
          '... please add a detailed description.'
        end
    end
  end
  # STATES (End)

  # HOOKS (Start) =======================================================================
  hook :before_update, :set_detail, 10
  hook :before_create, :set_detail, 20
  hook :before_create, :notify, 40
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  # Sends an email notification to the requestor and owner of the case
  def notify
    # Determine target address
    email_addresses = [self.owner,self.requestor,self.reviewer].collect { |u| u.email_address if u }
    # email_addresses.reject! { |e| e == Buildit::User.current.email_address } # do not notify user who made the changes
    if email_addresses.count > 0
      message = Buildit::Comm::Email::Message.create(
          subject: "OMNI notice: CASE #: #{case_nbr} has activity",
          body: Buildit::Email::Manager.generate(self, "case_notice"),
      )

      message.send_to email_addresses
      message.queue
      Buildit::Comm::Email::OutboundService.process
      email_addresses.each { |x| puts x}
    end
  end # def notify

  def do_approve
    approver = Buildit::User.current if Buildit::User.current
    approval_comment = "approval given by #{approver.full_name}"
    a = approvals.create(approver_id: approver.user_id, display: approval_comment)
  end
  # HELPERS (End)

end # class Desk::Case
