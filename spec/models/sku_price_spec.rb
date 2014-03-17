require 'spec_helper'

describe "sku_price" do

  describe "requires" do
    it "sku_price_id" do lambda{Omni::SkuPrice.create! sku_price_id nil}.should raise_error end
    it "display" do lambda{Omni::SkuPrice.create! display nil}.should raise_error end
    # it "sku_price_nbr" do lambda{Omni::SkuPrice.create! sku_price_nbr nil}.should raise_error end
    # it "sku_price_type" do lambda{Omni::SkuPrice.create! sku_price_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SkuPrice, display: 'duptest'); dup = build(Omni::SkuPrice, display: 'duptest'); dup.should_not be_valid end
    # it "sku_price_nbr" do create(Omni::SkuPrice, sku_price_nbr: 'duptest'); dup = build(Omni::SkuPrice, sku_price_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_price_id" do me = create(Omni::SkuPrice); me.sku_price_id.should_not be_nil end
    # it "sku_price_nbr" do me = create(Omni::SkuPrice); me.sku_price_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_price_type" do lambda{Omni::SkuPrice.create! sku_price_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SkuPrice, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SkuPrice); c = create(Buildit::Note, notable_type: 'Omni::SkuPrice',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
