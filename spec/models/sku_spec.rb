require 'spec_helper'

describe "sku" do
  let(:me) { create(Omni::Sku) }

  describe "requires" do
    it "sku_id" do lambda{Omni::Sku.create! sku_id nil}.should raise_error end
    it "display" do lambda{Omni::Sku.create! display nil}.should raise_error end
    it "sku_nbr" do lambda{Omni::Sku.create! sku_nbr nil}.should raise_error end
    it "sku_type" do lambda{Omni::Sku.create! sku_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Sku, display: 'dup_test'); dup = build(Omni::Sku, display: 'dup_test'); dup.should_not be_valid end
    it "sku_nbr" do create(Omni::Sku, sku_nbr: 'dup_test'); dup = build(Omni::Sku, sku_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_id" do me.sku_id.should_not be_nil end
    it "sku_nbr" do me.sku_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_type" do lambda{Omni::Sku.create! sku_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Sku, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    it "inventories" do create(Omni::Inventory, sku_id: me.sku_id); me.inventories.count.should eq(1) end
    it "suppliers" do create(Omni::SkuSupplier, sku_id: me.sku_id); me.sku_suppliers.count.should eq(1) end
    it "prices" do create(Omni::SkuPrice, sku_id: me.sku_id); me.sku_prices.count.should eq(1) end
    it "aliases" do create(Omni::SkuAlias, sku_id: me.sku_id); me.sku_aliases.count.should eq(1) end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Sku',notable_id: me.sku_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
