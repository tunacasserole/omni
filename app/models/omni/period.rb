class Omni::Period < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :periods
  self.primary_key  = :period_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :period_id,                       presence: true, uniqueness: true
  validates    :start_date,                      presence: true
  validates    :end_date,                        presence: true
  validates    :year_number,                     presence: true
  # validates    :period_number,                   presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :period_id,                        override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.period_number} - #{m.year_number}"}
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
  has_many     :period_results,                  class_name: 'Omni::PeriodResult',            foreign_key: 'period_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # SCOPES (Start) ======================================================================
  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    date     :start_date
    date     :end_date
    string   :year_number
    string   :period_number

    text     :year_number_fulltext, using: :year_number
    text     :period_number_fulltext, using: :period_number
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::Period

