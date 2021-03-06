class Omni::SizeGroupDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :size_group_details
  self.primary_key  = :size_group_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         uniqueness: true
  validates    :size_group_id,                   presence: true
  validates    :size_id,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :size_group_detail_id,             override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.size_group_display} - #{m.size_display}"}
  default      :display_order,                    override: false,        to: 0
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
  belongs_to   :size_group,                      class_name: 'Omni::SizeGroup',               foreign_key: 'size_group_id'
  belongs_to   :size,                            class_name: 'Omni::Size',                    foreign_key: 'size_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :size_group_display,                     to: 'size_group.display'
    map :size_display,                           to: 'size.display'
  end
  # MAPPED ATTRIBUTES (End)

  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display_order => :asc
  # ORDERING (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :size_group_display do size_group.display if size_group end
    string   :size_display do size.display if size end
    string   :display_order
    string   :display
    string   :size_group_id
    string   :size_id
    boolean  :is_enabled

    text     :size_group_display_fulltext, using: :size_group_display
    text     :size_display_fulltext, using: :size_display
    text     :display_order_fulltext, using: :display_order
  end

  def display_as
    self.display
  end
end # class Omni::SizeGroupDetail

