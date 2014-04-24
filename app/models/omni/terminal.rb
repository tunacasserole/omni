class Omni::Terminal < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :terminals
  self.primary_key  = :terminal_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :terminal_nbr,                    presence: true, uniqueness: true
  validates    :location_id,                     presence: true
  validates    :mac_address,                     presence: true
  validates    :local_server_ip,                 presence: true
  validates    :hq_server_url,                   presence: true
  validates    :receipt_printer_url,             presence: true
  validates    :receipt_printer_ip,              presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :terminal_id,                      override: false,        with: :guid
  default      :terminal_nbr,                     override: false,        with: :sequence,         named: "TERMINAL_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.location_display} - Terminal: #{m.terminal_nbr}"}
  default      :is_net_display_enabled,           override: false,        to: false
  default      :is_login_per_transaction,         override: false,        to: false
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
  has_many     :payments,                        class_name: 'Omni::Payment',                 foreign_key: 'terminal_id'
  has_many     :orders,                          class_name: 'Omni::Order',                   foreign_key: 'terminal_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :till,                            class_name: 'Omni::Till',                    foreign_key: 'till_id'
  belongs_to   :receipt_format,                  class_name: 'Omni::ReceiptFormat',           foreign_key: 'receipt_format_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
    map :till_display,                           to: 'till.display'
    map :receipt_format_display,                 to: 'receipt_format.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :location_display do location.display if location end
    string   :terminal_nbr
    string   :mac_address
    string   :local_server_ip
    string   :hq_server_url
    date     :override_sale_date

    text     :location_display_fulltext, using: :location_display
    text     :terminal_nbr_fulltext, using: :terminal_nbr
    text     :mac_address_fulltext, using: :mac_address
    text     :local_server_ip_fulltext, using: :local_server_ip
    text     :hq_server_url_fulltext, using: :hq_server_url
  end

  def display_as
    display
  end

end # class Omni::Terminal

