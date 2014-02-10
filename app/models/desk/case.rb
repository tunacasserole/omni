class Desk::Case < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :cases
  self.primary_key                = :case_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  supports_audit
  #supports_revisioning
  supports_fulltext
  #supports_rest
  #supports_direct
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :case_id,                        presence: true
  validates :display,                        presence: true
  # validates :case_type,                      presence: true
  validates :display,                        uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :case_id,                          :with => :guid
  default :case_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"CASE_NBR"
  default :requestor_id,                     :to => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :tasks,                :as => :taskable
  has_many     :approvals,            :as => :approvable
  has_many     :notes,                :as => :notable
  belongs_to   :project,              :class_name => 'Desk::Project',        :foreign_key => 'project_id'
  belongs_to   :requestor,            :class_name => 'Buildit::User',        :foreign_key => 'requestor_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :requestor_display,            :to => 'requestor.display'
  map :project_display,            :to => 'project.display'
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :case_id
    string   :case_nbr
    string   :case_type
    string   :state
    string   :display
    string   :description
    string   :project_display
    string   :requestor_display

    text     :case_nbr_fulltext, :using => :case_nbr
    text     :case_type_fulltext, :using => :case_type
    text     :state_fulltext, :using => :state
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :project_display_fulltext, :using => :project_display
    text     :requestor_display_fulltext, :using => :requestor_display
  end
  # INDEXING (End)

  # ORDERING (Start) ====================================================================
  order_search_by :case_nbr => :desc
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

  # HOOKS (Start) =======================================================================

  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  # HELPERS (End)

end # class Desk::Case
