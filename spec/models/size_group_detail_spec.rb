require 'spec_helper'

describe "size_group_detail" do

  describe "requires" do
    it "size_group_detail_id" do lambda{Omni::SizeGroupDetail.create! size_group_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::SizeGroupDetail.create! display nil}.should raise_error end
    # it "size_group_detail_nbr" do lambda{Omni::SizeGroupDetail.create! size_group_detail_nbr nil}.should raise_error end
    # it "size_group_detail_type" do lambda{Omni::SizeGroupDetail.create! size_group_detail_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SizeGroupDetail, display: 'dup_test'); dup = build(Omni::SizeGroupDetail, display: 'dup_test'); dup.should_not be_valid end
    # it "size_group_detail_nbr" do create(Omni::SizeGroupDetail, size_group_detail_nbr: 'dup_test'); dup = build(Omni::SizeGroupDetail, size_group_detail_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "size_group_detail_id" do me = create(Omni::SizeGroupDetail); me.size_group_detail_id.should_not be_nil end
    # it "size_group_detail_nbr" do me = create(Omni::SizeGroupDetail); me.size_group_detail_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "size_group_detail_type" do lambda{Omni::SizeGroupDetail.create! size_group_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SizeGroupDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SizeGroupDetail); c = create(Buildit::Note, notable_type: 'Omni::SizeGroupDetail',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
