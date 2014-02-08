class Desk::Project < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :projects
  self.primary_key                = :project_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :project_id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :project_id,                          :with => :guid
  default :project_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"PROJECT_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :cases,                            :class_name => 'Desk::Case',                     :foreign_key => 'project_id'
  has_many     :features,                         :class_name => 'Desk::Feature',                  :foreign_key => 'project_id'
  has_many     :tasks,                            :as => :taskable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================

  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # INDEXING (Start) ====================================================================

  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Desk::Project
