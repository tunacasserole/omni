class Omni::ReceiptDetail < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :receipt_details
  self.primary_key  = :receipt_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  validates    :receipt_pack_type,               lookup: 'PACK_TYPE',       allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :receipt_detail_id,                override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.receipt_display} - #{m.purchase_detail_display}"}
  default      :receipt_line_nbr,                 override: false,        with: :sequence,         named: "RECEIPT_LINE_NBR"
  default      :received_units,                   override: false,        to: 0
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
  has_many     :receipt_allocations,             class_name: 'Omni::ReceiptAllocation',   foreign_key: 'receipt_detail_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                 foreign_key: 'sku_id'
  belongs_to   :receipt,                         class_name: 'Omni::Receipt',             foreign_key: 'receipt_id'
  belongs_to   :purchase,                        class_name: 'Omni::Purchase',            foreign_key: 'purchase_id'
  belongs_to   :purchase_detail,                 class_name: 'Omni::PurchaseDetail',      foreign_key: 'purchase_detail_id'
  belongs_to   :allocation_profile,              class_name: 'Omni::AllocationProfile',   foreign_key: 'allocation_profile_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :receipt_display,                        to: 'receipt.display'
    map :allocation_profile_display,             to: 'allocation_profile.display'
    map :sku_display,                            to: 'sku.display'
    map :purchase_detail_display,                to: 'purchase_detail.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook :before_destroy, :cascading_delete,  10

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    if ['draft', 'hold'].include? self.state
      self.receipt_allocations.each {|x| x.destroy}
    else
      errors.add('state','only records in draft or hold state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end
  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ## STATES ###
    state :draft do

    end

  ## CALLBACKS ###
    after_transition on: :complete, do: :do_complete
    after_transition on: :allocate, do: :do_allocate
    after_transition on: :release, do: :do_release

  ## EVENTS ###
    event :complete do
      transition draft: :complete
    end

    event :allocate do
      transition :complete => same
    end

    event :hold do
      transition draft: :hold
    end

    event :release do
      transition :hold => :draft
    end

  end
  # STATES (End)

  # STATE HELPERS (Start) ====================================================================
  def do_release
    if receipt.state == 'accepted'
      self.state = 'accepted'
      purchase_detail.receive
      write_stock_ledger_activity
    else
      self.state = 'complete'
    end
    save
  end

  def do_complete
    if purchase_detail
      purchase_detail.receive
      write_stock_ledger_activity
    end
  end

  def do_allocate
    # puts 'allocating'
    #  Read all existing ReceiptAllocation records for the ReceiptDetail.  If the state is draft, then delete the record.
    #  If the state is locked, then add the units_allocated to locked_units parameter and add the location_id to the locked_locations hash.
    locked_units = 0
    locked_locations = self.purchase ? [self.purchase.location_id] : []
    locked_locations = [self.receipt.location_id]

    receipt_allocations.each do |x|
      if x.state == 'draft'
        x.delete
      else
        locked_units += x.units_allocated
        locked_locations << x.location_id
      end
    end

    units_to_allocate = self.received_units * (self.purchase_detail ? self.purchase_detail.order_pack_size : 1)
    # puts "units_to_allocate is #{units_to_allocate}"
    allocations_to_create = Omni::Allocation.calculate(self.allocation_profile_id, self.sku_id, units_to_allocate, locked_units, locked_locations, (self.purchase_detail.purchase_detail_id if self.purchase_detail) )
    # puts "allocations to create is #{allocations_to_create.length}"
    allocations_to_create.each { |x| Omni::ReceiptAllocation.create(receipt_detail_id: self.receipt_detail_id, location_id: x[:location_id], units_allocated: x[:units_allocated], units_needed: x[:units_needed]) } # unless k = self.purchase.location_id }
  end

  def write_stock_ledger_activity
    retail = Omni::SkuPrice.where(sku_id: self.sku_id).first ? Omni::SkuPrice.where(sku_id: self.sku_id).first.retail_price : 0
    ruleset_id = Omni::Ruleset.where(ruleset_code: 'AcceptReceipt').first ? Omni::Ruleset.where(ruleset_code: 'AcceptReceipt').first.ruleset_id : ''
    units = self.received_units * self.receipt_pack_size

    Omni::StockLedgerActivity.create(
      stockable_type: "Omni::ReceiptDetail" ,
      stockable_id: self.receipt_detail_id,
      ruleset_id: ruleset_id,
      sku_id: self.sku_id,
      location_id: self.receipt.location_id,
      supplier_id: self.purchase_detail.purchase.supplier_id,
      customer_id: nil,
      account_id: nil,
      units: units,
      cost: units * (self.purchase_detail.supplier_cost / self.purchase_detail.order_cost_units),
      retail: units * retail,
      # create_date: Time.now,
      # activity_date: Time.now
    )
  end

  # STATES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_display do receipt.display if receipt end
    string   :purchase_detail_display do purchase_detail.display if purchase_detail end
    integer  :received_units
    string   :state
    string   :receipt_id

    text     :receipt_display_fulltext, using: :receipt_display
    text     :purchase_detail_display_fulltext, using: :purchase_detail_display
    text     :received_units_fulltext, using: :received_units
    text     :state_fulltext, using: :state
  end
  # INDEXING (End)


  def display_as
    self.display
  end
end # class Omni::ReceiptDetail

