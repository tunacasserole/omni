class Desk::Checklist < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :checklists
  self.primary_key                = :checklist_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :checklist_id,                        :presence      => true
  validates :display,                             :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :checklist_id,                          :with => :guid
  default :checklist_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"CHECKLIST_NBR"
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
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

end # class Desk::Checklist
