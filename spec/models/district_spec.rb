require 'spec_helper'

describe "district" do

  describe "requires" do
    it "district_id" do lambda{Omni::District.create! district_id nil}.should raise_error end
    it "display" do lambda{Omni::District.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::District, display: 'dup_test'); dup = build(Omni::District, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "district_id" do me = create(Omni::District); me.district_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::District); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "district_type" do lambda{Omni::District.create! district_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::District, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "district" do p = create(Omni::District); me = create(Omni::District, district_id: p.district_id); me.district.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::District); c = create(Buildit::Note, notable_type: 'Omni::District',notable_id: me.district_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
