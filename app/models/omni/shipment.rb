class Omni::Shipment < ActiveRecord::Base
 # METADATA (Start) ====================================================================
  self.table_name   = :shipments
  self.primary_key  = :shipment_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :shipment_nbr,                     presence: true, uniqueness: true
  validates    :display,                          presence: true, uniqueness: true
  validates    :shipment_id,                     presence: true
  validates    :location_id,                     presence: true
  validates    :create_date,                     presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :shipment_id,                      override: false,        with: :guid
  default      :shipment_nbr,                     override: false,        with: :sequence,         named: "SHIPMENT_NBR"
  default      :display,                          override: false,        to: lambda{|m| "Ship To: #{m.ship_name} - Created: #{m.create_date}"}
  default      :shipping_cost,                    override: false,        to: 0
  default      :is_residential,                   override: false,        to: false
  default      :is_commercial,                    override: false,        to: false
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
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :supplier,                        class_name: 'Omni::Supplier',                foreign_key: 'supplier_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  has_many     :events,                          class_name: 'Buildit::Event',                 foreign_key: 'eventable_id',    as: :eventable
  has_many     :shipment_details,                class_name: 'Omni::Shipment',                foreign_key: 'shipment_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
    map :supplier_display,                       to: 'supplier.display'
  end
  # MAPPED ATTRIBUTES (End)

  # EVENTFUL (Start) ====================================================================
  # eventful do
    # on :create,     :publish => lambda{|m| "shipment# #{m.shipment_nbr} created"},        :title => 'shipment was created'
    # on :update,     :publish => lambda{|m| "CAR# #{m.sbna_cfar_number}, #{m.customer_full_name} was updated"},    :title => 'CAR was updated'
  # end
  # EVENTFUL (End)


  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :cancel, do: :after_cancel
    after_transition on: :receive, do: :after_receive
    after_transition on: :send, do: :after_send

  ### EVENTS ###
    event :cancel do
      transition [:draft,:pending] => :cancelled
    end
    event :receive do
      transition :shipped => :complete
    end
    event :ship do
      transition draft: :shipped
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # send => draft to shipped
  def after_send

  end # def after_send


  # receive => shipped to complete
  def after_receive

  end # def after_receive


  # cancel => draft to cancelled
  def after_cancel
    self.events.create(message: "shipment was cancelled", event_type: 'state', occurred_at: Time.now)
  end # def after_cancel

  # STATE HANDLERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :state
    string   :shipment_nbr
    string   :location_display do location.display if location end
    string   :shippable_type
    string   :shippable_id
    string   :supplier_display do supplier.display if supplier end
    string   :tracking_number
    string   :ship_name
    string   :shippable_id
    string   :shippable_type
    string   :state

    text     :state_fulltext, using: :state
    text     :shipment_nbr_fulltext, using: :shipment_nbr
    text     :location_display_fulltext, using: :location_display
    text     :shippable_type_fulltext, using: :shippable_type
    text     :shippable_id_fulltext, using: :shippable_id
    text     :supplier_display_fulltext, using: :supplier_display
    text     :tracking_number_fulltext, using: :tracking_number
    text     :ship_name_fulltext, using: :ship_name
  end

end # class Omni::Shipment

