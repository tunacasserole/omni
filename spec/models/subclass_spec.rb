require 'spec_helper'

describe "subclass" do

  describe "requires" do
    it "subclass_id" do lambda{Omni::Subclass.create! subclass_id nil}.should raise_error end
    it "display" do lambda{Omni::Subclass.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Subclass, display: 'dup_test'); dup = build(Omni::Subclass, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "subclass_id" do me = create(Omni::Subclass); me.subclass_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Subclass); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "subclass_type" do lambda{Omni::Subclass.create! subclass_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Subclass, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "subclass" do p = create(Omni::Subclass); me = create(Omni::Subclass, subclass_id: p.subclass_id); me.subclass.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Subclass); c = create(Buildit::Note, notable_type: 'Omni::Subclass',notable_id: me.subclass_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
