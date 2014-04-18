require 'spec_helper'

describe "shipment" do
  let(:me) { create(Omni::Shipment, shippable_type: 'Omni::OrderDetail', shippable_id: '123') }

  describe "requires" do
    it "shipment_id" do lambda{Omni::Shipment.create! shipment_id nil}.should raise_error end
    it "display" do lambda{Omni::Shipment.create! display nil}.should raise_error end
    it "shipment_nbr" do lambda{Omni::Shipment.create! shipment_nbr nil}.should raise_error end
    it "shippable_type" do lambda{Omni::Shipment.create! shippable_type nil}.should raise_error end
    it "shippable_id" do lambda{Omni::Shipment.create! shippable_id nil}.should raise_error end
    it "location_id" do lambda{Omni::Shipment.create! create_date nil}.should raise_error end
    it "create_date" do lambda{Omni::Shipment.create! create_date nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do build(Omni::Shipment, display: me.display).should_not be_valid end
    it "shipment_nbr" do build(Omni::Shipment, shipment_nbr: me.shipment_nbr).should_not be_valid end
  end

  describe "defaults" do
    it "shipment_id" do me.shipment_id.should_not be_nil end
    it "shipment_nbr" do me.shipment_nbr.should_not be_nil end
    it "display" do me.display.should eq("Ship To: #{me.ship_name} - Created: #{me.create_date}") end
  end

  describe "lookups" do
    # it "shipment_type" do lambda{Omni::Shipment.create! shipment_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "supplier" do p = create(Omni::Supplier); me = create(Omni::Shipment, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    it "location" do p = create(Omni::Location); me = create(Omni::Shipment, location_id: p.location_id); me.location.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Shipment',notable_id: me.shipment_id); me.notes.count.should eq(1) end
    # it "events" do create(Buildit::Event, eventable_type: 'Omni::Shipment', eventable_id: me.shipment_id); me.events.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "default state to draft" do
      me.state.should eq('draft')
    end

    # SHIP METHOD (formerly send)
    it "on ship update ship_date" do
      me.ship
      me.ship_date.should eq(Date.today)
    end

    # it "on ship to customer, set state to complete" do
    #   me.ship
    #   me.state.should eq('complete')
    # end

    # it "on ship to customer, update receipt date to current date" do
    #   me.ship
    #   me.receipt_date.should eq(Date.today)
    # end

    it "on ship to store, set state to shipped" do
      me.ship
      me.state.should eq('shipped')
    end

    it "on ship to store, write SLA - SendShipToStore" do
      me.ship
    end

    # RECEIVE METHOD
    it "on receive a shipment to a store where state is shipped, update receipt_date" do
      me = create(Omni::Shipment, state: 'shipped')
      me.receive
      me.receipt_date.should eq(Date.today)
    end

    it "on receive a shipment to a store where state is shipped, update state to complete" do
      me = create(Omni::Shipment, state: 'shipped')
      me.receive
      me.state.should eq('complete')
    end

    it "on receive a shipment to a store where state is shipped, write SLA - ReceiveShip  " do
      me = create(Omni::Shipment, state: 'shipped')
      me.receive
      me.state.should eq('complete')
    end

    # CANCEL METHOD
    it "on cancel, if shipment state is new, set state to cancelled" do
      me.cancel
      me.state.should eq('cancelled')
    end

    it "on cancel, if shipment state is new, update cancel date and cancel user" do
      me.cancel
      me.cancel_date.should eq(Date.today)
      me.cancel_user_id.should_not be_nil
    end
  end


end
