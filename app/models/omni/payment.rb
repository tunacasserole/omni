class Omni::Payment < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :payments
  self.primary_key  = :payment_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :payment_nbr,                     presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :payment_id,                       override: false,        with: :guid
  default      :payment_nbr,                      override: false,        with: :sequence, named: "PAYMENT_NBR"
  default      :display,                          override: false,        to: lambda { |m| "Payment: #{m.payment_nbr}" }
  default      :payment_amount,                   override: false,        to: 0
  default      :layaway_deposit_amount,           override: false,        to: 0
  default      :routing_number,                   override: false,        to: 0
  default      :terminal_id,                      override: false,        to: lambda { |m|  }
  default      :is_prior_authorized_capture,      override: false,        to: false
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
  belongs_to   :order,                           class_name: 'Omni::Order',                   foreign_key: 'order_id'
  belongs_to   :customer,                        class_name: 'Omni::Customer',                foreign_key: 'customer_id'
  belongs_to   :terminal,                        class_name: 'Omni::Terminal',                foreign_key: 'terminal_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :tender,                          class_name: 'Omni::Tender',                  foreign_key: 'tender_id'
  belongs_to   :voucher,                         class_name: 'Omni::Voucher',                 foreign_key: 'voucher_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :order_display,                          to: 'order.display'
    map :customer_display,                       to: 'customer.display'
    map :terminal_display,                       to: 'terminal.display'
    map :location_display,                       to: 'location.display'
    map :tender_display,                         to: 'tender.display'
    map :voucher_display,                        to: 'voucher.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook :before_update, :set_till_totals, 10

  def set_till_totals

  end
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :payment_id
    string   :payment_nbr
    string   :order_id
    string   :customer_id
    string   :terminal_id
    string   :location_id
    string   :voucher_id
    string   :order_display do order.display if order end
    string   :customer_display do customer.display if customer end
    string   :terminal_display do terminal.display if terminal end
    string   :location_display do location.display if location end
    string   :tender_display do tender.display if tender end
    string   :state

    text     :order_display_fulltext, using: :order_display
    text     :customer_display_fulltext, using: :customer_display
    text     :terminal_display_fulltext, using: :terminal_display
    text     :location_display_fulltext, using: :location_display
    text     :tender_display_fulltext, using: :tender_display
  end
  order_search_by payment_nbr: :desc
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :charge, do: :do_charge
    # after_transition on: :approve, do: :after_approve
    # after_transition on: :decline, do: :after_decline

  ### EVENTS ###
    # event :approve do
    #   transition draft: :complete
    # end
    # event :decline do
    #   transition draft: :cancelled
    # end
    event :charge do
      transition draft: :complete
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  def do_charge
    validate_payment

    if errors.count == 0

      voucher.charge(payment_amount) if @is_voucher
      charge_card if @is_card

      order.finalize if order.payments.sum('payment_amount') >= order.order_total

      # update till
      if tender.is_update_till
        till_detail = Omni::TillDetail.first
        till_detail.tender_count += 1
        puts "tender_amount = #{till_detail.tender_amount}"
        puts "payment amount is #{payment_amount}"
        # till_detail = Omni::TillDetail.where(tender_id: tender_id, till_id: terminal.till_id).first
        till_detail.tender_amount += payment_amount
        till_detail.save
      end

      # insert till activity
      user_id = ( Buildit::User.current ? Buildit::User.current.user_id : Buildit::User.first.user_id )
      Omni::TillActivity.create(payment_id: payment_id, till_id: terminal.till_id, tender_id: tender_id, activity_count: 1, activity_amount: payment_amount, user_id: user_id)
    end

  end

  def charge_card

  end

  def validate_payment
    @is_voucher = ['Gift Card', 'Gift Certificate'].include?(tender.tender_type)
    @is_card = ['VISA', 'MasterCard', 'Discover', 'American Express'].include?(tender.tender_type)
    @is_cash = ['Cash'].include?(tender.tender_type)
    # errors.add(:tender_id, 'not a chargable tender') unless @is_voucher || @is_card
    errors.add(:payment_amount, 'payment amount must be greater than 0') unless payment_amount > 0

    validate_card if @is_card
    validate_voucher if @is_voucher
  end

  def validate_card
    # stubbed method here for calling USA epay service.  for now, any credit card with required fields and 16 digits gets authorized.
    errors.add(:account_number, 'invalid account number') unless account_number && account_number.length == 16
    errors.add(:expiration_date, 'missing expiration date') unless expiration_date
    errors.add(:ccv_code, 'missing ccv code') unless ccv_code
    errors.add(:account_number, 'missing account number') unless account_number
    errors.add(:expiration_date, 'missing expiration_date') unless expiration_date
    errors.add(:ccv_code, 'missing ccv code') unless account_number

    # errors.add(:account_number, 'TBD') if usa_epay returns errors
  end

  def validate_voucher
    if voucher
      errors.add(:voucher_id, 'voucher expired') if self.voucher.expiration_date < Date.yesterday
      errors.add(:voucher_id, 'voucher expired') if voucher.state == 'expired'
      errors.add(:voucher_id, 'no remaining balance on voucher') if voucher.state == 'complete'
      errors.add(:voucher_id, 'no remaining balance on voucher') if voucher.current_balance < 0.01
      errors.add(:voucher_id, "insufficient remaining balance on voucher.  max payment amount is #{voucher.current_balance}") if voucher.current_balance < self.payment_amount
    else
      errors.add(:voucher_id, 'missing voucher') unless voucher
    end
  end

  def after_approve


  end # def after_approve


  # decline => draft to declined
  def after_decline

  end # def after_decline

  # STATE HANDLERS (End)
end # class Omni::Payment

