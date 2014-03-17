require 'spec_helper'

describe "department" do

  describe "requires" do
    it "department_id" do lambda{Omni::Department.create! department_id nil}.should raise_error end
    it "display" do lambda{Omni::Department.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Department, display: 'dup_test'); dup = build(Omni::Department, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "department_id" do me = create(Omni::Department); me.department_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Department); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "department_type" do lambda{Omni::Department.create! department_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Department, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "department" do p = create(Omni::Department); me = create(Omni::Department, department_id: p.department_id); me.department.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Department); c = create(Buildit::Note, notable_type: 'Omni::Department',notable_id: me.department_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
