require 'spec_helper'

describe "projection_reason" do

  describe "requires" do
    it "projection_reason_id" do lambda{Omni::ProjectionReason.create! projection_reason_id nil}.should raise_error end
    it "display" do lambda{Omni::ProjectionReason.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::ProjectionReason, display: 'dup_test'); dup = build(Omni::ProjectionReason, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "projection_reason_id" do me = create(Omni::ProjectionReason); me.projection_reason_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::ProjectionReason); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "projection_reason_type" do lambda{Omni::ProjectionReason.create! projection_reason_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ProjectionReason, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "projection_reason" do p = create(Omni::ProjectionReason); me = create(Omni::ProjectionReason, projection_reason_id: p.projection_reason_id); me.projection_reason.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ProjectionReason); c = create(Buildit::Note, notable_type: 'Omni::ProjectionReason',notable_id: me.projection_reason_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
