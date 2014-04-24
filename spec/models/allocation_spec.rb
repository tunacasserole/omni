require 'spec_helper'

describe "allocation" do
  let(:me) { create( Omni::Allocation ) }

  describe "requires" do
    it "allocation_id" do lambda{Omni::Allocation.create! allocation_id nil}.should raise_error end
    it "display" do lambda{Omni::Allocation.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Allocation, display: 'dup_test'); dup = build(Omni::Allocation, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "allocation_id" do me = create(Omni::Allocation); me.allocation_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Allocation); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "allocation_type" do lambda{Omni::Allocation.create! allocation_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Allocation, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "allocation" do p = create(Omni::Allocation); me = create(Omni::Allocation, allocation_id: p.allocation_id); me.allocation.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Allocation); c = create(Buildit::Note, notable_type: 'Omni::Allocation',notable_id: me.allocation_id); me.notes.count.should eq(1) end
  end

  describe "state machine should" do
    it "allocate" do
      me.allocate
      me.state.should eq 'draft'
    end
  end


end
