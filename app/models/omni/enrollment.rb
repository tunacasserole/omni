
class Omni::Enrollment < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :enrollments
  self.primary_key  = :enrollment_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :account_id,                      presence: true
  validates    :school_year,                     presence: true
  validates    :grade_id,                        presence: true
  validates    :gender,                          presence: true
  validates    :enrollment,                      presence: true
  validates    :school_year,                     lookup: 'PLAN_YEAR',allow_nil: false
  validates    :gender,                          lookup: 'GENDER',allow_nil: false
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :enrollment_id,            override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.account_display} - #{m.school_year} - #{m.grade_display} - #{m.gender}"}
  default      :enrollment,                       override: false,        to: 0
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
  belongs_to   :account,                         class_name: 'Omni::Account',                 foreign_key: 'account_id'
  belongs_to   :grade,                           class_name: 'Omni::Grade',                   foreign_key: 'grade_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                           to: 'account.display'
    map :grade_display,                          to: 'grade.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :account_id
    string   :account_display do account.display if account end
    string   :school_year do |x| Buildit::Lookup::Manager.display_for('ACCOUNT_YEAR', x.school_year) end
    string   :grade_display do grade.display if grade end
    string   :gender do |x| Buildit::Lookup::Manager.display_for('GENDER', x.gender) end
    integer  :enrollment

    text     :account_display_fulltext, using: :account_display
    text     :school_year_fulltext, using: :school_year
    text     :grade_display_fulltext, using: :grade_display
    text     :gender_fulltext, using: :gender
    text     :enrollment_fulltext, using: :enrollment
  end

  def display_as
    self.display
  end
end # class Omni::Enrollment

