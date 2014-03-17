require 'spec_helper'

describe "product_type" do

  describe "requires" do
    it "product_type_id" do lambda{Omni::ProductType.create! product_type_id nil}.should raise_error end
    it "display" do lambda{Omni::ProductType.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ProductType, display: 'dup_test'); dup = build(Omni::ProductType, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "product_type_id" do me = create(Omni::ProductType); me.product_type_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::ProductType); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "product_type_type" do lambda{Omni::ProductType.create! product_type_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ProductType, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "product_type" do p = create(Omni::ProductType); me = create(Omni::ProductType, product_type_id: p.product_type_id); me.product_type.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ProductType); c = create(Buildit::Note, notable_type: 'Omni::ProductType',notable_id: me.product_type_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
