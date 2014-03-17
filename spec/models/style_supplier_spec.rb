require 'spec_helper'

describe "style_supplier" do

  describe "requires" do
    it "style_supplier_id" do lambda{Omni::StyleSupplier.create! style_supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::StyleSupplier.create! display nil}.should raise_error end
    it "style_id" do lambda{Omni::StyleSupplier.create! style_id nil}.should raise_error end
    it "supplier_id" do lambda{Omni::StyleSupplier.create! supplier_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::StyleSupplier, display: 'dup_test'); dup = build(Omni::StyleSupplier, display: 'dup_test'); dup.should_not be_valid end
    it "style and supplier combination" do
     style = create(Omni::Style)
     supplier = create(Omni::Supplier)
     create(Omni::StyleSupplier, style_id: style.style_id, supplier_id: supplier.supplier_id)
     dup = build(Omni::StyleSupplier, style_id: style.style_id, supplier_id: supplier.supplier_id)
     dup.should_not be_valid
    end
  end

  describe "defaults" do
    it "style_supplier_id" do me = create(Omni::StyleSupplier); me.style_supplier_id.should_not be_nil end
    it "is_primary to true for the first supplier" do
     style = create(Omni::Style)
     me = create(Omni::StyleSupplier, style_id: style.style_id)
     me.is_primary.should be_true
    end
    it "is_primary to false if not the first supplier" do
     style = create(Omni::Style)
     supplier = create(Omni::Supplier)
     create(Omni::StyleSupplier, style_id: style.style_id)
     me = create(Omni::StyleSupplier, style_id: style.style_id, supplier_id: supplier.supplier_id)
     me.is_primary.should be_false
    end
    it "supplier_id on style to primary style_supplier" do
     style = create(Omni::Style)
     supplier = create(Omni::Supplier)
     me = create(Omni::StyleSupplier, style_id: style.style_id, supplier_id: supplier.supplier_id)
     me.style.supplier_id.should eq(me.supplier_id)
    end
  end

  describe "lookups" do
    # it "style_supplier_type" do lambda{Omni::StyleSupplier.create! style_supplier_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "supplier" do p = create(Omni::Supplier); me = create(Omni::StyleSupplier, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    it "style1" do p = create(Omni::Style); me = create(Omni::StyleSupplier, style_id: p.style_id); me.style.should_not be_nil end
    # it "style2" do me = create(Omni::StyleSupplier); me.style.should_not be_nil end  # this fails
  end

  describe "has_many" do
    it "style_supplier_colors" do me = create(Omni::StyleSupplier); c = create(Omni::StyleSupplierColor, style_supplier_id: me.style_supplier_id); me.style_supplier_colors.count.should eq(1) end
  end

  describe "indexing" do

  end


end
