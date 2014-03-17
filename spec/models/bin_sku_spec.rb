require 'spec_helper'

describe "bin_sku" do

  describe "requires" do
    it "bin_sku_id" do lambda{Omni::BinSku.create! bin_sku_id nil}.should raise_error end
    it "display" do lambda{Omni::BinSku.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::BinSku, display: 'dup_test'); dup = build(Omni::BinSku, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "bin_sku_id" do me = create(Omni::BinSku); me.bin_sku_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::BinSku); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "bin_sku_type" do lambda{Omni::BinSku.create! bin_sku_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::BinSku, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "bin_sku" do p = create(Omni::BinSku); me = create(Omni::BinSku, bin_sku_id: p.bin_sku_id); me.bin_sku.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::BinSku); c = create(Buildit::Note, notable_type: 'Omni::BinSku',notable_id: me.bin_sku_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
