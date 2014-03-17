require 'spec_helper'

describe "region" do

  describe "requires" do
    it "region_id" do lambda{Omni::Region.create! region_id nil}.should raise_error end
    it "display" do lambda{Omni::Region.create! display nil}.should raise_error end
    # it "region_nbr" do lambda{Omni::Region.create! region_nbr nil}.should raise_error end
    # it "region_type" do lambda{Omni::Region.create! region_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Region, display: 'dup_test'); dup = build(Omni::Region, display: 'dup_test'); dup.should_not be_valid end
    # it "region_nbr" do create(Omni::Region, region_nbr: 'dup_test'); dup = build(Omni::Region, region_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "region_id" do me = create(Omni::Region); me.region_id.should_not be_nil end
    # it "region_nbr" do me = create(Omni::Region); me.region_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "region_type" do lambda{Omni::Region.create! region_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Region, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Region); c = create(Buildit::Note, notable_type: 'Omni::Region',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
