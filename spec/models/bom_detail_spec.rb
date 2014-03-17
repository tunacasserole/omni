require 'spec_helper'

describe "bom_detail" do

  describe "requires" do
    it "bom_detail_id" do lambda{Omni::BomDetail.create! bom_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::BomDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::BomDetail, display: 'dup_test'); dup = build(Omni::BomDetail, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "bom_detail_id" do me = create(Omni::BomDetail); me.bom_detail_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::BomDetail); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "bom_detail_type" do lambda{Omni::BomDetail.create! bom_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::BomDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "bom_detail" do p = create(Omni::BomDetail); me = create(Omni::BomDetail, bom_detail_id: p.bom_detail_id); me.bom_detail.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::BomDetail); c = create(Buildit::Note, notable_type: 'Omni::BomDetail',notable_id: me.bom_detail_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
