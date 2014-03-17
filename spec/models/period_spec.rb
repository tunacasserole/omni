require 'spec_helper'

describe "period" do

  describe "requires" do
    it "period_id" do lambda{Omni::Period.create! period_id nil}.should raise_error end
    it "display" do lambda{Omni::Period.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Period, display: 'dup_test'); dup = build(Omni::Period, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "period_id" do me = create(Omni::Period); me.period_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Period); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "period_type" do lambda{Omni::Period.create! period_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Period, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "period" do p = create(Omni::Period); me = create(Omni::Period, period_id: p.period_id); me.period.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Period); c = create(Buildit::Note, notable_type: 'Omni::Period',notable_id: me.period_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
