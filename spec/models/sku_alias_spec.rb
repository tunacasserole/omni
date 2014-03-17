require 'spec_helper'

describe "sku_alias" do

  describe "requires" do
    it "sku_alias_id" do lambda{Omni::SkuAlias.create! sku_alias_id nil}.should raise_error end
    it "display" do lambda{Omni::SkuAlias.create! display nil}.should raise_error end
    # it "sku_alias_nbr" do lambda{Omni::SkuAlias.create! sku_alias_nbr nil}.should raise_error end
    # it "sku_alias_type" do lambda{Omni::SkuAlias.create! sku_alias_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SkuAlias, display: 'duptest'); dup = build(Omni::SkuAlias, display: 'duptest'); dup.should_not be_valid end
    # it "sku_alias_nbr" do create(Omni::SkuAlias, sku_alias_nbr: 'duptest'); dup = build(Omni::SkuAlias, sku_alias_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_alias_id" do me = create(Omni::SkuAlias); me.sku_alias_id.should_not be_nil end
    # it "sku_alias_nbr" do me = create(Omni::SkuAlias); me.sku_alias_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_alias_type" do lambda{Omni::SkuAlias.create! sku_alias_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SkuAlias, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SkuAlias); c = create(Buildit::Note, notable_type: 'Omni::SkuAlias',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
