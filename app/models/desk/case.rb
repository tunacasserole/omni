class Desk::Case < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :cases
  self.primary_key                = :case_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_audit
  supports_fulltext
  supports_bookmarks
  supports_global_search
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
  has_many     :state_changes,    as: :stateable, class_name: 'Desk::StateChange', foreign_key: 'stateable_id'
  has_many     :notes,                as: :notable, class_name: 'Buildit::Note', foreign_key: 'notable_id'
  has_many     :tasks,                as: :taskable
  has_many     :approvals,            as: :approvable
  has_many     :teams,                as: :teamable
  belongs_to   :project,              class_name: 'Desk::Project',        foreign_key: 'project_id'
  belongs_to   :owner,                class_name: 'Buildit::User',        foreign_key: 'owner_id'
  belongs_to   :requestor,            class_name: 'Buildit::User',        foreign_key: 'requestor_id'
  belongs_to   :reviewer,             class_name: 'Buildit::User',        foreign_key: 'reviewer_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :owner_display,            to: 'owner.full_name'
  map :requestor_display,        to: 'requestor.full_name'
  map :reviewer_display,         to: 'reviewer.full_name'
  map :project_display,          to: 'project.display'
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :response_time,               with: :compute_response_time
    compute :resolve_time,                with: :compute_resolve_time
  end
  # COMPUTED ATTRIBUTES (End)

  # FILTERS (Start) =====================================================================
  filter :role_requestor,             :with => {requestor_id: {equal_to: Omni::Util::User.id } },  priority: 10
  filter :role_owner,                 :with => {owner_id:     {equal_to: Omni::Util::User.id } },  priority: 20
  filter :role_reviewer,              :with => {reviewer_id:  {equal_to: Omni::Util::User.id } },  priority: 30

  filter :is_approved,                 :with => {is_approved: {equal_to: true        }},         priority: 10

  filter :urgency_showstopper,        :with => {case_urgency: {equal_to: 'SHOWSTOPPER'}},   priority: 10
  filter :urgency_high,               :with => {case_urgency: {equal_to: 'HIGH'}       },   priority: 20
  filter :urgency_standard,           :with => {case_urgency: {equal_to: 'STANDARD'}   },   priority: 30
  filter :urgency_low,                :with => {case_urgency: {equal_to: 'LOW'        }},   priority: 40

  filter :type_bug,                :with => {case_type: {equal_to: 'BUG'        }},         priority: 10
  filter :type_question,           :with => {case_type: {equal_to: 'QUESTION'}   },         priority: 20
  filter :type_data,               :with => {case_type: {equal_to: 'DATA'}       },         priority: 30
  filter :type_enhancement,        :with => {case_type: {equal_to: 'ENHANCEMENT'}},         priority: 40

  filter :size_extra_small,          :with => {case_size: {equal_to: 'EXTRA_SMALL'}   },    priority: 10
  filter :size_small,                :with => {case_size: {equal_to: 'SMALL'        }},     priority: 20
  filter :size_medium,               :with => {case_size: {equal_to: 'MEDIUM'}       },     priority: 30
  filter :size_large,                :with => {case_size: {equal_to: 'LARGE'}       },      priority: 30
  filter :size_extra_large,          :with => {case_size: {equal_to: 'EXTRA_LARGE'}},       priority: 40

  filter :state_draft,                :with => {state: {equal_to: 'draft'}},                priority: 20
  filter :state_backlog,              :with => {state: {equal_to: 'backlog'}},              priority: 25
  filter :state_active,               :with => {state: {equal_to: 'active'}},               priority: 30
  filter :state_needs_approval,       :with => {state: {equal_to: 'needs approval'}},       priority: 40
  filter :state_approved_to_activate, :with => {state: {equal_to: 'approved to activate'}}, priority: 50
  filter :state_ready_to_close,       :with => {state: {equal_to: 'ready to close'}},       priority: 60
  filter :state_closed,               :with => {state: {equal_to: 'closed'}},               priority: 70
  # FILTERS (End)


  # INDEXING (Start) ====================================================================
    # string   :billing_state   do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.billing_state) end
  searchable do
    string   :case_id
    string   :project_id
    string   :case_nbr
    string   :case_type
    string   :case_size
    string   :case_urgency
    string   :state do |x| x.state.gsub('_',' ') end
    string   :display
    string   :description
    string   :project_display
    string   :owner_id
    string   :owner_display
    string   :requestor_id
    string   :requestor_display
    string   :reviewer_id
    string   :reviewer_display
    boolean  :is_approved

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
    # after_transition any => any, do: :log_transition
    # CALLBACKS ------------------
    after_transition  [:needs_approval,:ready_to_close] => any, do: :do_approve

    # EVENTS ---------------------
    event :activate do
      transition :backlog  => :draft
      transition [:draft,:approved_to_activate, :closed]  => :active
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
  # STATES (End)

  # EVENTFUL (Start) ====================================================================
  eventful do
    on :create,     :publish => lambda{|m| "PROJECT# #{m.project_number} created"},         :title => 'Technical Report Created'
    on :update,     :publish => lambda{|m| "PROJECT# #{m.project_number} was updated"},     :title => 'Technical Report Updated'
  end
  # EVENTFUL (End)

  # HOOKS (Start) =======================================================================
  hook :before_update, :save_hooks, 10
  hook :before_create, :save_hooks, 20
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  def compute_response_time
    (state_changes.any? ? ( state_changes.minimum('created_at') - audit_created_at ) / 86400 : 0).round(2)
  end

  def compute_resolve_time
    (( closed? && state_changes.any? ) ? ( state_changes.maximum('created_at') - audit_created_at ) / 86400 : 0).round(2)
  end

  def save_hooks
    set_detail
    add_to_team
    state_changes.create(from: state_was, to: state, event: 'state_change')
  end

  def add_to_team
    [self.owner,self.requestor,self.reviewer].each { |u| teams.create( user_id: u.user_id ) unless u.nil? || teams.find_by_user_id(u.user_id) }
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

  def notify
    # Sends an email notification to the requestor and owner of the case
    # Determine target address
    email_addresses = [self.owner,self.requestor,self.reviewer].collect { |u| u.email_address if u }
    email_addresses.reject! { |e| e == Buildit::User.current.email_address } # do not notify user who made the changes
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
    approvals.create(approver_id: approver.user_id, display: approval_comment)
    update_attribute(:is_approved, true) if state == 'needs_approval' || state == 'approved_to_activate'
  end

  def display_as
    display
  end
  # HELPERS (End)

end # class Desk::Case
