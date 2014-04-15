require 'spec_helper'

describe "payment" do
  let(:me) { create( Omni::Payment, payment_amount: 15.50 ) }

  describe "requires" do
    it "payment_id" do lambda{Omni::Payment.create! payment_id nil}.should raise_error end
    it "display" do lambda{Omni::Payment.create! display nil}.should raise_error end
    it "payment_nbr" do lambda{Omni::Payment.create! payment_nbr nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do dup = build(Omni::Payment, display: me.display); dup.should_not be_valid end
    it "payment_nbr" do dup = build(Omni::Payment, payment_nbr: me.payment_nbr); dup.should_not be_valid end
  end

  describe "defaults" do
    it "payment_id" do me.payment_id.should_not be_nil end
    it "payment_nbr" do me.payment_nbr.should_not be_nil end
    it "display" do me.display.should eq("Payment: #{me.payment_nbr}") end
  end

  describe "lookups" do
    # it "payment_type" do lambda{Omni::Payment.create! payment_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "order" do p = create(Omni::Order); me = create(Omni::Payment, order_id: p.order_id); me.order.should_not be_nil end
    it "customer" do p = create(Omni::Customer); me = create(Omni::Payment, customer_id: p.customer_id); me.customer.should_not be_nil end
    it "terminal" do p = create(Omni::Terminal); me = create(Omni::Payment, terminal_id: p.terminal_id); me.terminal.should_not be_nil end
    it "location" do p = create(Omni::Location); me = create(Omni::Payment, location_id: p.location_id); me.location.should_not be_nil end
    it "tender" do p = create(Omni::Tender); me = create(Omni::Payment, tender_id: p.tender_id); me.tender.should_not be_nil end
    it "voucher" do p = create(Omni::Voucher); me = create(Omni::Payment, voucher_id: p.voucher_id); me.voucher.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Payment); c = create(Buildit::Note, notable_type: 'Omni::Payment',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "default state to draft" do
      me.state.should eq('draft')
    end

    # APPROVE
    it "on approve set state to complete" do
      me.approve
      me.state.should eq('complete')
    end

    it "on approve update till" do
      me.approve
      me.terminal.till.till_details.where(tender_id: me.tender_id).first.tender_amount.should eq(me.payment_amount)
    end

    it "on approve update voucher" do
      me.approve
      # ?
    end

    # DECLINE
    it "on decline set state to cancelled" do
      me.decline
      me.state.should eq('cancelled')
    end

  end

end
