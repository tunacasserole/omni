class Omni::TillAudit < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :till_audits
  self.primary_key  = :till_audit_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :till_audit_id,                    override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.till_display} - #{m.tender_display} - #{m.audit_date}"}
  default      :system_count,                     override: false,        to: 0
  default      :system_amount,                    override: false,        to: 0
  default      :audit_count,                      override: false,        to: 0
  default      :audit_amount,                     override: false,        to: 0
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
  belongs_to   :till,                            class_name: 'Omni::Till',                    foreign_key: 'till_id'
  belongs_to   :tender,                          class_name: 'Omni::Tender',                  foreign_key: 'tender_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :till_display,                           to: 'till.display'
    map :tender_display,                         to: 'tender.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :till_id
    string   :till_display do till.display if till end
    date     :audit_date
    string   :tender_display do tender.display if tender end
    date     :gl_interface_date

    text     :till_display_fulltext, using: :till_display
    text     :tender_display_fulltext, using: :tender_display
  end
end # class Omni::TillAudit

