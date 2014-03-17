class Omni::Classification < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :classifications
  self.primary_key  = :classification_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         :uniqueness    => true
  validates    :department_id,                   :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :classification_id,                override: false,        with: :guid
  default      :classification_nbr,               override: false,        with: :sequence,         named: "CLASSIFICATION_NBR"
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
  belongs_to   :planner_user,                    class_name: 'Buildit::User',                     foreign_key: 'planner_user_id'
  belongs_to   :department,                      class_name: 'Omni::Department',              foreign_key: 'department_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  has_many     :subclasses,                      class_name: 'Omni::Subclass',                foreign_key: 'classification_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :planner_user_display,                   to: 'planner_user.full_name'
    map :department_display,                     to: 'department.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # HELPERS (Start) =======================================================================
  def skus
    skus = []
    self.subclasses.each do |subclass|
      subclass.styles.each do |style|
        style.skus.each do |sku|
          skus << sku
        end
      end
    end
    skus
  end

  def inventories
    inventories = []
    self.subclasses.each do |subclass|
      subclass.styles.each do |style|
        style.inventories.each do |sl|
          inventories << sl
        end
      end
    end
    inventories
  end
  # HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :classification_nbr
    string   :department_display do department.display if department end
    string   :department_id

    text     :department_id
    text     :display_fulltext, using: :display
    text     :classification_nbr_fulltext, using: :classification_nbr
    text     :department_display_fulltext, using: :department_display
  end

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Classification

