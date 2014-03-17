require 'spec_helper'

describe "company" do

  describe "requires" do
    it "company_id" do lambda{Omni::Company.create! company_id nil}.should raise_error end
    it "display" do lambda{Omni::Company.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Company, display: 'dup_test'); dup = build(Omni::Company, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "company_id" do me = create(Omni::Company); me.company_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Company); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "company_type" do lambda{Omni::Company.create! company_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Company, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "company" do p = create(Omni::Company); me = create(Omni::Company, company_id: p.company_id); me.company.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Company); c = create(Buildit::Note, notable_type: 'Omni::Company',notable_id: me.company_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
