class Desk::Feature < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :features
  self.primary_key                = :feature_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
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

  # ORDERING (Start) ====================================================================
  order_search_by :feature_nbr => :desc
  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================

  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Desk::Feature