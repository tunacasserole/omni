class Desk::Project < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :projects
  self.primary_key                = :project_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  supports_audit
  supports_global_search
  # BEHAVIOR (End)

    # VALIDATIONS (Start) =================================================================
  validates :project_id,                     presence: true, uniqueness: true
  validates :display,                        presence: true, uniqueness: true
  validates :owner_id,                       presence: true
  validates :reviewer_id,                    presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :project_id,                          with: :guid
  default :project_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"PROJECT_NBR"
  default :owner_id,                            to: lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  default :reviewer_id,                         to: lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  default :is_private,                          to: true
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :owner,                            class_name: 'Buildit::User',        foreign_key: 'owner_id'
  belongs_to   :reviewer,                         class_name: 'Buildit::User',        foreign_key: 'reviewer_id'
  has_many     :cases,                            class_name: 'Desk::Case',           foreign_key: 'project_id'
  has_many     :teams,                            as: :teamable
  has_many     :guides,                           as: :guideable
  has_many     :tasks,                            as: :taskable
  has_many     :approvals,                        as: :approvable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :owner_display,            to: 'owner.full_name'
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :backlog_count,               to: lambda {|m| m.cases.where(state: 'backlog').count }
    compute :draft_count,                 to: lambda {|m| m.cases.where(state: 'draft').count }
    compute :needs_approval_count,        to: lambda {|m| m.cases.where(state: 'needs_approval').count }
    compute :approved_to_activate_count,  to: lambda {|m| m.cases.where(state: 'approved_to_activate').count }
    compute :active_count,                to: lambda {|m| m.cases.where(state: 'active').count }
    compute :ready_to_close_count,        to: lambda {|m| m.cases.where(state: 'ready_to_close').count }
    compute :closed_count,                to: lambda {|m| m.cases.where(state: 'closed').count }
    compute :open_count,                  to: lambda {|m| m.cases.where(state: ['draft','active','needs_approval','active','ready_to_close','approved_to_activate']).count }
    # compute :weekly_open_count,           with: :compute_weekly_open_count
    # compute :backlog_time,                with: :compute_backlog_time
    # compute :response_time,               with: :compute_response_time
    # compute :resolve_time,                with: :compute_resolve_time
  end
  # COMPUTED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :project_id
    string   :project_nbr
    string   :owner_id
    string   :project_type
    string   :state
    string   :display
    string   :description

    text     :team_members do
      teams.map { |x| x.user_id }
    end

    text     :project_nbr_fulltext, using: :project_nbr
    text     :project_type_fulltext, using: :project_type
    text     :state_fulltext, using: :state
    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
  end
  order_search_by :project_nbr => :desc
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

    # CALLBACKS ------------------
    # after_transition   :draft  => :active,  :do => :notify
    # after_transition   :active => :closed,  :do => :notify

    # EVENTS ---------------------
    event :activate do
      transition :draft                                 => :active
    end

    event :close do
      transition :active                                => :closed
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
  end
  # STATES (End)


  # HOOKS (Start) =======================================================================
  hook :before_update, :save_hooks, 10
  hook :after_create, :save_hooks, 20
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  def save_hooks
    add_to_team
  end

  def add_to_team
    [self.owner,self.reviewer].each { |u| teams.create( user_id: u.user_id ) unless teams.find_by_user_id(u.user_id) }
  end

  # HELPERS (Start) =====================================================================
    def self.omni_project
      Desk::Project.find_by_project_nbr '1'
      # || Desk::Project.create! ( project_id: "054D5954D9FA11E3A45D20C9D047DD15", project_nbr: "1001", project_type: nil, owner_id: "811166D4D50A11E2B45820C9D04AARON", state: "draft", display: "Omni System", description: "Defects, enhancements, requests, and questions related to Omni.", target_date: "2014-09-30 00:00:00" )
    end
    def display_as
      self.display
    end
  # HELPERS (End)

end # class Desk::Project
