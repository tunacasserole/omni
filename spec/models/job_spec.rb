require 'spec_helper'

describe "job" do
  let(:location) { create ( Omni::Location ) }
  let(:order) { create( Omni::Order, location_id: location.location_id ) }
  let(:sku) { create( Omni::Sku ) }
  let(:order_detail) { create( Omni::OrderDetail, order_id: order.order_id, order_units: 10, sku_id: sku.sku_id ) }
  let(:me) { create( Omni::Job, jobable_type: "Omni::OrderDetail", jobable_id: order_detail.order_detail_id ) }

  describe "requires" do
    it "job_id" do lambda{Omni::Job.create! job_id nil}.should raise_error end
    # it "display" do lambda{Omni::Job.create! display nil}.should raise_error end
    it "job_nbr" do lambda{Omni::Job.create! job_nbr nil}.should raise_error end
    it "job_type" do lambda{Omni::Job.create! job_type nil}.should raise_error end
    it "jobable_id" do lambda{Omni::Job.create! jobable_id nil}.should raise_error end
    it "jobable_type" do lambda{Omni::Job.create! jobable_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do build(Omni::Job, display: me.display).should_not be_valid end
    it "job_nbr" do build(Omni::Job, jobable_type: "Omni::OrderDetail", jobable_id: order_detail.order_detail_id, job_nbr: me.job_nbr).should_not be_valid end
  end

  describe "defaults" do
    it "job_id" do
     me.job_id.should_not be_nil
   end
    it "job_nbr" do
      # puts "me.job_nbr is #{me.job_nbr}"
      me.job_nbr.should_not be_nil
    end
    # it "display" do me.display.should_not be_nil end
    # it "display" do me.display.should eq("job: #{me.job_nbr}") end
    it "request_units" do
      # x = create(Omni::OrderDetail, order_units: 123)
      # x.order_units.should eq(123)
      me.request_units.should eq(order_detail.order_units)
    end
  end

  describe "lookups" do
    it "job_type" do lambda{Omni::Job.create! job_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "production_location" do me.production_location_id = create(Omni::Location).location_id; me.production_location.should_not be_nil end
    it "supplier" do me.supplier_id = create(Omni::Supplier).supplier_id; me.supplier.should_not be_nil end
    it "sku" do me.sku_id = create(Omni::Sku).sku_id; me.sku.should_not be_nil end
    it "order_detail" do me.order_detail.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Job',notable_id: me.job_id); me.notes.count.should eq(1) end
    it "picks" do create(Omni::Pick, pickable_type: 'Omni::Job', pickable_id: me.job_id, pick_nbr: 999); me.picks.first.should_not be_nil end
  end

  describe "has_one" do
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "create" do
      p = create(Omni::Pick, pickable_type: 'Omni::OrderDetail', pickable_id: order_detail.order_detail_id)
      j = create(Omni::Job, jobable_type: "Omni::OrderDetail", jobable_id: order_detail.order_detail_id)
      j.state.should eq('draft')
      # p = Omni::Pick.where(pick_id: p.pick_id).first
      # p.job_id.should eq(me.job_id)
    end
    it "release" do
      me.release
      me.state.should eq('pending')
      me.release_date.should eq(Date.today)
      # TODO "generate picks for components"
    end

    it "start" do
      me.release
      me.start
      me.state.should eq('open')
      # puts "\nerror messages: #{me.errors.full_messages.to_sentence}"

      #TODO "updates wip inventory" do
    end

    it "complete" do
      me.release
      me.start
      me.complete
      me.state.should eq('complete')
      #TODO "updates on hand inventory" do
    end

    it "cancel" do
      # puts "me.state is #{me.state}"
      me.cancel
      me.state.should eq('cancelled')
      me.is_cancelled.should be_true
    end
  end

  describe "logic should" do
    it "default production location to main warehouse" do
      me.production_location_id = nil
      me.job_type = ['CONVERSION (SEWN)','SPECIAL CUT'].sample
      me.save
      me.production_location_id.should eq(Omni::Location.main_warehouse)
    end
    it "default production location to order location" do
      me.production_location_id = nil
      me.job_type = ['CONVERSION (HEAT APPLY)','ALTERATION'].sample
      me.save
      me.production_location_id.should eq(me.order_detail.order.location_id)
    end
    it "auto release job if delivery method is 'take' and job type is heat set conversion" do
      me.order_detail.delivery_method = 'TAKE'
      me.order_detail.save
      me.job_type = 'CONVERSION (HEAT APPLY)'
      me.save
      me.state.should eq('pending')
    end
    it "add picks for components if job is for conversion or custom size" do
      # me.order_detail.send("delivery_method=", 'TAKE')
      # me.send("job_type=", ['CONVERSION (SEWN)','SPECIAL CUT'].sample)
      # me.state.should eq('pending')
    end
  end
end






