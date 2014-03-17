require 'spec_helper'

describe "purchase" do

  describe "requires" do
    it "purchase_id" do lambda{Omni::Purchase.create! purchase_id nil}.should raise_error end
    it "supplier_id" do lambda{Omni::Purchase.create! supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::Purchase.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do
      s = create(Omni::Supplier)
      create(Omni::Purchase, display: 'dup_test', supplier_id: s.supplier_id)
      dup = build(Omni::Purchase, display: 'dup_test', supplier_id: s.supplier_id)
      dup.should_not be_valid
    end
  end

  describe "defaults" do
    it "purchase_id" do
      s = create(Omni::Supplier)
      me = create(Omni::Purchase, supplier_id: s.supplier_id)
      me.purchase_id.should_not be_nil
   end
    # it "is_primary to true" do me = create(Omni::Purchase); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "purchase_type" do lambda{Omni::Purchase.create! purchase_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Purchase, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "purchase" do p = create(Omni::Purchase); me = create(Omni::Purchase, purchase_id: p.purchase_id); me.purchase.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Purchase); c = create(Buildit::Note, notable_type: 'Omni::Purchase',notable_id: me.purchase_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
