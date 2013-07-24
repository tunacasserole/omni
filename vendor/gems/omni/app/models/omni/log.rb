class Omni::Log < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  ##self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :logs
  self.primary_key                = :log_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :log_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :log_id,                          :with => :guid
  default :log_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"LOG_NBR"    
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
  filter :type_info,             :with => {log_type: {equal_to: 'INFO'}},     :priority => 10
  filter :type_debug,            :with => {log_type: {equal_to: 'DEBUG'}},    :priority => 40
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  order_search_by :log_nbr => :asc
  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :log_id
    string   :logable_id
    string   :logable_type    
	  string	 :log_type    
    string   :log_nbr
  end 
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::Log