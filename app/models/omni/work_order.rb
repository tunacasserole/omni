class Omni::WorkOrder < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :work_orders
  self.primary_key  = :work_order_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :production_location_id,          :presence    => true
  validates    :work_order_type,                 :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :work_order_id,                    :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "Work Order: #{m.work_order_nbr}"}
  default      :work_order_nbr,                   :override  =>  false,        :with  => :sequence,         :named=>"WORK_ORDER_NBR"
  default      :request_units,                    :override  =>  false,        :to    => 0                  
  default      :complete_units,                   :override  =>  false,        :to    => 0                  
  default      :weight,                           :override  =>  false,        :to    => 0                  
  default      :height,                           :override  =>  false,        :to    => 0                  
  default      :bust,                             :override  =>  false,        :to    => 0                  
  default      :waist,                            :override  =>  false,        :to    => 0                  
  default      :high_hip,                         :override  =>  false,        :to    => 0                  
  default      :hip,                              :override  =>  false,        :to    => 0                  
  default      :across_shoulder_front,            :override  =>  false,        :to    => 0                  
  default      :across_shoulder_back,             :override  =>  false,        :to    => 0                  
  default      :shoulder_length,                  :override  =>  false,        :to    => 0                  
  default      :back_length,                      :override  =>  false,        :to    => 0                  
  default      :hps_to_waist,                     :override  =>  false,        :to    => 0                  
  default      :neck_circumference,               :override  =>  false,        :to    => 0                  
  default      :arm_circumference,                :override  =>  false,        :to    => 0                  
  default      :wrist_circumference,              :override  =>  false,        :to    => 0                  
  default      :inseam,                           :override  =>  false,        :to    => 0                  
  default      :outseam,                          :override  =>  false,        :to    => 0                  
  default      :thigh,                            :override  =>  false,        :to    => 0                  
  default      :arm_length,                       :override  =>  false,        :to    => 0                  
  default      :total_rise,                       :override  =>  false,        :to    => 0                  
  default      :head_circumference,               :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :production_location,             :class_name => 'Omni::Location',                :foreign_key => 'production_location_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  has_many     :stock_ledger_activities,         :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'stockable_id',     :as => :stockable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :production_location_display,            :to => 'production_location.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :sku_display,                            :to => 'sku.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :state
    string   :work_order_nbr
    string   :workable_id
    string   :workable_type
    string   :production_location_display do production_location.display if production_location end
    string   :supplier_display do supplier.display if supplier end
    string   :work_order_type
    string   :sku_display do sku.display if sku end
    string   :workable_id
    string   :workable_type
    string   :state
 
    text     :state_fulltext, :using => :state
    text     :work_order_nbr_fulltext, :using => :work_order_nbr
    text     :workable_id_fulltext, :using => :workable_id
    text     :workable_type_fulltext, :using => :workable_type
    text     :production_location_display_fulltext, :using => :production_location_display
    text     :supplier_display_fulltext, :using => :supplier_display
    text     :work_order_type_fulltext, :using => :work_order_type
    text     :sku_display_fulltext, :using => :sku_display
  end 
  # INDEXING (End)






  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :cancel, :do => :after_cancel
    after_transition :on => :complete, :do => :after_complete
    after_transition :on => :start, :do => :after_start
    after_transition :on => :release, :do => :after_release

  ### EVENTS ###
    event :cancel do
      transition :new => :cancelled
      transition :pending => :cancelled
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
      transition :new => :pending
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

  
  # cancel => new to cancelled
  def after_cancel

  end # def after_cancel

  
  # release => new to pending
  def after_release

  end # def after_release

  # STATE HANDLERS (End)
end # class Omni::WorkOrder

