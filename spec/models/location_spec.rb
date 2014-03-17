require 'spec_helper'

describe "location" do

  describe "requires" do
    it "location_id" do lambda{Omni::Location.create! location_id nil}.should raise_error end
    it "display" do lambda{Omni::Location.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Location, display: 'dup_test'); dup = build(Omni::Location, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "location_id" do me = create(Omni::Location); me.location_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Location); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "location_type" do lambda{Omni::Location.create! location_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Location, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "location" do p = create(Omni::Location); me = create(Omni::Location, location_id: p.location_id); me.location.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Location); c = create(Buildit::Note, notable_type: 'Omni::Location',notable_id: me.location_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
