require 'spec_helper'

describe "order" do
  let(:me) { create(Omni::Order) }

  describe "requires" do
    it "order_id" do lambda{Omni::Order.create! order_id nil}.should raise_error end
    it "display" do lambda{Omni::Order.create! display nil}.should raise_error end
    it "order_nbr" do lambda{Omni::Order.create! order_nbr nil}.should raise_error end
    it "customer_id" do lambda{Omni::Order.create! customer_id nil}.should raise_error end
    it "order_date" do lambda{Omni::Order.create! order_date nil}.should raise_error end
    it "order_source" do lambda{Omni::Order.create! order_source nil}.should raise_error end
  end

  describe "defaults" do
    it "order_id" do me.order_id.should_not be_nil end
    it "display" do me.display.should eq("#{me.order_nbr} - #{me.order_date} - #{me.location_display}") end
    it "order_nbr" do me.order_nbr.should_not be_nil end
  end

  describe "checks uniqueness of" do
    it "display" do dup = build(Omni::Order, display: me.display); dup.should_not be_valid end
    it "order_nbr" do dup = build(Omni::Order, order_nbr: me.order_nbr); dup.should_not be_valid end
  end

  describe "lookups" do
    it "order_source" do lambda{Omni::Order.create! order_source 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::Order, location_id: p.location_id); me.location.should_not be_nil end
    it "terminal" do p = create(Omni::Terminal); me = create(Omni::Order, terminal_id: p.terminal_id); me.terminal.should_not be_nil end
    it "customer" do p = create(Omni::Customer); me = create(Omni::Order, customer_id: p.customer_id); me.customer.should_not be_nil end
    it "user" do p = create(Buildit::User); me = create(Omni::Order, user_id: p.user_id); me.user.should_not be_nil end
  end

  describe "has_many" do
    it "order_details" do create(Omni::OrderDetail, order_id: me.order_id); me.order_details.count.should eq(1) end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Order',notable_id: me.order_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "logic should" do
    it "compute order total" do
      create(Omni::OrderDetail, order_id: me.order_id, order_units: 5, retail_price: 20)
      create(Omni::OrderDetail, order_id: me.order_id, order_units: 1, retail_price: 5)
      new_me = Omni::Order.where(order_id: me.order_id).first
      new_me.order_total.should eq(105)
    end
  end

  describe "state machine: " do
    it "create, set state to draft" do
      me.state.should eq('draft')
    end

    it "suspend, set state to suspended" do
      me.suspend
      me.state.should eq('suspended')
    end

    it "resume, set state to draft" do
      me.resume
      me.state.should eq('draft')
    end

    context "finalize" do
      it "set state to final" do
        me.finalize
        me.state.should eq('final')
        me.order_date.should eq(Date.today)
      end
      it "order details" do
        me = create(:order_with_details)
        me.finalize
        me.state.should eq('final')
        me.order_details.count.should eq(5)
        # me.order_details.first.state.should eq('final')
      end
    end

    it "set state to abandoned" do
      me.abandon
      me.state.should eq('abandoned')
    end
  end


end
