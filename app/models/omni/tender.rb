class Omni::Tender < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :tenders
  self.primary_key  = :tender_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :description,                     presence: true
  validates    :short_name,                      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :tender_id,                        override: false,        with: :guid
  default      :is_allow_over_tendering,          override: false,        to: false
  default      :is_open_cash_drawer,              override: false,        to: false
  default      :is_required_signature,            override: false,        to: false
  default      :is_allow_multiple_entry,          override: false,        to: false
  default      :is_print_duplicate_receipt,       override: false,        to: false
  default      :is_allow_cash_back,               override: false,        to: false
  default      :maximum_tender_amount,            override: false,        to: 0
  default      :is_verify_via_edc,                override: false,        to: false
  default      :cash_back_limit,                  override: false,        to: 0
  default      :cash_back_fee,                    override: false,        to: 0
  default      :validation_mask,                  override: false,        to: 0
  default      :is_credit_card,                   override: false,        to: false
  default      :is_required_account_holder,       override: false,        to: false
  default      :is_required_account_number,       override: false,        to: false
  default      :is_required_expiration_date,      override: false,        to: false
  default      :is_required_ccv_code,             override: false,        to: false
  default      :is_required_postal_code,          override: false,        to: false
  default      :is_required_serial_number,        override: false,        to: false
  default      :is_required_routing_number,       override: false,        to: false
  default      :is_required_state,                override: false,        to: false
  default      :is_required_license_number,       override: false,        to: false
  default      :is_required_birth_date,           override: false,        to: false
  default      :is_required_avs_response,         override: false,        to: false
  default      :is_update_till,                   override: false,        to: false
  default      :is_accept_business_credit_card,   override: false,        to: false
  default      :is_enabled_for_web,               override: false,        to: false
  default      :is_enabled_for_pos,               override: false,        to: false
  default      :is_enabled_for_phone,             override: false,        to: false
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
  belongs_to   :gl_account,                      class_name: 'Omni::GlAccount',               foreign_key: 'gl_account_id'
  has_many     :payments,                        class_name: 'Omni::Payment',                 foreign_key: 'tender_id'
  has_many     :till_details,                    class_name: 'Omni::TillDetail',              foreign_key: 'tender_id'
  has_many     :till_audits,                     class_name: 'Omni::TillAudit',               foreign_key: 'tender_id'
  has_many     :till_activities,                 class_name: 'Omni::TillActivity',            foreign_key: 'tender_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :gl_account_display,                     to: 'gl_account.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :tender_id

    string   :display
    string   :description
    string   :short_name
    string   :tender_type
    string   :display_order
    boolean  :is_credit_card
    boolean  :is_update_till

    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
    text     :short_name_fulltext, using: :short_name
    text     :tender_type_fulltext, using: :tender_type
    text     :display_order_fulltext, using: :display_order
  end

  def self.cash
    '31D1E0FEA6C911E2AE1900FF58D32228'
  end

  def display_as
    self.display
  end
end # class Omni::Tender

