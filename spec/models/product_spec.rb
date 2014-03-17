require 'spec_helper'

describe "product" do

  describe "requires" do
    it "product_id" do lambda{Omni::Product.create! product_id nil}.should raise_error end
    it "display" do lambda{Omni::Product.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Product, display: 'dup_test'); dup = build(Omni::Product, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "product_id" do me = create(Omni::Product); me.product_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Product); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "product_type" do lambda{Omni::Product.create! product_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Product, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "product" do p = create(Omni::Product); me = create(Omni::Product, product_id: p.product_id); me.product.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Product); c = create(Buildit::Note, notable_type: 'Omni::Product',notable_id: me.product_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
