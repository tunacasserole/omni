class Omni::Order < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :orders
  self.primary_key  = :order_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :location_id,                     :presence    => true
  validates    :customer_id,                     :presence    => true
  validates    :order_date,                      :presence    => true
  validates    :order_source,                    :presence    => true
  validates    :customer_order_nbr,              :uniqueness  => true,                         :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :order_id,                         :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.customer_order_nbr} - #{m.order_date} - #{m.location_display}"}
  default      :customer_order_nbr,               :override  =>  false,        :with  => :sequence,         :named=>"CUSTOMER_ORDER_NBR"
  default      :is_tax_exempt_date,               :override  =>  false,        :to    => false              
  default      :is_tax_exempt_customer,           :override  =>  false,        :to    => false              
  default      :is_trade_discount_order,          :override  =>  false,        :to    => false              
  default      :order_total,                      :override  =>  false,        :to    => 0                  
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
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :terminal,                        :class_name => 'Omni::Terminal',                :foreign_key => 'terminal_id'
  belongs_to   :customer,                        :class_name => 'Omni::Customer',                :foreign_key => 'customer_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',                     :foreign_key => 'user_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :terminal_display,                       :to => 'terminal.display'
    map :customer_display,                       :to => 'customer.display'
    map :user_display,                           :to => 'user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  hook :before_update, :set_order_date, 10
  hook :before_update, :set_order_state, 20
  hook :before_update, :set_payment_state, 30
  hook :before_update, :set_order_detail_state, 40
  hook :before_validation, :check_update_allowed, 10
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :location_display do location.display if location end
    string   :terminal_display do terminal.display if terminal end
    string   :customer_order_nbr
    string   :customer_display do customer.display if customer end
    date     :order_start_date
    date     :order_date
    string   :user_display do user.full_name if user end
    string   :order_source
    string   :state
 
    text     :location_display_fulltext, :using => :location_display
    text     :terminal_display_fulltext, :using => :terminal_display
    text     :customer_order_nbr_fulltext, :using => :customer_order_nbr
    text     :customer_display_fulltext, :using => :customer_display
    text     :user_display_fulltext, :using => :user_display
    text     :order_source_fulltext, :using => :order_source
  end 
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :finalize, :do => :after_finalize
    after_transition :on => :abandon, :do => :after_abandon

  ### EVENTS ###
    event :finalize do
      transition :new => :final
    end
    event :abandon do
      transition :new => :abandoned
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  
  # finalize => new to final
  def after_finalize

  end # def after_finalize

  
  # abandon => new to abandoned
  def after_abandon

  end # def after_abandon

  # STATE HANDLERS (End)

end # class Omni::Order

