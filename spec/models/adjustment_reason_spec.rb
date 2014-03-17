require 'spec_helper'

describe "adjustment_reason" do

  describe "requires" do
    it "adjustment_reason_id" do lambda{Omni::AdjustmentReason.create! adjustment_reason_id nil}.should raise_error end
    it "display" do lambda{Omni::AdjustmentReason.create! display nil}.should raise_error end
    it "ruleset_id" do lambda{Omni::AdjustmentReason.create! ruleset_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::AdjustmentReason, display: 'dup_test'); dup = build(Omni::AdjustmentReason, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "adjustment_reason_id" do me = create(Omni::AdjustmentReason); me.adjustment_reason_id.should_not be_nil end
  end

  describe "lookups" do
    # it "adjustment_reason_type" do lambda{Omni::AdjustmentReason.create! adjustment_reason_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "ruleset" do p = create(Omni::Ruleset); me = create(Omni::AdjustmentReason, ruleset_id: p.ruleset_id); me.ruleset.should_not be_nil end
  end

  describe "has_many" do
    it "adjustments" do me = create(Omni::AdjustmentReason); c = create(Omni::Adjustment, adjustment_reason_id: me.adjustment_reason_id); me.adjustments.count.should eq(1) end
  end

  describe "indexing" do

  end


end
