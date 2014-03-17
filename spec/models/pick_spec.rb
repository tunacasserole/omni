require 'spec_helper'

describe "pick" do
  let(:me) { create(Omni::Pick) }

  describe "requires" do
    it "pick_id" do lambda{Omni::Pick.create! pick_id nil}.should raise_error end
    it "display" do lambda{Omni::Pick.create! display nil}.should raise_error end
    it "pick_nbr" do lambda{Omni::Pick.create! pick_nbr nil}.should raise_error end
    it "pickable_type" do lambda{Omni::Pick.create! pickable_type nil}.should raise_error end
    it "pickable_id" do lambda{Omni::Pick.create! pickable_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do dup = build(Omni::Pick, display: me.display); dup.should_not be_valid end
    it "pick_nbr" do dup = build(Omni::Pick, pick_nbr: me.pick_nbr); dup.should_not be_valid end
  end

  describe "defaults" do
    it "pick_id" do me.pick_id.should_not be_nil end
    it "pick_nbr" do me.pick_nbr.should_not be_nil end
    it "request_units" do
      x = create(Omni::OrderDetail, order_units: 123)
      me = create(Omni::Pick, pickable_type: 'Omni::OrderDetail', pickable_id: x.order_detail_id); me.request_units.should eq(x.order_units)
    end
  end

  describe "lookups" do
    # it "pick_type" do lambda{Omni::Pick.create! pick_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "fulfillment_location" do p = create(Omni::Location); me = create(Omni::Pick, fulfillment_location_id: p.location_id); me.fulfillment_location.should_not be_nil end
    it "job" do p = create(Omni::Job, jobable_type: 'Omni::Pick', jobable_id: me.pick_id); me.job_id = p.job_id; me.job.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Pick); c = create(Buildit::Note, notable_type: 'Omni::Pick',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine should," do

    context "on create" do
      it "default state to draft" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id)
        me.state.should eq('draft')
      end

      it "suggest a fulfillment location" do
        # TODO logic
      end
    end

    context "on release" do
      it "set state to pending" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id)
        me.release
        me.state.should eq('pending')
      end
    end

    context "on start" do
      it "on set state to open" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id, state: 'pending')
        me.start
        me.state.should eq('open')
      end

      it "moves inventory to reserved" do
        # TODO
      end
    end

    context "on start" do
      it "set state to complete" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id, state: 'open')
        me.complete
        me.state.should eq('complete')
      end
      it "move inventory to shipping" do
      end
    end

    context "on ship" do
      it "set state to shipped" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id, state: 'complete')
        me.ship
        me.state.should eq('shipped')
      end

      it "reduce on hand inventory" do
      end
    end

    context "on cancel" do
      it "set state to cancelled" do
        l = create(Omni::Location)
        me = create(Omni::Pick, fulfillment_location_id: l.location_id, state: 'pending')
        me.cancel
        me.state.should eq('cancelled')
      end

      it "restores on hand inventory" do
      end
    end

  end
end
