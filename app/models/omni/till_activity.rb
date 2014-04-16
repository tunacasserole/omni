class Omni::TillActivity < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :till_activities
  self.primary_key  = :till_activity_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :till_activity_nbr,               presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :till_activity_id,                 override: false,        with: :guid
  default      :till_activity_nbr,                override: false,        with: :sequence,         named: "TILL_ACTIVITY_NBR"
  default      :till_activity_date,               override: false,        with: :today
  default      :display,                          override: false,        to: lambda{|m| "#{m.till_display} - #{m.till_activity_date}"}
  default      :activity_count,                   override: false,        to: 0
  default      :activity_amount,                  override: false,        to: 0
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
  belongs_to   :payment,                         class_name: 'Omni::Payment',                 foreign_key: 'payment_id'
  belongs_to   :user,                            class_name: 'Buildit::User',                 foreign_key: 'user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :till_display,                           to: 'till.display'
    map :tender_display,                         to: 'tender.display'
    map :payment_display,                        to: 'payment.display'
    map :user_display,                           to: 'user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :tender_id
    string   :till_id
    string   :till_activity_nbr
    date     :till_activity_date
    string   :till_activity_reason
    string   :tender_display do tender.display if tender end
    string   :payment_display do payment.display if payment end
    string   :user_display do user.full_name if user end

    text     :till_activity_nbr_fulltext, using: :till_activity_nbr
    text     :till_activity_reason_fulltext, using: :till_activity_reason
    text     :tender_display_fulltext, using: :tender_display
    text     :payment_display_fulltext, using: :payment_display
    text     :user_display_fulltext, using: :user_display
  end
end # class Omni::TillActivity

