require 'spec_helper'

describe "allocation_profile" do

  describe "requires" do
    it "allocation_profile_id" do lambda{Omni::AllocationProfile.create! allocation_profile_id nil}.should raise_error end
    it "display" do lambda{Omni::AllocationProfile.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::AllocationProfile, display: 'dup_test'); dup = build(Omni::AllocationProfile, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "allocation_profile_id" do me = create(Omni::AllocationProfile); me.allocation_profile_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::AllocationProfile); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "allocation_profile_type" do lambda{Omni::AllocationProfile.create! allocation_profile_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::AllocationProfile, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "allocation_profile" do p = create(Omni::AllocationProfile); me = create(Omni::AllocationProfile, allocation_profile_id: p.allocation_profile_id); me.allocation_profile.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::AllocationProfile); c = create(Buildit::Note, notable_type: 'Omni::AllocationProfile',notable_id: me.allocation_profile_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
