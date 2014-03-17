require 'spec_helper'

describe "shipping_rate" do

  describe "requires" do
    it "shipping_rate_id" do lambda{Omni::ShippingRate.create! shipping_rate_id nil}.should raise_error end
    it "supplier_id" do lambda{Omni::ShippingRate.create! supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::ShippingRate.create! display nil}.should raise_error end
    it "shipping_rate_name" do lambda{Omni::ShippingRate.create! shipping_rate_name nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ShippingRate, display: 'dup_test'); dup = build(Omni::ShippingRate, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "shipping_rate_id" do me = create(Omni::ShippingRate); me.shipping_rate_id.should_not be_nil end
    it "display" do me = create(Omni::ShippingRate); me.display.should eq("#{me.supplier_display} - #{me.shipping_rate_name}") end
  end

  describe "lookups" do
    # it "shipping_rate_type" do lambda{Omni::ShippingRate.create! shipping_rate_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "supplier" do p = create(Omni::Supplier); me = create(Omni::ShippingRate, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ShippingRate); c = create(Buildit::Note, notable_type: 'Omni::ShippingRate',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
