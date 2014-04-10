require 'spec_helper'

describe "projection_location" do
  let(:me) { create(Omni::ProjectionLocation) }

  describe "requires" do
    it "projection_location_id" do lambda{Omni::ProjectionLocation.create! projection_location_id nil}.should raise_error end
    it "display" do lambda{Omni::ProjectionLocation.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::ProjectionLocation, display: 'dup_test'); dup = build(Omni::ProjectionLocation, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "projection_location_id" do me = create(Omni::ProjectionLocation); me.projection_location_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::ProjectionLocation); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "projection_location_type" do lambda{Omni::ProjectionLocation.create! projection_location_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ProjectionLocation, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "projection_location" do p = create(Omni::ProjectionLocation); me = create(Omni::ProjectionLocation, projection_location_id: p.projection_location_id); me.projection_location.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ProjectionLocation); c = create(Buildit::Note, notable_type: 'Omni::ProjectionLocation',notable_id: me.projection_location_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
