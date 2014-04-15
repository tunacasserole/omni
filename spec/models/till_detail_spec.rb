require 'spec_helper'

describe "till_detail" do
  let(:me) { create(Omni::TillDetail) }

  describe "requires" do
    it "till_detail_id" do lambda{Omni::TillDetail.create! till_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::TillDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do build(Omni::TillDetail, display: me.display).should_not be_valid end
  end

  describe "defaults" do
    it "till_detail_id" do me.till_detail_id.should_not be_nil end
    it "display" do me.display.should eq("#{me.till_display} - #{me.tender_display}") end
  end

  describe "lookups" do
    # it "till_detail_type" do lambda{Omni::TillDetail.create! till_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "till" do p = create(Omni::Till); me = create(Omni::TillDetail, till_id: p.till_id); me.till.should_not be_nil end
    it "tender" do p = create(Omni::Tender); me = create(Omni::TillDetail, tender_id: p.tender_id); me.tender.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do c = create(Buildit::Note, notable_type: 'Omni::TillDetail',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

end
