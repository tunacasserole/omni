class Omni::SupplierRating < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :supplier_ratings
  self.primary_key  = :supplier_rating_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :supplier_id,                     presence: true
  validates    :supplier_rating_subject_id,      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :supplier_rating_id,               override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.supplier.display} - #{m.supplier_rating_subject.display} - #{m.rating_date}"}
  default      :rating_value,                     override: false,        to: 0
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
  belongs_to   :supplier,                        class_name: 'Omni::Supplier',                foreign_key: 'supplier_id'
  belongs_to   :supplier_rating_subject,         class_name: 'Omni::SupplierRatingSubject',   foreign_key: 'supplier_rating_subject_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :supplier_display,                       to: 'supplier.display'
    map :supplier_rating_subject_display,        to: 'supplier_rating_subject.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :supplier_display do supplier.display if supplier end
    string   :supplier_rating_subject_display do supplier_rating_subject.display if supplier_rating_subject end
    date     :rating_date
    string   :rating_value

    text     :supplier_display_fulltext, using: :supplier_display
    text     :supplier_rating_subject_display_fulltext, using: :supplier_rating_subject_display
    text     :rating_value_fulltext, using: :rating_value
  end

  def display_as
    self.display
  end
end # class Omni::SupplierRating

