require 'spec_helper'

describe "style_color" do

  describe "requires" do
    it "style_color_id" do lambda{Omni::StyleColor.create! style_color_id nil}.should raise_error end
    it "display" do lambda{Omni::StyleColor.create! display nil}.should raise_error end
    it "style_id" do lambda{Omni::StyleColor.create! style_id nil}.should raise_error end
    it "color_id" do lambda{Omni::StyleColor.create! color_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::StyleColor, display: 'duptest'); dup = build(Omni::StyleColor, display: 'duptest'); dup.should_not be_valid end
    # it "style_color_nbr" do create(Omni::StyleColor, style_color_nbr: 'duptest'); dup = build(Omni::StyleColor, style_color_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "style_color_id" do me = create(Omni::StyleColor); me.style_color_id.should_not be_nil end
    it "display" do
     me = create(Omni::StyleColor)
     me.display.should eq("#{me.style_display} - #{me.color_display}")
    end
  end

  describe "lookups" do
    # it "style_color_type" do lambda{Omni::StyleColor.create! style_color_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::StyleColor, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::StyleColor); c = create(Buildit::Note, notable_type: 'Omni::StyleColor',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
