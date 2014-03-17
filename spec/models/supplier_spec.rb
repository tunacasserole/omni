require 'spec_helper'

describe "supplier" do

  describe "requires" do
    it "supplier_id" do lambda{Omni::Supplier.create! supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::Supplier.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Supplier, display: 'dup_test'); dup = build(Omni::Supplier, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "supplier_id" do me = create(Omni::Supplier); me.supplier_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Supplier); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "supplier_type" do lambda{Omni::Supplier.create! supplier_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Supplier, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Supplier, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Supplier); c = create(Buildit::Note, notable_type: 'Omni::Supplier',notable_id: me.supplier_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
