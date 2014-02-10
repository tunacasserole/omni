class Desk::Project < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :projects
  self.primary_key                = :project_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  supports_audit
  # BEHAVIOR (End)

    # VALIDATIONS (Start) =================================================================
  validates :project_id,                     presence: true
  validates :display,                        presence: true
  validates :display,                        uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :project_id,                          :with => :guid
  default :project_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"PROJECT_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :cases,                            :class_name => 'Desk::Case',                     :foreign_key => 'project_id'
  has_many     :features,                         :class_name => 'Desk::Feature',                  :foreign_key => 'project_id'
  has_many     :tasks,                            :as => :taskable
  has_many     :approvals,                        :as => :approvable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================

  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :project_id
    string   :project_nbr
    string   :project_type
    string   :state
    string   :display
    string   :description

    text     :project_nbr_fulltext, :using => :project_nbr
    text     :project_type_fulltext, :using => :project_type
    text     :state_fulltext, :using => :state
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
  end
  # INDEXING (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

    # CALLBACKS ------------------
    after_transition   :draft  => :active,  :do => :notify
    after_transition   :active => :closed,  :do => :notify

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
    def notify
      puts 'notify someone'
    end
  end
  # STATES (End)

  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Desk::Project
