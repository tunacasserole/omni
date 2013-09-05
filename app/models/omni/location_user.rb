class Omni::LocationUser < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :location_users
  self.primary_key  = :location_user_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness  => true
  validates    :user_id,                         :presence    => true
  validates    :location_id,                     :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :location_user_id,                 :override  =>  false,       :with  => :guid              
  default      :display,                          :override  =>  false,       :to    => lambda{|m| "#{m.user_display} - #{m.location_display}"}
  default      :is_manager,                       :override  =>  true,        :to    => false              
  default      :is_cashier,                       :override  =>  true,        :to    => false              
  default      :is_sales,                         :override  =>  true,        :to    => false              
  default      :is_back_office,                   :override  =>  true,        :to    => false              
  default      :is_destroyed,                     :override  =>  true,        :to    => false              
  default      :is_purchase_approver_1,           :override  =>  true,        :to    => false              
  default      :is_purchase_approver_2,           :override  =>  true,        :to    => false              
  default      :is_purchase_approver_3,           :override  =>  true,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :user,                       :class_name => 'Buildit::User',            :foreign_key => 'user_id'
  belongs_to   :location,                   :class_name => 'Omni::Location',           :foreign_key => 'location_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :user_display,                           :to => 'user.full_name'
    map :location_display,                       :to => 'location.display'
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
    # Exact match attributes
    string  :location_user_id
    string  :location_id
    string  :user_id
    string  :display
    string  :location_display
    string  :user_display

    # Partial match (contains) attributes
    text    :display_fulltext,            :using => :display
    text    :location_fulltext,           :using => :location_display
    text    :user_fulltext,               :using => :user_display
 
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::LocationUser
