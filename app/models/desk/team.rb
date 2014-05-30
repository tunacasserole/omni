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
  # HELPERS (End)

end # class Desk::Case
