class Desk::Feature < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :features
  self.primary_key                = :feature_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  supports_audit
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :feature_id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :feature_id,                          :with => :guid
  default :feature_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"FEATURE_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :project,             :class_name => 'Desk::Project',        :foreign_key => 'project_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================

  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :feature_id
    string   :project_id
    string   :feature_nbr
    string   :feature_type
    string   :state
    string   :display
    string   :description

    text     :feature_nbr_fulltext, :using => :feature_nbr
    text     :feature_type_fulltext, :using => :feature_type
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

end # class Desk::Feature
