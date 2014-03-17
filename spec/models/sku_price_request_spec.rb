require 'spec_helper'

describe "sku_price_request" do

  describe "requires" do
    it "sku_price_request_id" do lambda{Omni::SkuPriceRequest.create! sku_price_request_id nil}.should raise_error end
    it "display" do lambda{Omni::SkuPriceRequest.create! display nil}.should raise_error end
    # it "sku_price_request_nbr" do lambda{Omni::SkuPriceRequest.create! sku_price_request_nbr nil}.should raise_error end
    # it "sku_price_request_type" do lambda{Omni::SkuPriceRequest.create! sku_price_request_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::SkuPriceRequest, display: 'duptest'); dup = build(Omni::SkuPriceRequest, display: 'duptest'); dup.should_not be_valid end
    # it "sku_price_request_nbr" do create(Omni::SkuPriceRequest, sku_price_request_nbr: 'duptest'); dup = build(Omni::SkuPriceRequest, sku_price_request_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "sku_price_request_id" do me = create(Omni::SkuPriceRequest); me.sku_price_request_id.should_not be_nil end
    # it "sku_price_request_nbr" do me = create(Omni::SkuPriceRequest); me.sku_price_request_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "sku_price_request_type" do lambda{Omni::SkuPriceRequest.create! sku_price_request_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SkuPriceRequest, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SkuPriceRequest); c = create(Buildit::Note, notable_type: 'Omni::SkuPriceRequest',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
