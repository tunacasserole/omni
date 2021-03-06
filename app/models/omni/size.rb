class Omni::Size < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :sizes
  self.primary_key  = :size_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :size_id,                         presence: true, uniqueness: true
  validates    :size_nbr,                        presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  validates    :concatenated_name,               presence: true
  validates    :size_type,                       lookup: 'SIZE_TYPE',                  allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :size_id,                          override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.dimension_1}#{m.dimension_2} - #{m.size_nbr}"}
  default      :size_nbr,                         override: false,        with: :sequence,         named: "SIZE_NBR"
  default      :is_enabled,                       override: false,        to: false
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
  has_many     :style_color_sizes,               class_name: 'Omni::StyleColorSize',          foreign_key: 'size_id'
  has_many     :skus,                            class_name: 'Omni::Sku',                     foreign_key: 'size_id'
  has_many     :size_group_details,              class_name: 'Omni::SizeGroupDetail',         foreign_key: 'size_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :size_id
    string   :size_nbr
    string   :size_type do |x| Buildit::Lookup::Manager.display_for('SIZE_TYPE', x.size_type) end
    string   :short_name
    string   :concatenated_name
    string   :dimension_1
    string   :dimension_2
    string   :display
    boolean  :is_enabled

    text     :size_nbr_fulltext, using: :size_nbr
    text     :size_type_fulltext, using: :size_type
    text     :short_name_fulltext, using: :short_name
    text     :concatenated_name_fulltext, using: :concatenated_name
    text     :dimension_1_fulltext, using: :dimension_1
    text     :dimension_2_fulltext, using: :dimension_2
  end

  def display_as
    self.display
  end
end # class Omni::Size

