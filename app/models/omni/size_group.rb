class Omni::SizeGroup < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :size_groups
  self.primary_key  = :size_group_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true,uniqueness: true
  validates    :concatenated_name,               presence: true,uniqueness: true,                         allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :size_group_id,                    override: false,        with: :guid
  default      :size_group_nbr,                   override: false,        with: :sequence,         named: "SIZE_GROUP_NBR"
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
  has_many     :styles,                          class_name: 'Omni::Style',                   foreign_key: 'size_group_id'
  has_many     :size_group_details,              class_name: 'Omni::SizeGroupDetail',         foreign_key: 'size_group_id'
  # ASSOCIATIONS (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :size_group_nbr
    string   :size_group_id
    string   :description
    string   :short_name
    string   :concatenated_name
    boolean  :is_enabled

    text     :display_fulltext, using: :display
    text     :size_group_nbr_fulltext, using: :size_group_nbr
    text     :description_fulltext, using: :description
    text     :short_name_fulltext, using: :short_name
    text     :concatenated_name_fulltext, using: :concatenated_name
    text     :is_enabled_fulltext, using: :is_enabled
  end
  # INDEXING (End)


  def display_as
    self.display
  end
end # class Omni::SizeGroup

