require 'spec_helper'

describe "area" do

  describe "requires" do
    it "area_id" do lambda{Omni::Area.create! area_id nil}.should raise_error end
    it "display" do lambda{Omni::Area.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Area, display: 'dup_test'); dup = build(Omni::Area, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "area_id" do me = create(Omni::Area); me.area_id.should_not be_nil end
  end

  describe "lookups" do
    # it "area_type" do lambda{Omni::Area.create! area_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Area, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "area" do p = create(Omni::Area); me = create(Omni::Area, area_id: p.area_id); me.area.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Area); c = create(Buildit::Note, notable_type: 'Omni::Area',notable_id: me.area_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
