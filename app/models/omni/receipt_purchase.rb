class Omni::ReceiptPurchase < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name                 = :receipt_purchases
  self.primary_key                = :receipt_purchase_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :receipt_purchase_id,           :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :receipt_purchase_id,              :with => :guid
  default :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.receipt_display} - Purchase: #{m.purchase_display}"}
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :receipt,                         :class_name => 'Omni::Receipt',               :foreign_key => 'receipt_id'
  belongs_to   :purchase,                        :class_name => 'Omni::Purchase',               :foreign_key => 'purchase_id'
  has_many     :receipt_details,                 :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'receipt_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :receipt_display,                 :to => 'receipt.display'
    map :purchase_display,                :to => 'purchase.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  # INDEXING (End)

  # HOOKS (Start) =======================================================================
  hook :before_destroy, :cascading_delete,  20

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    puts "\n\ncascading delete - receipt_purchase.rb line 42, receipt.state is #{self.receipt.state}\n\s"
    if ['draft', 'scheduled', 'processing'].include? self.receipt.state
      self.receipt_details.each {|x| x.receipt_allocations.delete_all}
      Omni::ReceiptDetail.where(purchase_id: self.purchase_id).each do |rd|
        rd.receipt_allocations.delete_all
      end
    else
      errors.add('state','only receipt purchases in draft, scheduled or processing state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end

 hook  :before_create,      :create_receipt_details,             10

  def create_receipt_details
    self.purchase.purchase_details.each do |x|
      # Omni::ReceiptDetail.create(receipt_id: 'XXXXXXXXXXXXXXXXXXXXXXXXRECEIPT1', purchase_id: 'XXXXXXXXXXXXXXXXXXXXXXXPURCHASE1', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', received_units: 0, allocation_profile_id: 'XXXXLASTFORECASTBYPERCENTTOSTORE', sku_id: '285C928C0F3611E3BB7120C9D047DD15', sku_alias: nil, receipt_pack_size: 1, receipt_pack_type: 'SELL_UNIT')
      next unless x.state == 'open' || x.state == 'partial'
      next if Omni::ReceiptDetail.where(receipt_id: self.receipt_id, purchase_id: self.purchase_id, purchase_detail_id: x.purchase_detail_id, sku_id: x.sku_id).first
      ap_id = receipt.allocation_profile_id
      # puts "ap_id is #{ap_id}"
      Omni::ReceiptDetail.create(receipt_id: self.receipt_id, purchase_id: self.purchase_id, purchase_detail_id: x.purchase_detail_id, received_units: 0, allocation_profile_id: ap_id, sku_id: x.sku_id, sku_alias: x.sku_alias, receipt_pack_size: x.order_pack_size, receipt_pack_type: x.order_pack_type)
    end
  end
  # HOOKS (End)

  # HELPERS (Start) =====================================================================
  def receive
    if ['draft', 'scheduled', 'processing'].include? self.receipt.state
      self.receipt.receipt_details.each do |x|
        x.complete
        next unless x.state == 'complete'
        pd = x.purchase_detail
        open_units = pd.selling_units_approved - pd.selling_units_received - pd.selling_units_cancelled
        if open_units > 0
          x.received_units = open_units
          x.save
          x.complete
        end
      end
    else
      errors.add('state','receipt purchase is currently in #{self.receipt.state}, action only valid when receipt is in draft, scheduled or processing state.')
      # raise ActiveRecord::Rollback
    end
  end
  # HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_purchase_id
    string   :display
    string   :purchase_id
    string   :receipt_id

    text     :display_fulltext,            :using => :display
  end
  # INDEXING (End)
end # class Omni::ReceiptPurchase
