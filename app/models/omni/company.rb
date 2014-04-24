class Omni::Company < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :companies
  self.primary_key  = :company_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :line_1,                          presence: true
  validates    :city,                            presence: true
  validates    :zip,                             presence: true
  validates    :phone,                           presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :company_id,                       override: false,        with: :guid
  default      :company_nbr,                      override: false,        with: :sequence,         named: "COMPANY_NBR"
  default      :beta_factor,                      override: false,        to: 0
  default      :demand_filter,                    override: false,        to: 0
  default      :tracking_signal,                  override: false,        to: 0
  default      :purchase_order_header_cost,       override: false,        to: 0
  default      :carrying_cost_percent,            override: false,        to: 0
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
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  has_many     :regions,                         class_name: 'Omni::Region',                  foreign_key: 'company_id'
  has_many     :departments,                     class_name: 'Omni::Department',              foreign_key: 'company_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :company_nbr
    string   :line_1
    string   :city
    string   :state_code
    string   :zip
    string   :phone

    text     :display_fulltext, using: :display
    text     :company_nbr_fulltext, using: :company_nbr
    text     :line_1_fulltext, using: :line_1
    text     :city_fulltext, using: :city
    text     :state_code_fulltext, using: :state_code
    text     :zip_fulltext, using: :zip
    text     :phone_fulltext, using: :phone
  end

  # STATES (Start) ====================================================================

  # STATES (End)
  def display_as
    self.display
  end

  def display_as
    self.display
  end
end # class Omni::Company

