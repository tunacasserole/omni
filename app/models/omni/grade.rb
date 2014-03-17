class Omni::Grade < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :grades
  self.primary_key  = :grade_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :grade_id,                         override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| m.grade_name}
  default      :grade_order,                      override: false,        to: 0
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
  has_many     :accounts,                   class_name: 'Omni::AccountGrade',             foreign_key: 'grade_id'
  # has_many     :uniform_products,                class_name: 'Omni::UniformProduct',          foreign_key: 'grade_id'
  # has_many     :enrollments,                class_name: 'Omni::Enrollment',          foreign_key: 'grade_id'
  # ASSOCIATIONS (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :short_name
    string   :grade_name
    string   :display
    string   :grade_order
    string   :grade_id

    text     :short_name_fulltext, using: :short_name
    text     :grade_name_fulltext, using: :grade_name
    text     :display_fulltext, using: :display
    text     :grade_order_fulltext, using: :grade_order
  end
  order_search_by grade_order: :asc
  # INDEXING (End)

  # STATES (Start) ====================================================================

  # STATES (End)

  # HELPERS (Start) ====================================================================
  # def self.grades(from, thru)
  #   # return the list of grades between from and thru
  #   # Omni::Grade.where(grade_id: [from,thru])-
  #   Omni::Grade.where('grade_order >= ? and grade_order <= ?', from.grade_order, thru.grade_order) if from && thru
  # end

  # def self.grades_valid(from_id, thru_id)
  #   # ensure that the from grade is less than the thru grade
  #   return true unless from_id && thru_id

  #   from = Omni::Grade.where(grade_id: from_id).first
  #   thru = Omni::Grade.where(grade_id: thru_id).first

  #   return false unless from && thru

  #   return from.grade_order <= thru.grade_order
  # end
  # HELPERS (End)

end # class Omni::Grade

