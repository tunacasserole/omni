require 'spec_helper'

describe "projection_detail" do

  describe "requires" do
    it "projection_detail_id" do lambda{Omni::ProjectionDetail.create! projection_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::ProjectionDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ProjectionDetail, display: 'dup_test'); dup = build(Omni::ProjectionDetail, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "projection_detail_id" do me = create(Omni::ProjectionDetail); me.projection_detail_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::ProjectionDetail); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "projection_detail_type" do lambda{Omni::ProjectionDetail.create! projection_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ProjectionDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "projection_detail" do p = create(Omni::ProjectionDetail); me = create(Omni::ProjectionDetail, projection_detail_id: p.projection_detail_id); me.projection_detail.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ProjectionDetail); c = create(Buildit::Note, notable_type: 'Omni::ProjectionDetail',notable_id: me.projection_detail_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
