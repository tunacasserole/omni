class Omni::Job < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :jobs
  self.primary_key  = :job_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  validates    :job_nbr,                  presence: true, uniqueness: true
  validates    :job_id,                   presence: true
  validates    :jobable_id,               presence: true
  validates    :jobable_type,             presence: true
  validates    :job_type,                 presence: true
  validates    :production_location_id,   presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :job_id,                           override: false,        with: :guid
  default      :job_nbr,                          override: false,        with: :sequence,         named: "JOB_NBR"
  default      :display,                          override: false,        to: lambda{|m| "job: #{m.job_nbr}"}
  default      :request_units,                    override: false,        to: 0
  default      :complete_units,                   override: false,        to: 0
  default      :weight,                           override: false,        to: 0
  default      :height,                           override: false,        to: 0
  default      :bust,                             override: false,        to: 0
  default      :waist,                            override: false,        to: 0
  default      :high_hip,                         override: false,        to: 0
  default      :hip,                              override: false,        to: 0
  default      :across_shoulder_front,            override: false,        to: 0
  default      :across_shoulder_back,             override: false,        to: 0
  default      :shoulder_length,                  override: false,        to: 0
  default      :back_length,                      override: false,        to: 0
  default      :hps_to_waist,                     override: false,        to: 0
  default      :neck_circumference,               override: false,        to: 0
  default      :arm_circumference,                override: false,        to: 0
  default      :wrist_circumference,              override: false,        to: 0
  default      :inseam,                           override: false,        to: 0
  default      :outseam,                          override: false,        to: 0
  default      :thigh,                            override: false,        to: 0
  default      :arm_length,                       override: false,        to: 0
  default      :total_rise,                       override: false,        to: 0
  default      :head_circumference,               override: false,        to: 0
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :jobable,       :polymorphic => true
  belongs_to   :production_location,             class_name: 'Omni::Location',                foreign_key: 'production_location_id'
  belongs_to   :supplier,                        class_name: 'Omni::Supplier',                foreign_key: 'supplier_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  has_many     :stock_ledger_activities,         class_name: 'Omni::StockLedgerActivity',     foreign_key: 'stockable_id', as: :stockable
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',  as: :notable
  has_many     :picks,                           class_name: 'Omni::Pick',                    foreign_key: 'pickable_id', as: :pickable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :production_location_display,            to: 'production_location.display'
    map :supplier_display,                       to: 'supplier.display'
    map :sku_display,                            to: 'sku.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook  :before_create,     :set_request_units,             10
  hook  :after_create,      :update_pick,             20

  def  set_request_units
    if jobable_type == "Omni::OrderDetail"
      parent = Omni::OrderDetail.where(order_detail_id: self.jobable_id).first
      self.request_units = parent.order_units if parent
    end
  end

  def update_pick
    if jobable_type == "Omni::OrderDetail"
      parent = Omni::OrderDetail.where(order_detail_id: self.jobable_id).first
      pick = parent.picks.first if parent
      if parent and pick
        pick.job_id = self.job_id
        pick.save
      end
    end
  end

  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :jobable_id
    string   :jobable_type
    string   :state
    string   :job_nbr
    string   :job_type
    string   :production_location_display do production_location.display if production_location end
    string   :supplier_display do supplier.display if supplier end
    string   :sku_display do sku.display if sku end

    text     :state_fulltext, using: :state
    text     :job_nbr_fulltext, using: :job_nbr
    text     :jobable_id_fulltext, using: :jobable_id
    text     :jobable_type_fulltext, using: :jobable_type
    text     :production_location_display_fulltext, using: :production_location_display
    text     :supplier_display_fulltext, using: :supplier_display
    text     :job_type_fulltext, using: :job_type
    text     :sku_display_fulltext, using: :sku_display
  end

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :cancel, do: :after_cancel
    after_transition on: :complete, do: :after_complete
    after_transition on: :start, do: :after_start
    after_transition on: :release, do: :after_release

  ### EVENTS ###
    event :cancel do
      transition [:draft,:pending] => :cancelled
    end
    event :complete do
      transition :open => :complete
    end
    event :release do
    end
    event :start do
      transition :pending => :open
    end
    event :release do
      transition draft: :pending
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # start => pending to open
  def after_start

  end # def after_start


  # complete => open to complete
  def after_complete

  end # def after_complete


  # cancel => draft to cancelled
  def after_cancel
    # puts "\n cancelling job\n"
    self.is_cancelled = true
  end # def after_cancel


  # release => draft to pending
  def after_release
    self.release_date = Date.today
    if ['CONVERSION (HEAT APPLY)','CONVERSION (SEWN)','ALTERATION','SPECIAL CUT'].include? self.job_type
    # add picks for components if conversion or custom site
    end
  end # def after_release

  # STATE HANDLERS (End)
end # class Omni::Job

