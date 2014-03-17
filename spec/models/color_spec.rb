require 'spec_helper'

describe "color" do

  describe "requires" do
    it "color_id" do lambda{Omni::Color.create! color_id nil}.should raise_error end
    it "display" do lambda{Omni::Color.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Color, display: 'dup_test'); dup = build(Omni::Color, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "color_id" do me = create(Omni::Color); me.color_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Color); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "color_type" do lambda{Omni::Color.create! color_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Color, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "color" do p = create(Omni::Color); me = create(Omni::Color, color_id: p.color_id); me.color.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Color); c = create(Buildit::Note, notable_type: 'Omni::Color',notable_id: me.color_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
