class Omni::SkuAlias < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sku_aliases
  self.primary_key  = :sku_alias_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  validates    :sku_alias_type,                  lookup: 'SKU_ALIAS_TYPE',             allow_nil: true
  validates    :pack_type,                       lookup: 'PACK_TYPE',                  allow_nil: true
  validates    :sku_alias, uniqueness: { scope: :sku_id, message: "Alias already exists for this SKU." }
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :sku_alias_id,                     override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.sku_alias}"}
  default      :is_primary,                       override: false,        to: false
  default      :pack_size,                        override: false,        to: 0
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

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_display do sku.display if sku end
    string   :sku_alias
    string   :sku_alias_type do |x| Buildit::Lookup::Manager.display_for('SKU_ALIAS_TYPE', x.sku_alias_type) end
    boolean  :is_primary
    string   :pack_type do |x| Buildit::Lookup::Manager.display_for('PACK_TYPE', x.pack_type) end
    integer  :pack_size
    string   :sku_id
    string   :display

    text     :sku_display_fulltext, using: :sku_display
    text     :sku_alias_fulltext, using: :sku_alias
    text     :sku_alias_type_fulltext, using: :sku_alias_type
    text     :pack_type_fulltext, using: :pack_type
    text     :pack_size_fulltext, using: :pack_size
  end
  # INDEXING (End)

  # # CUSTOM INDEXING (Start) ====================================================================
  # searchable do
  #   string   :sku_id
  # end
  # # INDEXING (End)


end # class Omni::SkuAlias

