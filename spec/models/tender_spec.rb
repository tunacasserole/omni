require 'spec_helper'

describe "tender" do

  describe "requires" do
    it "tender_id" do lambda{Omni::Tender.create! tender_id nil}.should raise_error end
    it "display" do lambda{Omni::Tender.create! display nil}.should raise_error end
    it "short_name" do lambda{Omni::Tender.create! short_name nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Tender, display: 'dup_test'); dup = build(Omni::Tender, display: 'dup_test'); dup.should_not be_valid end
    # it "tender_nbr" do create(Omni::Tender, tender_nbr: 'dup_test'); dup = build(Omni::Tender, tender_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "tender_id" do me = create(Omni::Tender); me.tender_id.should_not be_nil end
    # it "tender_nbr" do me = create(Omni::Tender); me.tender_nbr.should_not be_nil end
  end

  describe "lookups" do
    it "tender_type" do lambda{Omni::Tender.create! tender_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "gl_account" do p = create(Omni::GlAccount); me = create(Omni::Tender, gl_account_id: p.gl_account_id); me.gl_account.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Tender); c = create(Buildit::Note, notable_type: 'Omni::Tender',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
