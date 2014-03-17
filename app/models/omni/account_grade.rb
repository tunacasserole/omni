class Omni::AccountGrade < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :account_grades
  self.primary_key  = :account_grade_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :account_id,                      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :account_grade_id,                 override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m|"#{m.account_display} - #{m.grade_display}"}
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
  belongs_to   :account,                            class_name: 'Omni::Account',                    foreign_key: 'account_id'
  belongs_to   :grade,                            class_name: 'Omni::Grade',                    foreign_key: 'grade_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                           to: 'account.display'
    map :grade_display,                           to: 'grade.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  order_search_by :grade_order => :asc

  searchable do
    string   :account_id
    string   :grade_id
    integer  :grade_order
    string   :display
    string   :account_display do account.display if account end

    text     :display_fulltext, using: :display
    # text     :account_display_fulltext, using: :account_display
    # text     :grade_display_fulltext, using: :grade_display
  end
  # INDEXING (End) ====================================================================

end # class Omni::AccountGrade

