require 'spec_helper'

describe "location_user" do

  describe "requires" do
    it "location_user_id" do lambda{Omni::LocationUser.create! location_user_id nil}.should raise_error end
    it "display" do lambda{Omni::LocationUser.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::LocationUser, display: 'dup_test'); dup = build(Omni::LocationUser, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "location_user_id" do me = create(Omni::LocationUser); me.location_user_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::LocationUser); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "location_user_type" do lambda{Omni::LocationUser.create! location_user_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::LocationUser, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "location_user" do p = create(Omni::LocationUser); me = create(Omni::LocationUser, location_user_id: p.location_user_id); me.location_user.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::LocationUser); c = create(Buildit::Note, notable_type: 'Omni::LocationUser',notable_id: me.location_user_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
