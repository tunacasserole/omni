require 'spec_helper'

describe "job" do
  let(:me) { create(Omni::Job, jobable_type: 'Omni::OrderDetail', jobable_id: '123') }

  describe "requires" do
    it "job_id" do lambda{Omni::Job.create! job_id nil}.should raise_error end
    it "display" do lambda{Omni::Job.create! display nil}.should raise_error end
    it "job_nbr" do lambda{Omni::Job.create! job_nbr nil}.should raise_error end
    it "job_type" do lambda{Omni::Job.create! job_type nil}.should raise_error end
    it "jobable_id" do lambda{Omni::Job.create! jobable_id nil}.should raise_error end
    it "jobable_type" do lambda{Omni::Job.create! jobable_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do build(Omni::Job, display: me.display).should_not be_valid end
    it "job_nbr" do build(Omni::Job, job_nbr: me.job_nbr).should_not be_valid end
  end

  describe "defaults" do
    it "job_id" do me.job_id.should_not be_nil end
    it "job_nbr" do me.job_nbr.should_not be_nil end
    it "display" do me.display.should_not be_nil end
    # it "display" do me.display.should eq("job: #{me.job_nbr}") end
    it "request_units" do
      x = create(Omni::OrderDetail, order_units: 123)
      # x.order_units.should eq(123)
      me = create(Omni::Job, jobable_type: 'Omni::OrderDetail', jobable_id: x.order_detail_id); me.request_units.should eq(x.order_units)
    end
  end

  describe "lookups" do
    it "job_type" do lambda{Omni::Job.create! job_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "production_location" do me.production_location_id = create(Omni::Location).location_id; me.production_location.should_not be_nil end
    it "supplier" do me.supplier_id = create(Omni::Supplier).supplier_id; me.supplier.should_not be_nil end
    it "sku" do me.sku_id = create(Omni::Sku).sku_id; me.sku.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Job',notable_id: me.job_id); me.notes.count.should eq(1) end
    it "picks" do create(Omni::Pick, pickable_type: 'Omni::Job', pickable_id: me.job_id, pick_nbr: 999); me.picks.first.should_not be_nil end
  end

  describe "has_one" do
  end

  describe "indexing" do

  end

  describe "state machine:" do
    it "create" do
      o = create(Omni::OrderDetail)
      p = create(Omni::Pick, pickable_type: 'Omni::OrderDetail', pickable_id: o.order_detail_id)
      j = create(Omni::Job, jobable_type: 'Omni::OrderDetail', jobable_id: o.order_detail_id)
      j.state.should eq('draft')
      p = Omni::Pick.where(pick_id: p.pick_id).first
      p.job_id.should eq(j.job_id)
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
      me.cancel
      me.state.should eq('cancelled')
      me.is_cancelled.should be_true
    end
  end

end