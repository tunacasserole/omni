require 'spec_helper'

describe "supplier_rating_subject" do

  describe "requires" do
    it "supplier_rating_subject_id" do lambda{Omni::SupplierRatingSubject.create! supplier_rating_subject_id nil}.should raise_error end
    it "display" do lambda{Omni::SupplierRatingSubject.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SupplierRatingSubject, display: 'dup_test'); dup = build(Omni::SupplierRatingSubject, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "supplier_rating_subject_id" do me = create(Omni::SupplierRatingSubject); me.supplier_rating_subject_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::SupplierRatingSubject); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "supplier_rating_subject_type" do lambda{Omni::SupplierRatingSubject.create! supplier_rating_subject_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier_rating_subject" do p = create(Omni::SupplierRatingSubject); me = create(Omni::SupplierRatingSubject, supplier_rating_subject_id: p.supplier_rating_subject_id); me.supplier_rating_subject.should_not be_nil end
    # it "supplier_rating_subject" do p = create(Omni::SupplierRatingSubject); me = create(Omni::SupplierRatingSubject, supplier_rating_subject_id: p.supplier_rating_subject_id); me.supplier_rating_subject.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SupplierRatingSubject); c = create(Buildit::Note, notable_type: 'Omni::SupplierRatingSubject',notable_id: me.supplier_rating_subject_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
