require 'spec_helper'

describe "style" do

  describe "requires" do
    it "style_id" do lambda{Omni::Style.create! style_id nil}.should raise_error end
    it "display" do lambda{Omni::Style.create! display nil}.should raise_error end
    it "style_nbr" do lambda{Omni::Style.create! style_nbr nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Style, display: 'dup_test'); dup = build(Omni::Style, display: 'dup_test'); dup.should_not be_valid end
    it "style_nbr" do create(Omni::Style, style_nbr: 'dup_test'); dup = build(Omni::Style, style_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "style_id" do me = create(Omni::Style); me.style_id.should_not be_nil end
    it "style_nbr" do me = create(Omni::Style); me.style_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "style_type" do lambda{Omni::Style.create! style_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Style, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Style); c = create(Buildit::Note, notable_type: 'Omni::Style',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
