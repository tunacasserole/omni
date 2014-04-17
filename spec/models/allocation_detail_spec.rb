require 'spec_helper'

describe "allocation_detail" do

  let(:me) { create(Omni::AllocationDetail) }

  describe "requires" do
    it "allocation_detail_id" do lambda{Omni::AllocationDetail.create! allocation_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::AllocationDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "allocation_detail_nbr" do build(Omni::AllocationDetail, allocation_detail_nbr: me.allocation_detail_nbr).should_not be_valid end
  end

  describe "defaults" do
    it "allocation_detail_id" do me.allocation_detail_id.should_not be_nil end
    it "allocation_detail_nbr" do me.allocation_detail_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "allocation_detail_type" do lambda{Omni::AllocationDetail.create! allocation_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::AllocationDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "allocation_detail" do p = create(Omni::AllocationDetail); me = create(Omni::AllocationDetail, allocation_detail_id: p.allocation_detail_id); me.allocation_detail.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::AllocationDetail); c = create(Buildit::Note, notable_type: 'Omni::AllocationDetail',notable_id: me.allocation_detail_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
