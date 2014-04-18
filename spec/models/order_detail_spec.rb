require 'spec_helper'

describe "order_detail" do
  let(:me) { create(Omni::OrderDetail) }

  describe "requires" do
    it "order_detail_id" do lambda{Omni::OrderDetail.create! order_detail_id nil}.should raise_error end
    it "order_detail_nbr" do lambda{Omni::OrderDetail.create! order_detail_nbr nil}.should raise_error end
    it "display" do lambda{Omni::OrderDetail.create! display nil}.should raise_error end
    it "order_id" do lambda{Omni::OrderDetail.create! order_id nil}.should raise_error end
    it "sku_id" do lambda{Omni::OrderDetail.create! sku_id nil}.should raise_error end
    it "delivery_method" do lambda{Omni::OrderDetail.create! delivery_method nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do dup = build(Omni::OrderDetail, display: me.display); dup.should_not be_valid end
    it "order_detail_nbr" do dup = build(Omni::OrderDetail, order_detail_nbr: me.order_detail_nbr); dup.should_not be_valid end
  end

  describe "defaults" do
    it "order_detail_id" do me.order_detail_id.should_not be_nil end
    it "order_detail_nbr" do me.order_detail_nbr.should_not be_nil end
    it "display" do me.display.should_not be_nil end
    # it "display" do me.display.should eq("#{me.order_display} - #{me.sku_display}") end
  end

  describe "lookups" do
    it "gender" do lambda{Omni::OrderDetail.create! gender 'xxx'}.should raise_error end
    it "delivery_method" do lambda{Omni::OrderDetail.create! delivery_method 'xxx'}.should raise_error end
    it "price_type" do lambda{Omni::OrderDetail.create! price_type 'xxx'}.should raise_error end
    it "customer_discount_reason" do lambda{Omni::OrderDetail.create! customer_discount_reason 'xxx'}.should raise_error end
    it "customer_return_reason" do lambda{Omni::OrderDetail.create! customer_return_reason 'xxx'}.should raise_error end
    it "customer_cancel_reason" do lambda{Omni::OrderDetail.create! customer_cancel_reason 'xxx'}.should raise_error end
  end

  describe "belongs_to" do
    it "order" do p = create(Omni::Order); me = create(Omni::OrderDetail, order_id: p.order_id); me.order.should_not be_nil end
    it "sku" do p = create(Omni::Sku); me = create(Omni::OrderDetail, sku_id: p.sku_id); me.sku.should_not be_nil end
    it "sku_alias" do p = create(Omni::SkuAlias); me = create(Omni::OrderDetail, sku_alias_id: p.sku_alias_id); me.sku_alias.should_not be_nil end
    it "pickup_location" do p = create(Omni::Location); me = create(Omni::OrderDetail, pickup_location_id: p.location_id); me.pickup_location.should_not be_nil end
    it "account" do p = create(Omni::Account); me = create(Omni::OrderDetail, account_id: p.account_id); me.account.should_not be_nil end
    it "grade" do p = create(Omni::Grade); me = create(Omni::OrderDetail, grade_id: p.grade_id); me.grade.should_not be_nil end
    it "sales_user" do p = create(Buildit::User); me = create(Omni::OrderDetail, sales_user_id: p.user_id); me.sales_user.should_not be_nil end
    it "reference_order_detail" do p = create(Omni::OrderDetail, display: 'reference'); me = create(Omni::OrderDetail, reference_order_detail_id: p.order_detail_id); me.reference_order_detail.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do create(Buildit::Note, notable_type: 'Omni::OrderDetail',notable_id: me.order_detail_id); me.notes.count.should eq(1) end
    it "picks" do create(Omni::Pick, pickable_type: 'Omni::OrderDetail',pickable_id: me.order_detail_id); me.picks.should_not be_nil end
    it "jobs" do create(Omni::Job, jobable_type: 'Omni::OrderDetail',jobable_id: me.order_detail_id, job_nbr: 999); me.jobs.count.should eq(1) end
  end

  describe "has_one" do
  end

  describe "indexing" do

  end

  describe "logic" do

    it "set the fulfillment location on the pick" do
      me.finalize
      me.sku.account.location_id = Omni::Location.first.location_id
      me.sku.account.save
      # me.picks.first.fulfillment_location_id.should_not be_nil
    end
  end

  describe "state machine should" do

    it "default state to draft" do
      me.state.should eq('draft')
    end

    it "finalize" do
      me.finalize
      me.state.should eq('complete')
      me.picks.first.should_not be_nil
    end

    it "cancel" do
      create(Omni::Pick, pickable_type: 'Omni::OrderDetail', pickable_id:  me.order_detail_id)
      create(Omni::Job, jobable_type: 'Omni::OrderDetail', jobable_id: me.order_detail_id)
      me.cancel
      me.state.should eq('cancelled')
      me.picks.first.state.should eq('cancelled')
      me.jobs.first.state.should eq('cancelled')
    end

  end
end
