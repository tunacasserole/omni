require 'spec_helper'

describe "purchase_allocation" do

  describe "requires" do
    it "purchase_allocation_id" do lambda{Omni::PurchaseAllocation.create! purchase_allocation_id nil}.should raise_error end
    # it "display" do lambda{Omni::PurchaseAllocation.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::PurchaseAllocation, display: 'dup_test'); dup = build(Omni::PurchaseAllocation, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "purchase_allocation_id" do me = create(Omni::PurchaseAllocation); me.purchase_allocation_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::PurchaseAllocation); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "purchase_allocation_type" do lambda{Omni::PurchaseAllocation.create! purchase_allocation_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::PurchaseAllocation, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "purchase_allocation" do p = create(Omni::PurchaseAllocation); me = create(Omni::PurchaseAllocation, purchase_allocation_id: p.purchase_allocation_id); me.purchase_allocation.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::PurchaseAllocation); c = create(Buildit::Note, notable_type: 'Omni::PurchaseAllocation',notable_id: me.purchase_allocation_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
