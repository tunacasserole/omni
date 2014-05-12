class Desk::Checklist < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :checklists
  self.primary_key                = :checklist_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :checklist_id,                        :presence      => true
  validates :display,                             :presence      => true
  validates :display,                             :uniqueness      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :checklist_id,                          :with => :guid
  default :checklist_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"CHECKLIST_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :tasks,                            :as => :taskable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================

  # MAPPED ATTRIBUTES (End)
  # INDEXING (Start) ====================================================================
  searchable do
    string   :checklist_id
    string   :checklist_nbr
    string   :checklist_type
    string   :state
    string   :display
    string   :description

    text     :checklist_nbr_fulltext, :using => :checklist_nbr
    text     :checklist_type_fulltext, :using => :checklist_type
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

end # class Desk::Checklist
