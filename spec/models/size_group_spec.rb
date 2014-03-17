require 'spec_helper'

describe "size_group" do

  describe "requires" do
    it "size_group_id" do lambda{Omni::SizeGroup.create! size_group_id nil}.should raise_error end
    it "display" do lambda{Omni::SizeGroup.create! display nil}.should raise_error end
    # it "size_group_nbr" do lambda{Omni::SizeGroup.create! size_group_nbr nil}.should raise_error end
    # it "size_group_type" do lambda{Omni::SizeGroup.create! size_group_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SizeGroup, display: 'duptest'); dup = build(Omni::SizeGroup, display: 'duptest'); dup.should_not be_valid end
    # it "size_group_nbr" do create(Omni::SizeGroup, size_group_nbr: 'duptest'); dup = build(Omni::SizeGroup, size_group_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "size_group_id" do me = create(Omni::SizeGroup); me.size_group_id.should_not be_nil end
    # it "size_group_nbr" do me = create(Omni::SizeGroup); me.size_group_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "size_group_type" do lambda{Omni::SizeGroup.create! size_group_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SizeGroup, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SizeGroup); c = create(Buildit::Note, notable_type: 'Omni::SizeGroup',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
