require 'spec_helper'

describe "supplier_rating" do

  describe "requires" do
    it "supplier_rating_id" do lambda{Omni::SupplierRating.create! supplier_rating_id nil}.should raise_error end
    it "display" do lambda{Omni::SupplierRating.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SupplierRating, display: 'dup_test'); dup = build(Omni::SupplierRating, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "supplier_rating_id" do me = create(Omni::SupplierRating); me.supplier_rating_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::SupplierRating); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "supplier_rating_type" do lambda{Omni::SupplierRating.create! supplier_rating_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier_rating" do p = create(Omni::SupplierRating); me = create(Omni::SupplierRating, supplier_rating_id: p.supplier_rating_id); me.supplier_rating.should_not be_nil end
    # it "supplier_rating" do p = create(Omni::SupplierRating); me = create(Omni::SupplierRating, supplier_rating_id: p.supplier_rating_id); me.supplier_rating.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SupplierRating); c = create(Buildit::Note, notable_type: 'Omni::SupplierRating',notable_id: me.supplier_rating_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
