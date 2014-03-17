require 'spec_helper'

describe "receipt_purchase" do

  describe "requires" do
    it "receipt_purchase_id" do lambda{Omni::ReceiptPurchase.create! receipt_purchase_id nil}.should raise_error end
    it "display" do lambda{Omni::ReceiptPurchase.create! display nil}.should raise_error end
    # it "receipt_purchase_nbr" do lambda{Omni::ReceiptPurchase.create! receipt_purchase_nbr nil}.should raise_error end
    # it "receipt_purchase_type" do lambda{Omni::ReceiptPurchase.create! receipt_purchase_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::ReceiptPurchase, display: 'dup_test'); dup = build(Omni::ReceiptPurchase, display: 'dup_test'); dup.should_not be_valid end
    # it "receipt_purchase_nbr" do create(Omni::ReceiptPurchase, receipt_purchase_nbr: 'dup_test'); dup = build(Omni::ReceiptPurchase, receipt_purchase_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "receipt_purchase_id" do
      r = create(Omni::Receipt)
      s = create(Omni::Supplier)
      p = create(Omni::Purchase, supplier_id: s.supplier_id)
      me = create(Omni::ReceiptPurchase, receipt_id: r.receipt_id, purchase_id: p.purchase_id)
      me.receipt_purchase_id.should_not be_nil
   end
    # it "receipt_purchase_nbr" do me = create(Omni::ReceiptPurchase); me.receipt_purchase_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "receipt_purchase_type" do lambda{Omni::ReceiptPurchase.create! receipt_purchase_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ReceiptPurchase, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ReceiptPurchase); c = create(Buildit::Note, notable_type: 'Omni::ReceiptPurchase',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
