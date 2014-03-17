require 'spec_helper'

describe "shipment_detail" do

  describe "requires" do
    it "shipment_detail_id" do lambda{Omni::ShipmentDetail.create! shipment_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::ShipmentDetail.create! display nil}.should raise_error end
    it "shipment_id" do lambda{Omni::ShipmentDetail.create! shipment_id nil}.should raise_error end
    it "pick_id" do lambda{Omni::ShipmentDetail.create! pick_id nil}.should raise_error end
    it "container_id" do lambda{Omni::ShipmentDetail.create! container_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ShipmentDetail, display: 'dup_test'); dup = build(Omni::ShipmentDetail, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "shipment_detail_id" do me = create(Omni::ShipmentDetail); me.shipment_detail_id.should_not be_nil end
    it "display" do me = create(Omni::ShipmentDetail); me.display.should eq("#{me.shipment_display} - #{me.pick_display}") end
  end

  describe "lookups" do
    # it "shipment_detail_type" do lambda{Omni::ShipmentDetail.create! shipment_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "shipment" do p = create(Omni::Shipment); me = create(Omni::ShipmentDetail, shipment_id: p.shipment_id); me.shipment.should_not be_nil end
    it "pick" do p = create(Omni::Pick); me = create(Omni::ShipmentDetail, pick_id: p.pick_id); me.pick.should_not be_nil end
    it "container" do p = create(Omni::Container); me = create(Omni::ShipmentDetail, container_id: p.container_id); me.container.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ShipmentDetail); c = create(Buildit::Note, notable_type: 'Omni::ShipmentDetail',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
