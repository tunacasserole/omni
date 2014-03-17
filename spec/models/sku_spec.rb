require 'spec_helper'

describe "sku" do

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
    it "sku_id" do me = create(Omni::Sku); me.sku_id.should_not be_nil end
    it "sku_nbr" do me = create(Omni::Sku); me.sku_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_type" do lambda{Omni::Sku.create! sku_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Sku, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Sku); c = create(Buildit::Note, notable_type: 'Omni::Sku',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
