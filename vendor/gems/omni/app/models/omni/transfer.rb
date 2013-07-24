class Omni::Transfer < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :transfers
  self.primary_key  = :transfer_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :requesting_location_id,          :presence    => true
  validates    :fulfillment_location_id,         :presence    => true
  validates    :sku_id,                          :presence    => true
  validates    :transfer_reason_id,              :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :transfer_id,                      :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "From: #{m.fulfillment_location_display} - To: #{m.requesting_location_display} - Transfer: #{m.transfer_nbr}"}
  default      :transfer_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"TRANSFER_NBR"
  default      :request_units,                    :override  =>  false,        :to    => 0                  
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
  belongs_to   :requesting_location,             :class_name => 'Omni::Location',                :foreign_key => 'requesting_location_id'
  belongs_to   :fulfillment_location,            :class_name => 'Omni::Location',                :foreign_key => 'fulfillment_location_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :transfer_reason,                 :class_name => 'Omni::TransferReason',          :foreign_key => 'transfer_reason_id'
  belongs_to   :request_user,                    :class_name => 'Buildit::User',                     :foreign_key => 'request_user_id'
  belongs_to   :cancel_user,                     :class_name => 'Buildit::User',                     :foreign_key => 'cancel_user_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_one      :pick_ticket,                     :class_name => 'Omni::PickTicket',              :foreign_key => 'pickable_id',      :as => :pickable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :requesting_location_display,            :to => 'requesting_location.display'
    map :fulfillment_location_display,           :to => 'fulfillment_location.display'
    map :sku_display,                            :to => 'sku.display'
    map :transfer_reason_display,                :to => 'transfer_reason.display'
    map :request_user_display,                   :to => 'request_user.full_name'
    map :cancel_user_display,                    :to => 'cancel_user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  hook :after_create, :build_request_sla, 10
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :state
    string   :transfer_nbr
    string   :requesting_location_display do requesting_location.display if requesting_location end
    string   :fulfillment_location_display do fulfillment_location.display if fulfillment_location end
    string   :sku_display do sku.display if sku end
    string   :transfer_reason_display do transfer_reason.display if transfer_reason end
    date     :request_date
    string   :state
 
    text     :state_fulltext, :using => :state
    text     :transfer_nbr_fulltext, :using => :transfer_nbr
    text     :requesting_location_display_fulltext, :using => :requesting_location_display
    text     :fulfillment_location_display_fulltext, :using => :fulfillment_location_display
    text     :sku_display_fulltext, :using => :sku_display
    text     :transfer_reason_display_fulltext, :using => :transfer_reason_display
  end 
  # INDEXING (End)











  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :after_approve
    after_transition :on => :ship, :do => :after_ship
    after_transition :on => :receive, :do => :after_receive
    after_transition :on => :cancel, :do => :after_cancel
    after_transition :on => :cancel, :do => :after_cancel

  ### EVENTS ###
    event :approve do
      transition :new => :pending
    end
    event :ship do
      transition :pending => :shipped
    end
    event :receive do
      transition :shipped => :complete
    end
    event :cancel do
      transition :new => :cancelled
      transition :pending => :cancelled
    end
  end
  # STATES (End)

end # class Omni::Transfer

