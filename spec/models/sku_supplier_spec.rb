require 'spec_helper'

describe "sku_supplier" do

  describe "requires" do
    it "sku_supplier_id" do lambda{Omni::SkuSupplier.create! sku_supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::SkuSupplier.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::SkuSupplier, display: 'dup_test'); dup = build(Omni::SkuSupplier, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_supplier_id" do me = create(Omni::SkuSupplier); me.sku_supplier_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::SkuSupplier); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "sku_supplier_type" do lambda{Omni::SkuSupplier.create! sku_supplier_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SkuSupplier, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "sku_supplier" do p = create(Omni::SkuSupplier); me = create(Omni::SkuSupplier, sku_supplier_id: p.sku_supplier_id); me.sku_supplier.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SkuSupplier); c = create(Buildit::Note, notable_type: 'Omni::SkuSupplier',notable_id: me.sku_supplier_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
