class Omni::GlAccount < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :gl_accounts
  self.primary_key  = :gl_account_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  validates    :gl_main_account,          presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :gl_account_id,                    override: false,        with: :guid
  default      :is_location_fill,                 override: false,        to: false
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
  has_many     :tenders,                         class_name: 'Omni::Tender',                  foreign_key: 'gl_account_id'
  has_many     :system_options,                  class_name: 'Omni::SystemOption',            foreign_key: 'gl_account_id'
  has_many     :suppliers,                       class_name: 'Omni::Supplier',                foreign_key: 'gl_account_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string  :display
    string  :gl_main_account
    string  :gl_sub_account
    string  :gl_account_type


    text     :display_fulltext, using: :display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::GlAccount

