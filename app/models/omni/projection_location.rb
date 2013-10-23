class Omni::ProjectionLocation < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  # ##self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :projection_locations
  self.primary_key                = :projection_location_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :display,                                       :uniqueness  => true
  validates :projection_id,                                 :presence  => true
  validates :location_id,                                   :presence  => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :projection_location_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :projection,                      :class_name => 'Omni::Projection',              :foreign_key => 'projection_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :projection_display,                     :to => 'projection.display'
    map :location_display,                       :to => 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  
  # COMPUTED ATTRIBUTES (Start) =========================================================
  
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================
  
  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc  
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
# Exact match attributes
    string   :projection_id
    string   :location_id
    string   :state
  # Partial match (contains) attributes
    text     :projection_display_fulltext, :using => :projection_display
    text     :location_display_fulltext,   :using => :location_display
    text     :display_fulltext,            :using => :display
    text     :state_fulltext,              :using => :state
  end 
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, :initial => :planning do

  ### STATES ###
    state :planning do
    end
    state :approved do
    end

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :process_approve  

  ### EVENTS ###
    event :approve do
      transition :planning => :approved      
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def process_approve
    self.approval_date = Date.today
    self.save
  end  
  # STATE HANDLERS (End) ====================================================================


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::ProjectionLocation