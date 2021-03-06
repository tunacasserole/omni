class Omni::SkuAlias < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sku_aliases
  self.primary_key  = :sku_alias_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :sku_alias,                       presence: true#, uniqueness: { scope: :sku_id, message: "Alias already exists for this SKU." }
  validates    :sku_id,                          presence: true
  validates    :alias_source,                    lookup: 'ALIAS_SOURCE',               allow_nil: true
  validates    :sku_alias_type,                  lookup: 'SKU_ALIAS_TYPE',             allow_nil: true
  validates    :pack_type,                       lookup: 'PACK_TYPE',                  allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_alias_id,                     override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.sku_alias} - #{m.alias_source}"}
  default      :pack_size,                        override: false,        to: 0
  default      :is_primary,                       override: false,        to: false
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :sku,                             class_name: 'Omni::Sku',    foreign_key: 'sku_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            to: 'sku.display'
    # map :stock_nbr, to: 'self.sku_alias'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_alias_id
    string   :sku_id
    string   :sku_alias
    string   :alias_source
    string   :sku_display

    text     :sku_display_fulltext, using: :sku_display
    text     :sku_alias_fulltext, using: :sku_alias

    # string   :sku_alias_id
    # string   :sku_display do sku.display if sku end
    # string   :sku_alias
    # string   :sku_alias_type do |x| Buildit::Lookup::Manager.display_for('SKU_ALIAS_TYPE', x.sku_alias_type) end
    # boolean  :is_primary
    # string   :pack_type do |x| Buildit::Lookup::Manager.display_for('PACK_TYPE', x.pack_type) end
    # # integer  :pack_size

    # text     :sku_alias_type_fulltext, using: :sku_alias_type
  end
  order_search_by :sku_alias => :asc
  # INDEXING (End) ====================================================================


  # # CUSTOM INDEXING (Start) ====================================================================
  # searchable do
  #   string   :sku_id
  # end
  # # INDEXING (End)

  def self.to_hash(source)
    # puts "source is #{source}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create sku alias hash"
    to_hash = {}
    ActiveRecord::Base.connection.execute("select sku_id, sku_alias from sku_aliases where alias_source = '#{source}'").each {|x| to_hash[x[1]] = x[0]} # MRI
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: END....create sku alias hash: #{to_hash.count.to_s}"
    return to_hash
  end


  def display_as
    self.display
  end
end # class Omni::SkuAlias

