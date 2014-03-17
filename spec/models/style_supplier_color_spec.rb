require 'spec_helper'

describe "style_supplier_color" do

  describe "requires" do
    it "style_supplier_color_id" do lambda{Omni::StyleSupplierColor.create! style_supplier_color_id nil}.should raise_error end
    it "display" do lambda{Omni::StyleSupplierColor.create! display nil}.should raise_error end
    # it "style_supplier_color_nbr" do lambda{Omni::StyleSupplierColor.create! style_supplier_color_nbr nil}.should raise_error end
    # it "style_supplier_color_type" do lambda{Omni::StyleSupplierColor.create! style_supplier_color_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::StyleSupplierColor, display: 'duptest'); dup = build(Omni::StyleSupplierColor, display: 'duptest'); dup.should_not be_valid end
    # it "style_supplier_color_nbr" do create(Omni::StyleSupplierColor, style_supplier_color_nbr: 'duptest'); dup = build(Omni::StyleSupplierColor, style_supplier_color_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "style_supplier_color_id" do me = create(Omni::StyleSupplierColor); me.style_supplier_color_id.should_not be_nil end
    # it "style_supplier_color_nbr" do me = create(Omni::StyleSupplierColor); me.style_supplier_color_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "style_supplier_color_type" do lambda{Omni::StyleSupplierColor.create! style_supplier_color_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::StyleSupplierColor, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::StyleSupplierColor); c = create(Buildit::Note, notable_type: 'Omni::StyleSupplierColor',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
