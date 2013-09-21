class Omni::Adjustment < ActiveRecord::Base

  # MIXINS (Start) ======================================================================
  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #establish_connection    Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name       = :adjustments
  self.primary_key      = :adjustment_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :adjustment_nbr,                  :presence    => true
  validates    :location_id,                     :presence    => true
  validates    :sku_id,                          :presence    => true
  validates    :adjustment_reason_id,            :presence    => true
  validates    :adjustment_nbr,                  :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :adjustment_id,                    :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.location_display} - #{m.sku_display} - #{m.request_date}"}
  default      :adjustment_nbr,                   :override  =>  false,        :with  => :sequence,         :named=>"ADJUSTMENT_NBR"
  default      :adjustment_units,                 :override  =>  false,        :to    => 0                  
  default      :adjustment_cost,                  :override  =>  false,        :to    => 0                  
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
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :bin,                             :class_name => 'Omni::Bin',                     :foreign_key => 'bin_id'
  belongs_to   :request_user,                    :class_name => 'Buildit::User',                     :foreign_key => 'request_user_id'
  belongs_to   :post_user,                       :class_name => 'Buildit::User',                     :foreign_key => 'post_user_id'
  belongs_to   :cancel_user,                     :class_name => 'Buildit::User',                     :foreign_key => 'cancel_user_id'
  belongs_to   :adjustment_reason,               :class_name => 'Omni::AdjustmentReason',        :foreign_key => 'adjustment_reason_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :sku_display,                            :to => 'sku.display'
    map :bin_display,                            :to => 'bin.display'
    map :request_user_display,                   :to => 'request_user.full_name'
    map :post_user_display,                      :to => 'post_user.full_name'
    map :cancel_user_display,                    :to => 'cancel_user.full_name'
    map :adjustment_reason_display,              :to => 'adjustment_reason.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  hook :before_update, :build_sla, 10
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :adjustment_nbr
    string   :state
    string   :location_display do location.display if location end
    string   :sku_display do sku.display if sku end
    date     :request_date
    string   :request_user_display do request_user.full_name if request_user end
    date     :post_date
    string   :post_user_display do post_user.full_name if post_user end
    string   :adjustment_reason_display do adjustment_reason.display if adjustment_reason end
    string   :state
 
    text     :adjustment_nbr_fulltext, :using => :adjustment_nbr
    text     :state_fulltext, :using => :state
    text     :location_display_fulltext, :using => :location_display
    text     :sku_display_fulltext, :using => :sku_display
    text     :request_user_display_fulltext, :using => :request_user_display
    text     :post_user_display_fulltext, :using => :post_user_display
    text     :adjustment_reason_display_fulltext, :using => :adjustment_reason_display
  end 
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :new do

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :after_approve
    after_transition :on => :cancel, :do => :after_cancel

  ### EVENTS ###
    event :approve do
      transition :new => :complete
    end
    event :cancel do
      transition :new => :cancelled
    end
  end
  # STATES (End)

 # STATE HANDLERS (Start) ====================================================================
    
  # approve => new to complete
  def after_approve

  end # def after_approve

  
  # cancel => new to cancelled
  def after_cancel

  end # def after_cancel

  # STATE HANDLERS (End)



end # class Omni::Adjustment

