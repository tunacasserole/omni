require 'spec_helper'

describe "bom" do

  describe "requires" do
    it "bom_id" do lambda{Omni::Bom.create! bom_id nil}.should raise_error end
    it "display" do lambda{Omni::Bom.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Bom, display: 'dup_test'); dup = build(Omni::Bom, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "bom_id" do me = create(Omni::Bom); me.bom_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Bom); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "bom_type" do lambda{Omni::Bom.create! bom_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Bom, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "bom" do p = create(Omni::Bom); me = create(Omni::Bom, bom_id: p.bom_id); me.bom.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Bom); c = create(Buildit::Note, notable_type: 'Omni::Bom',notable_id: me.bom_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
