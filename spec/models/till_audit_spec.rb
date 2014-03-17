require 'spec_helper'

describe "till_audit" do

  describe "requires" do
    it "till_audit_id" do lambda{Omni::TillAudit.create! till_audit_id nil}.should raise_error end
    it "display" do lambda{Omni::TillAudit.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::TillAudit, display: 'dup_test'); dup = build(Omni::TillAudit, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "till_audit_id" do me = create(Omni::TillAudit); me.till_audit_id.should_not be_nil end
    it "display" do me = create(Omni::TillAudit); me.display.should eq("#{me.till_display} - #{me.tender_display} - #{me.audit_date}") end
  end

  describe "lookups" do
    # it "till_audit_type" do lambda{Omni::TillAudit.create! till_audit_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "till" do p = create(Omni::Till); me = create(Omni::TillAudit, till_id: p.till_id); me.till.should_not be_nil end
    it "tender" do p = create(Omni::Tender); me = create(Omni::TillAudit, tender_id: p.tender_id); me.tender.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::TillAudit); c = create(Buildit::Note, notable_type: 'Omni::TillAudit',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
