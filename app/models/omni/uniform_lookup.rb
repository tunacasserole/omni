class Omni::UniformLookup < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :uniform_lookups
  self.primary_key  = :uniform_lookup_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                  presence: true, uniqueness: true
  # validates    :uniform_lookup_nbr,       presence: true, uniqueness: true
  # validates    :uniform_lookup_id,        presence: true
  # validates    :uniform_id,               presence: true
  # validates    :account_id,               presence: true
  # # validates    :category_id,              presence: true
  # validates    :product_id,               presence: true
  # validates    :style_id,                 presence: true
  # validates    :color_id,                 presence: true
  # validates    :size_id,                  presence: true
  # validates    :sku_id,                   presence: true
  # validates    :grade_id,                 presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :uniform_lookup_id,                override: false,        with: :guid
  # default      :uniform_lookup_nbr,               override: false,        with: :sequence, named: "UNIFORM_LOOKUP_NBR"
  # default      :display,                          override: false,        to: lambda{|m| "#{m.uniform_lookup_nbr}"}
  # default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  # belongs_to   :uniform,     class_name: 'Omni::Uniform',            foreign_key: 'uniform_id'
  # belongs_to   :account,     class_name: 'Omni::Account',            foreign_key: 'account_id'
  # belongs_to   :contract,    class_name: 'Omni::Contract',           foreign_key: 'contract_id'
  # belongs_to   :category,    class_name: 'Omni::Category',           foreign_key: 'category_id'
  # belongs_to   :product,     class_name: 'Omni::Product',            foreign_key: 'product_id'
  # belongs_to   :style,       class_name: 'Omni::Style',              foreign_key: 'style_id'
  # belongs_to   :color,       class_name: 'Omni::Color',              foreign_key: 'color_id'
  # belongs_to   :size,        class_name: 'Omni::Size',               foreign_key: 'size_id'
  # belongs_to   :sku,         class_name: 'Omni::Sku',                foreign_key: 'sku_id'
  # belongs_to   :style_color, class_name: 'Omni::StyleColor',         foreign_key: 'style_color_id'
  # belongs_to   :grade,       class_name: 'Omni::Grade',              foreign_key: 'grade_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    # map :uniform_display,                  to: 'uniform.display'
    # map :account_display,                  to: 'account.display'
    # map :contract_display,                  to: 'contract.display'
    # map :category_display,                  to: 'category.display'
    # map :product_display,                  to: 'product.display'
    # map :style_display,                    to: 'style.display'
    # map :color_display,                    to: 'color.display'
    # map :size_display,                  to: 'size.display'
    # map :sku_display,                  to: 'sku.display'
    # map :style_color_display,              to: 'style_color.display'
    # map :grade_display,              to: 'grade.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string :uniform_detail_id
    string :account_id
    string :category_id
    string :product_id
    string :style_id
    string :color_id
    string :size_id
    string :sku_id
    string :grade_id
    string :display

    boolean :is_required_male
    boolean :is_required_female
    boolean :is_optional_male
    boolean :is_optional_female
    boolean :is_includes_logo
    boolean :is_requires_logo
    boolean :is_approved

    text :display_fulltext, using: :display
  end

  # STATES (Start) ====================================================================

  # STATES (End)
  def display_as
    self.display
  end
end # class Omni::UniformLookup

