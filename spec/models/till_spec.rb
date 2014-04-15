require 'spec_helper'

describe "till" do
  let(:me) { create(Omni::Till) }

  describe "requires" do
    it "till_id" do lambda{Omni::Till.create! till_id nil}.should raise_error end
    it "display" do lambda{Omni::Till.create! display nil}.should raise_error end
    it "till_nbr" do lambda{Omni::Till.create! till_nbr nil}.should raise_error end
    it "location_id" do lambda{Omni::Till.create! location_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Till, display: 'dup_test'); dup = build(Omni::Till, display: 'dup_test'); dup.should_not be_valid end
    it "till_nbr" do create(Omni::Till, till_nbr: '123'); dup = build(Omni::Till, till_nbr: '123'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "till_id" do me.till_id.should_not be_nil end
    it "till_nbr" do me.till_nbr.should_not be_nil end
    it "display" do me.display.should eq("#{me.location_display} - Till: #{me.till_nbr}") end
  end

  describe "lookups" do
    # it "till_type" do lambda{Omni::Till.create! till_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::Till, location_id: p.location_id); me.location.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    it "till_activities" do create(Omni::TillActivity, till_id: me.till_id); me.till_activities.count.should eq(1) end
    it "till_audits" do create(Omni::TillAudit, till_id: me.till_id); me.till_audits.count.should eq(1) end
    it "terminals" do create(Omni::Terminal, till_id: me.till_id); me.terminals.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "hooks should " do
    it "creates till details for every tender type" do
      me.till_details.count.should eq(Omni::Tender.count)
    end
  end


end
