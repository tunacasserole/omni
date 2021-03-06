class Omni::Color < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :colors
  self.primary_key  = :color_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  validates    :color_nbr,                presence: true, uniqueness: true
  validates    :concatenated_name,        presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :color_id,                         override: false,        with: :guid
  default      :color_nbr,                        override: false,        with: :sequence,         named: "COLOR_NBR"
  default      :is_plaid,                         override: false,        to: false
  default      :is_stripe,                        override: false,        to: false
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
  has_many     :notes,        class_name: 'Buildit::Note',    foreign_key: 'notable_id', as: :notable
  has_many     :skus,         class_name: 'Omni::Sku',        foreign_key: 'color_id'
  has_many     :style_colors, class_name: 'Omni::StyleColor', foreign_key: 'color_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :color_id
    string   :display
    string   :color_nbr
    string   :short_name
    string   :concatenated_name

    text     :display_fulltext, using: :display
    text     :color_nbr_fulltext, using: :color_nbr
    text     :short_name_fulltext, using: :short_name
    text     :concatenated_name_fulltext, using: :concatenated_name
  end
  order_search_by :display => :asc

  # STATES (Start) ====================================================================

  # STATES (End)
  def display_as
    self.display
  end

end # class Omni::Color

