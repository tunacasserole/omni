require 'spec_helper'

describe "cost_detail" do

  describe "requires" do
    it "cost_detail_id" do lambda{Omni::CostDetail.create! cost_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::CostDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::CostDetail, display: 'dup_test'); dup = build(Omni::CostDetail, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "cost_detail_id" do me = create(Omni::CostDetail); me.cost_detail_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::CostDetail); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "cost_detail_type" do lambda{Omni::CostDetail.create! cost_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::CostDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "cost_detail" do p = create(Omni::CostDetail); me = create(Omni::CostDetail, cost_detail_id: p.cost_detail_id); me.cost_detail.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::CostDetail); c = create(Buildit::Note, notable_type: 'Omni::CostDetail',notable_id: me.cost_detail_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
