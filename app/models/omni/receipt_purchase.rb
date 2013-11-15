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
    if ['draft', 'scheduled', 'processing'].include? self.receipt.state
      self.receipt_details.each {|x| x.receipt_allocations.delete_all}
      Omni::ReceiptDetail.where(purchase_id: self.purchase_id).each do |rd|
        rd.receipt_allocations.delete_all
        rd.destroy
      end
    else
      errors.add('state','only receipt purchases in draft, scheduled or processing state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end

 hook  :before_create,      :create_receipt_details,             10

  def create_receipt_details
    self.purchase.purchase_details.each do |x|
      next unless x.receipt.state == 'open' || x.receipt.state == 'partial'
      next if Omni::ReceiptDetail.where(receipt_id: self.receipt_id, purchase_id: self.purchase_id, purchase_detail_id: x.purchase_detail_id, sku_id: x.sku_id).first
      Omni::ReceiptDetail.create(receipt_id: self.receipt_id, purchase_id: self.purchase_id, purchase_detail_id: x.purchase_detail_id, received_units: 0, allocation_profile_id: x.allocation_profile_id, sku_id: x.sku_id, sku_alias: x.sku_alias, receipt_pack_size: x.order_pack_size, receipt_pack_type: x.order_pack_type)
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
      errors.add('state','action only valid when receipt purchase is in draft, scheduled or processing state.')
      raise ActiveRecord::Rollback
    end
  end
  # HELPERS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_purchase_id
    string   :display
    string   :state
    string   :receipt_id
    string   :purchase_id

    text     :display_fulltext,            :using => :display
  end
  # INDEXING (End)
end # class Omni::ReceiptPurchase
