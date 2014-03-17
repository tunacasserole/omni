require 'spec_helper'

describe "projection" do

  describe "requires" do
    it "projection_id" do lambda{Omni::Projection.create! projection_id nil}.should raise_error end
    it "display" do lambda{Omni::Projection.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Projection, display: 'dup_test'); dup = build(Omni::Projection, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "projection_id" do me = create(Omni::Projection); me.projection_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Projection); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "projection_type" do lambda{Omni::Projection.create! projection_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Projection, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "projection" do p = create(Omni::Projection); me = create(Omni::Projection, projection_id: p.projection_id); me.projection.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Projection); c = create(Buildit::Note, notable_type: 'Omni::Projection',notable_id: me.projection_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
