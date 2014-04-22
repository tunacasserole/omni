class Omni::AllocationProfile < ActiveRecord::Base

# METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :allocation_profiles
  self.primary_key                = :allocation_profile_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :allocation_profile_id,          presence: true, uniqueness: true
  validates :display,                        presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :allocation_profile_id,                          with: :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================

  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================

  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================

  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================

  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    text   :display, using: :display
  end
  order_search_by :display => :asc
  # INDEXING (End) ====================================================================


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================
  def self.default_profile
    Omni::AllocationProfile.find_by_allocation_profile_id('8A0B7946BF8311E3BF5320C9D047DD15').allocation_profile_id
  end
  # HELPERS (End)

end # class Omni::AllocationProfile
