class Omni::MarkTransfer < ActiveRecord::Base

# METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :transfer_hd
  self.primary_key                = :id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :id,                          with: :guid
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
  # searchable do
  #   integer   :stock_nbr
  #   string   :size

  #   text     :stock_nbr, using: :stock_nbr
  #   text     :size, using: :size
  # end
  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================
  def self.outlet_hash
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create outlet hash"
    outlet_hash = {}
    self.where("id > #{self.last_transfer_of_2010}").each do |x|
      outlet_hash[x.id] = x.to_outlet_nbr
    end
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create transfer to outlet hash: #{outlet_hash.count.to_s}"
    outlet_hash
  end

  def self.last_transfer_of_2010
    49237
  end

  # HELPERS (End)

end # class Omni::MarkTransfer
