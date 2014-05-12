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
  validates :case_type,                      lookup: 'CASE_TYPE',       allow_nil: true
  validates :case_size,                      lookup: 'CASE_SIZE',       allow_nil: true

  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :case_id,                          :with => :guid
  default :case_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"CASE_NBR"
  default :project_id,                       :to => lambda{ |m| Desk::Project.omni_project.project_id }
  default :requestor_id,                     :to => lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  default :owner_id,                         :to => lambda{ |m| m.project.owner_id if m.project }
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :tasks,                :as => :taskable
  has_many     :approvals,            :as => :approvable
  has_many     :notes,                :as => :notable
  has_many     :teams,                :as => :teamable
  belongs_to   :project,              :class_name => 'Desk::Project',        :foreign_key => 'project_id'
  belongs_to   :requestor,            :class_name => 'Buildit::User',        :foreign_key => 'requestor_id'
  belongs_to   :owner,                :class_name => 'Buildit::User',        :foreign_key => 'owner_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :requestor_display,            :to => 'requestor.full_name'
  map :owner_display,            :to => 'owner.full_name'
  map :project_display,            :to => 'project.display'
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :case_id
    string   :project_id
    string   :case_nbr
    string   :case_type
    string   :state
    string   :display
    string   :description
    string   :project_display
    string   :requestor_display
    string   :owner_display

    text     :case_nbr_fulltext, :using => :case_nbr
    text     :case_type_fulltext, :using => :case_type
    text     :state_fulltext, :using => :state
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :project_display_fulltext, :using => :project_display
    text     :requestor_display_fulltext, :using => :requestor_display
    text     :owner_display_fulltext, :using => :owner_display
  end
  # INDEXING (End)

  # ORDERING (Start) ====================================================================
  order_search_by :case_nbr => :desc
  # ORDERING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

    # CALLBACKS ------------------
    after_transition  any => any, :do => :notify

    # EVENTS ---------------------
    event :activate do
      transition [:draft,:review]  => :active
    end

    event :review do
      transition :active => :review
    end

    event :reject do
      transition [:review, :closed] => :active
    end

    event :close do
      transition [:active,:review]  => :closed
    end


    # STATES ---------------------
    state :draft do
    end

    state :active do
    end

    state :review do
    end

    state :reject do
    end

    state :closed do

    end
  end

    # STATE HELPERS ---------------------
  def set_detail
    if self.case_type_changed?
      self.case_detail =
        case self.case_type
        when 'BUG'
          'steps to reproduce: ....    expected results: ....      actual results: ....  '
        when 'ENHANCEMENT'
          '... please list as much detail about the enhancement as possible ...'
        when 'QUESTION'
          '... please give as much detail about your question as possible ...'
        when 'DATA'
          '... expected data: ...      actual data: ....'
        end
    end
  end
  # STATES (End)

  # HOOKS (Start) =======================================================================
  hook :before_update, :set_detail, 10
  hook :before_create, :set_detail, 20
  hook :before_create, :notify, 30
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  # Sends an email notification to the requestor and owner of the case
  def notify
    # Determine target address
    email_addresses = [self.owner,self.requestor].collect { |u| u.email_address  }
    email_addresses.reject! { |e| e == Buildit::User.current.email_address } # do not notify user who made the changes

    if email_addresses.count > 0
      message = Buildit::Comm::Email::Message.create(
          subject: "OMNI notice: CASE #: #{case_nbr} has activity",
          body: Buildit::Email::Manager.generate(self, "case_notice"),
      )

      message.send_to email_addresses
      message.queue

      # Buildit::Comm::Email::OutboundService.process
    end
  end # def notify


  # HELPERS (End)

end # class Desk::Case
