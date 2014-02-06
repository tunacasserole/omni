class Desk::Case < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :cases
  self.primary_key                = :case_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  supports_audit
  #supports_revisioning
  supports_fulltext
  #supports_rest
  #supports_direct
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :case_id,                        presence: true
  validates :summary,                        presence: true
  validates :case_type,                      presence: true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :case_id,                          :with => :guid
  default :case_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"CASE_NBR"
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  # has_many     :notes,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
  # has_many     :attachments,                           :class_name => 'Buildit::Note',                 :foreign_key => 'notable_id',       :as => :notable
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
  order_search_by :case_nbr => :desc
  # ORDERING (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :case_id
    string   :case_nbr
    string   :case_type
    string   :summary
    string   :description

    text     :case_nbr_fulltext, :using => :case_nbr
    text     :case_type_fulltext, :using => :case_type
    text     :summary_fulltext, :using => :summary
    text     :description_fulltext, :using => :description
  end
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================
  def compute_display_as
    self.summary
  end
  # HELPERS (End)

end # class Desk::Case
