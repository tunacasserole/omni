class Omni::MarkOutlet < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :outlets
  self.primary_key                = :outlet_nbr
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :outlet_nbr,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :outlet_nbr,                          :with => :guid
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
  
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================
  # def self.load_locations
  #   Omni::Outlet.all.each do |outlet|
  #   location = Omni::Location.where(:location_nbr => outlet.outlet_nbr).first
  #   if location
  #     outlet.location_id = location.location_id
  #     outlet.save
  #   else
  #     puts "no location found for outlet #{outlet.display}"
  #   end
  # end
  # HELPERS (End)

end # class Omni::Outlet