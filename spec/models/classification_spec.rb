require 'spec_helper'

describe "classification" do

  describe "requires" do
    it "classification_id" do lambda{Omni::Classification.create! classification_id nil}.should raise_error end
    it "display" do lambda{Omni::Classification.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Classification, display: 'dup_test'); dup = build(Omni::Classification, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "classification_id" do me = create(Omni::Classification); me.classification_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Classification); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "classification_type" do lambda{Omni::Classification.create! classification_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Classification, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "classification" do p = create(Omni::Classification); me = create(Omni::Classification, classification_id: p.classification_id); me.classification.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Classification); c = create(Buildit::Note, notable_type: 'Omni::Classification',notable_id: me.classification_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
