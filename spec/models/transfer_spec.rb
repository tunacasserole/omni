require 'spec_helper'

describe "transfer" do
  let(:me) { create(Omni::Transfer) }

  describe "requires" do
    it "transfer_id" do lambda{Omni::Transfer.create! transfer_id nil}.should raise_error end
    it "display" do lambda{Omni::Transfer.create! display nil}.should raise_error end
    it "transfer_nbr" do lambda{Omni::Transfer.create! transfer_nbr nil}.should raise_error end
    it "transfer_type" do lambda{Omni::Transfer.create! transfer_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do build(Omni::Transfer, display: me.display).should_not be_valid end
    it "transfer_nbr" do build(Omni::Transfer, transfer_nbr: me.transfer_nbr).should_not be_valid end
  end

  describe "defaults" do
    it "transfer_id" do me.transfer_id.should_not be_nil end
    it "transfer_nbr" do me.transfer_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "transfer_type" do lambda{Omni::Transfer.create! transfer_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "requesting_location" do me.requesting_location_id = create(Omni::Location).location_id; me.requesting_location.should_not be_nil end
    it "fulfillment_location" do me.fulfillment_location_id = create(Omni::Location).location_id; me.fulfillment_location.should_not be_nil end
    it "transfer_reason" do me.transfer_reason_id = create(Omni::TransferReason).transfer_reason_id; me.transfer_reason.should_not be_nil end
    it "request_user" do me.request_user_id = create(Buildit::User).user_id; me.request_user.should_not be_nil end
    it "cancel_user" do me.cancel_user_id = create(Buildit::User).user_id; me.cancel_user.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Transfer',notable_id: me.transfer_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine: " do
    it "default state to draft" do
      me.state.should eq('draft')
    end
    it "approve" do
      me.picks.first.should be_nil
      me.approve
      me.state.should eq('pending')
      me.picks.first.should_not be_nil
    end
    it "ship" do
      me.approve
      me.ship
      me.state.should eq('shipped')
      me.ship_date.should eq(Date.today)
      # it "update on-hand inventory" do
      #   s = create(Omni::Sku)
      #   me = create(Omni::Transfer, sku_id: s.sku_id, request_units: 999)
      #   me.ship
      #   me.inventory.on_hand_units.should eq(999)
      # end
    end

    it "receive" do
      l = create(Omni::Location)
      s = create(Omni::Sku)
      create(Omni::Inventory, sku_id: s.sku_id, location_id: l.location_id)
      me = create(Omni::Transfer, sku_id: s.sku_id, request_units: 999, requesting_location_id: l.location_id, fulfillment_location_id: l.location_id, state: 'shipped')
      me.receive
      me.state.should eq('complete')
      # i.in_transit_units.should eq(999)
    end

    it "cancel" do
      me.cancel
      me.state.should eq('cancelled')
      me.cancel_date.should eq(Date.today)
      # me.cancel_user_id.should_not be_nil
      # i.in_transit_units.should eq(999)
    end
  end
end
