require 'spec_helper'

describe "style_color_size" do

  describe "requires" do
    it "style_color_size_id" do lambda{Omni::StyleColorSize.create! style_color_size_id nil}.should raise_error end
    it "display" do lambda{Omni::StyleColorSize.create! display nil}.should raise_error end
    # it "style_color_size_nbr" do lambda{Omni::StyleColorSize.create! style_color_size_nbr nil}.should raise_error end
    # it "style_color_size_type" do lambda{Omni::StyleColorSize.create! style_color_size_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::StyleColorSize, display: 'duptest'); dup = build(Omni::StyleColorSize, display: 'duptest'); dup.should_not be_valid end
    # it "style_color_size_nbr" do create(Omni::StyleColorSize, style_color_size_nbr: 'duptest'); dup = build(Omni::StyleColorSize, style_color_size_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "style_color_size_id" do me = create(Omni::StyleColorSize); me.style_color_size_id.should_not be_nil end
    # it "style_color_size_nbr" do me = create(Omni::StyleColorSize); me.style_color_size_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "style_color_size_type" do lambda{Omni::StyleColorSize.create! style_color_size_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::StyleColorSize, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::StyleColorSize); c = create(Buildit::Note, notable_type: 'Omni::StyleColorSize',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
