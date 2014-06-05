class Desk::Team < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :teams
  self.primary_key                = :team_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :team_id,                        presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :team_id,                     with: :guid
  default :user_id,                     to: lambda{ |m| Buildit::User.current.user_id if Buildit::User.current}
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  # belongs_to      :teamable,       :polymorphic => true
  belongs_to      :user,            class_name: 'Buildit::User',           foreign_key: 'user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :user_display,            to: 'user.full_name'
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :backlog_count,               to: lambda {|m| m.cases_team.select { |c| c.state == 'backlog' }.count }
    compute :draft_count,                 to: lambda {|m| m.cases_team.select { |c| c.state == 'draft' }.count }
    compute :needs_approval_count,        to: lambda {|m| m.cases_team.select { |c| c.state == 'needs_approval' }.count }
    compute :approved_to_activate_count,  to: lambda {|m| m.cases_team.select { |c| c.state == 'approved_to_activate' }.count }
    compute :active_count,                to: lambda {|m| m.cases_team.select { |c| c.state == 'active' }.count }
    compute :ready_to_close_count,        to: lambda {|m| m.cases_team.select { |c| c.state == 'ready_to_close' }.count }
    compute :closed_count,                to: lambda {|m| m.cases_team.select { |c| c.state == 'closed' }.count }
    # compute :open_count,                 to: lambda {|m| m.cases.where(state: ['draft','active','needs_approval','active','ready_to_close','approved_to_activate']).count }
    # compute :weekly_open_count,           with: :compute_weekly_open_count
    # compute :backlog_time,                with: :compute_backlog_time
    # compute :response_time,               with: :compute_response_time
    # compute :resolve_time,                with: :compute_resolve_time
  end
  # COMPUTED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :user_display
    string   :teamable_id
    string   :teamable_type
  #   string   :team_nbr
  #   string   :team_type
  #   string   :state
  #   string   :display
  #   string   :description
  #   string   :project_display

  #   text     :team_nbr_fulltext, using: :team_nbr
  #   text     :team_type_fulltext, using: :team_type
  #   text     :state_fulltext, using: :state
  #   text     :display_fulltext, using: :display
  #   text     :description_fulltext, using: :description
  #   text     :project_display_fulltext, using: :project_display
  #   text     :requestor_display_fulltext, using: :requestor_display
  end
  order_search_by :user_display => :asc

  # # STATES (Start) ====================================================================
  # state_machine :state, :initial => :draft do

  #   # CALLBACKS ------------------
  #   after_transition   :draft  => :active,  :do => :notify
  #   after_transition   :active => :closed,  :do => :notify

  #   # EVENTS ---------------------
  #   event :activate do
  #     transition :draft                                 => :active
  #   end

  #   event :close do
  #     transition :active                                => :closed
  #   end


  #   # STATES ---------------------
  #   state :draft do
  #   end

  #   state :active do
  #     # validates  :product_codes,                           :presence => true
  #     # validate   :one_active_contract
  #   end

  #   state :closed do

  #   end

  #   # STATE HELPERS ---------------------
  #   def notify
  #     puts 'notify someone'
  #   end
  # end
  # STATES (End)

  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  def cases_owner
    Desk::Case.where(owner_id: self.user_id)
  end

  def cases_requestor
    Desk::Case.where(requestor_id: self.user_id)
  end

  def cases_reviewer
    Desk::Case.where(reviewer_id: self.user_id)
  end

  def cases_team
    cases = []
    cases_owner.each { |x| cases << x }
    cases_requestor.each { |x| cases << x }
    cases_reviewer.each { |x| cases << x }
    cases.uniq
  end
  # HELPERS (End)

end # class Desk::Case
