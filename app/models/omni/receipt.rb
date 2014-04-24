# require 'spreadsheet'
class Omni::Receipt < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :receipts
  self.primary_key  = :receipt_id
  # METADATA (End)

  # include Omni::Print

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         uniqueness: true
  validates    :freight_terms,                   lookup: 'FREIGHT_TERMS',              allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :receipt_id,                                                       with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.location_display} - Receipt: #{m.create_date}"}
  default      :receipt_nbr,                      override: false,        with: :sequence,         named: "RECEIPT_NBR"

  default      :create_date,                                                   :with  => :now
  default      :carrier_supplier_id,                                            to: lambda{|m| }

  default      :appointment_duration,             override: false,        to: 0
  default      :is_expected_asn,                  override: false,        to: false
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
  belongs_to   :carrier_supplier,                class_name: 'Omni::Supplier',                foreign_key: 'carrier_supplier_id'
  belongs_to   :accepted_by_user,                class_name: 'Buildit::User',                 foreign_key: 'accepted_by_user_id'
  belongs_to   :completed_by_user,               class_name: 'Buildit::User',                 foreign_key: 'completed_by_user_id'
  belongs_to   :allocation_profile,              class_name: 'Omni::AllocationProfile',       foreign_key: 'allocation_profile_id'
  has_many     :attachments,                     class_name: 'Buildit::Attachment',           foreign_key: 'attachable_id' , as: :attachable
  has_many     :receipt_details,                 class_name: 'Omni::ReceiptDetail',           foreign_key: 'receipt_id'
  has_many     :receipt_purchases,               class_name: 'Omni::ReceiptPurchase',         foreign_key: 'receipt_id'
  # has_many     :purchases,                       class_name: 'Omni::Purchase',                :through => :receipt_purchases

  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
    map :carrier_supplier_display,               to: 'carrier_supplier.display'
    map :accepted_by_user_display,               to: 'accepted_by_user.full_name'
    map :completed_by_user_display,              to: 'completed_by_user.full_name'
    map :allocation_profile_display,             to: 'allocation_profile.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :receipt_nbr =>:desc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
  hook :before_save, :appointment_scheduled?, 10
  hook :before_destroy, :cascading_delete,  20

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    if ['draft', 'scheduled', 'processing'].include? self.state
      self.receipt_details.each {|x| x.receipt_allocations.delete_all}
      self.receipt_details.delete_all
      self.receipt_purchases.delete_all
    else
      errors.add('state','only receipts in draft, scheduled or processing state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end

  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do; end

    state :scheduled do
      # validate :appointment_scheduled
    end

    state :processing do; end

    state :accepted do; end

    state :complete do
    # Validate that all receipt_details are in complete state

    end

  ### EVENTS ###
    event :start do
      transition [:draft, :scheduled] => :processing
    end

    event :receive do
      transition [:draft, :scheduled, :processing] => same
    end

    event :accept do
      transition [:draft, :scheduled, :processing] => :accepted
    end

    event :complete do
      transition :accepted => :complete
    end

    # event :print do
    #   transition [:draft, :scheduled, :processing] => same
    # end

    event :upload do
      transition [:draft, :scheduled, :processing] => same
    end

    event :copy_units do
      transition [:draft, :scheduled, :processing] => same
    end

  ### CALLBACKS ###
    after_transition on: :start, do: :do_start
    after_transition on: :receipt, do: :do_receive
    after_transition on: :accept, do: :do_accept
    after_transition on: :complete, do: :do_complete
    # after_transition on: :print, do: :print_count_sheet
    after_transition on: :upload, do: :upload_packing_list
    after_transition on: :copy_units, do: :do_copy_units

  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  def appointment_scheduled?
    self.state = 'scheduled' if appointment_date_changed? && appointment_date
  end

  def do_copy_units
    # Read every Receipt Detail row in Draft State.
    # If the received units are zero, the system will update the row with the number of open units from the corresponding Purchase Detail row.
    # If the received units are greater than zero, then the field is not changed.
    # puts 'do_copy_units'
    receipt_details.where(state: 'draft').each do |x|
      # puts "receipt details state is #{x.state}"
      if x.purchase && x.purchase_detail && x.received_units == 0
      # puts "x.received_units is #{x.received_units}"
      # puts "x.purchase.state is #{x.purchase.state}"

        case x.purchase.state
          when 'open', 'draft'
          # o received_units = (PurchaseDetail.selling_units_approved – PurchaseDetail.selling_units_cancelled) / PurchaseDetail.order_pack_size
          x.received_units = (x.purchase_detail.selling_units_approved - x.purchase_detail.selling_units_cancelled) / x.purchase_detail.order_pack_size
          # o receipt_pack_size = PurchaseDetail.order_pack_size
          x.receipt_pack_size = x.purchase_detail.order_pack_size
          # o receipt_pack_type = PurchaseDetail.order_pack_type
          x.receipt_pack_type = x.purchase_detail.order_pack_type

          when 'partial'
          # o received_units = (PurchaseDetail.selling_units_approved – PurchaseDetail.selling_units_cancelled – PurchaseDetail.selling_units_received) / PurchaseDetail.order_pack_size
          x.received_units = (x.purchase_detail.selling_units_approved - x.purchase_detail.selling_units_cancelled - x.purchase_detail.selling_units_received) / x.purchase_detail.order_pack_size
          # o receipt_pack_size = PurchaseDetail.order_pack_size
          x.receipt_pack_size = x.purchase_detail.order_pack_size
          # o receipt_pack_type = PurchaseDetail.order_pack_type
          x.receipt_pack_type = x.purchase_detail.order_pack_type

        end # end case
        x.save

      end # end if

    end # end each
  end # end do_copy_units

  def do_receive
    receipt_purchases.each {|x| x.receive}
  end

  def upload
    puts "\n\n\n\n\n\n\n\n!!!!!no longer used!!!!!!!\n\n\n\n\n"
    # x = Omni::ReceiptPackingList.new
    # x.upload self

  end

  def print_count_sheet
  # Produce a Receiving Count Sheet report that can be printed.
    x = Omni::ReceiptWorksheet.new
    x.print_receipt self
  end

  def do_start
    self.start_date = Date.today
    self.save
  end

  def do_accept
  # Do complete process on each Receipt Detail
    receipt_details.each {|x| x.complete}
    self.accept_date = Date.today
    self.accepted_by_user_id = Buildit::User.current ? Buildit::User.current.user_id : '811166D4D50A11E2B45820C9D04AARON'
    save
  end

  def do_complete
    # Validate Receipt Details in draft or complete state (nothing in hold state)
    unless receipt_details.any? {|x| x.state == 'hold'}
      receipt_details.each {|x| x.complete if x.state == 'draft'}
      self.complete_date = Date.today
      self.completed_by_user_id = Buildit::User.current ? Buildit::User.current.user_id : '811166D4D50A11E2B45820C9D04AARON'
      save
    end
  end

  def write_stock_ledger_activity
    # retail = Omni::SkuPrice.where(sku_id: self.sku_id).first ? Omni::SkuPrice.where(sku_id: self.sku_id).first.retail_price : 0
    ruleset_id = Omni::Ruleset.where(ruleset_code: 'AcceptReceipt').first ? Omni::Ruleset.where(ruleset_code: 'AcceptReceipt').first.ruleset_id : ''
    units = self.received_units * self.receipt_pack_size

    Omni::StockLedgerActivity.create(
      stockable_type: "Omni::Receipt" ,
      stockable_id: self.receipt_id,
      ruleset_id: ruleset_id,
      # sku_id: self.sku_id,
      location_id: self.location_id,
      # supplier_id: self.purchase_detail.purchase.supplier_id,
      # customer_id: nil,
      # account_id: nil,
      # units: units,
      # cost: units * (self.purchase_detail.supplier_cost / self.purchase_detail.order_cost_units),
      # retail: units * retail,
      # create_date: Time.now,
      # activity_date: Time.now
    )
  end
  # STATE HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_id
    string   :receipt_nbr
    string   :location_display do location.display if location end
    string   :carrier_supplier_display do carrier_supplier.display if carrier_supplier end
    string   :display
    string   :state

    text     :receipt_nbr_fulltext, using: :receipt_nbr
    text     :location_display_fulltext, using: :location_display
    text     :carrier_supplier_display_fulltext, using: :carrier_supplier_display
    text     :state_fulltext, using: :state
  end

end # class Omni::Receipt

