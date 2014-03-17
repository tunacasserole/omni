require 'spec_helper'

describe "sku_substitute" do

  describe "requires" do
    it "sku_substitute_id" do lambda{Omni::SkuSubstitute.create! sku_substitute_id nil}.should raise_error end
    it "display" do lambda{Omni::SkuSubstitute.create! display nil}.should raise_error end
    # it "sku_substitute_nbr" do lambda{Omni::SkuSubstitute.create! sku_substitute_nbr nil}.should raise_error end
    # it "sku_substitute_type" do lambda{Omni::SkuSubstitute.create! sku_substitute_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SkuSubstitute, display: 'duptest'); dup = build(Omni::SkuSubstitute, display: 'duptest'); dup.should_not be_valid end
    # it "sku_substitute_nbr" do create(Omni::SkuSubstitute, sku_substitute_nbr: 'duptest'); dup = build(Omni::SkuSubstitute, sku_substitute_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_substitute_id" do me = create(Omni::SkuSubstitute); me.sku_substitute_id.should_not be_nil end
    # it "sku_substitute_nbr" do me = create(Omni::SkuSubstitute); me.sku_substitute_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_substitute_type" do lambda{Omni::SkuSubstitute.create! sku_substitute_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SkuSubstitute, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SkuSubstitute); c = create(Buildit::Note, notable_type: 'Omni::SkuSubstitute',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
