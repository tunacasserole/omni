require 'spec_helper'

describe "bin" do

  describe "requires" do
    it "bin_id" do lambda{Omni::Bin.create! bin_id nil}.should raise_error end
    it "display" do lambda{Omni::Bin.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Bin, display: 'dup_test'); dup = build(Omni::Bin, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "bin_id" do me = create(Omni::Bin); me.bin_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Bin); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "bin_type" do lambda{Omni::Bin.create! bin_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Bin, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "bin" do p = create(Omni::Bin); me = create(Omni::Bin, bin_id: p.bin_id); me.bin.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Bin); c = create(Buildit::Note, notable_type: 'Omni::Bin',notable_id: me.bin_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
