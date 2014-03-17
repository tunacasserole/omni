require 'spec_helper'

describe "till_activity" do

  describe "requires" do
    it "till_activity_id" do lambda{Omni::TillActivity.create! till_activity_id nil}.should raise_error end
    it "display" do lambda{Omni::TillActivity.create! display nil}.should raise_error end
    it "till_activity_nbr" do lambda{Omni::TillActivity.create! till_activity_nbr nil}.should raise_error end
    # it "till_activity_type" do lambda{Omni::TillActivity.create! till_activity_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::TillActivity, display: 'dup_test'); dup = build(Omni::TillActivity, display: 'dup_test'); dup.should_not be_valid end
    it "till_activity_nbr" do create(Omni::TillActivity, till_activity_nbr: 'dup_test'); dup = build(Omni::TillActivity, till_activity_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "till_activity_id" do me = create(Omni::TillActivity); me.till_activity_id.should_not be_nil end
    it "till_activity_nbr" do me = create(Omni::TillActivity); me.till_activity_nbr.should_not be_nil end
    it "display" do me = create(Omni::TillActivity); me.display.should eq("#{me.till_display} - #{me.till_activity_date}") end
  end

  describe "lookups" do
    it "till_activity_reason" do lambda{Omni::TillActivity.create! till_activity_reason 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "till" do p = create(Omni::Till); me = create(Omni::TillActivity, till_id: p.till_id); me.till.should_not be_nil end
    it "tender" do p = create(Omni::Tender); me = create(Omni::TillActivity, tender_id: p.tender_id); me.tender.should_not be_nil end
    it "payment" do p = create(Omni::Payment); me = create(Omni::TillActivity, payment_id: p.payment_id); me.payment.should_not be_nil end
    it "user" do p = create(Buildit::User); me = create(Omni::TillActivity, user_id: p.user_id); me.user.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::TillActivity); c = create(Buildit::Note, notable_type: 'Omni::TillActivity',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
