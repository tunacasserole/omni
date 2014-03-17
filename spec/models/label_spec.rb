require 'spec_helper'

describe "label" do

  describe "requires" do
    it "label_id" do lambda{Omni::Label.create! label_id nil}.should raise_error end
    it "display" do lambda{Omni::Label.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Label, display: 'dup_test'); dup = build(Omni::Label, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "label_id" do me = create(Omni::Label); me.label_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Label); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "label_type" do lambda{Omni::Label.create! label_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Label, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "label" do p = create(Omni::Label); me = create(Omni::Label, label_id: p.label_id); me.label.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Label); c = create(Buildit::Note, notable_type: 'Omni::Label',notable_id: me.label_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
