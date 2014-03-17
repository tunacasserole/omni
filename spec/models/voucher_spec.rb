require 'spec_helper'

describe "voucher" do

  let(:me) { create(Omni::Voucher) }

  describe "requires" do
    it "voucher_id" do lambda{Omni::Voucher.create! voucher_id nil}.should raise_error end
    it "display" do lambda{Omni::Voucher.create! display nil}.should raise_error end
    it "voucher_nbr" do  lambda{Omni::Voucher.create! voucher_nbr nil}.should raise_error end
    it "customer_id" do lambda{Omni::Voucher.create! customer_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do dup = build(Omni::Voucher, display: me.display); dup.should_not be_valid end
    # it "voucher_nbr" do dup = build(Omni::Voucher, voucher_nbr: me.voucher_nbr); dup.should_not be_valid end
  end

  describe "defaults" do
    it "voucher_id" do me.voucher_id.should_not be_nil end
    it "voucher_nbr" do me.voucher_nbr.should_not be_nil end
    it "display" do me.display.should eq("#{me.voucher_type} - #{me.voucher_nbr}") end
  end

  describe "lookups" do
    it "voucher_type" do lambda{Omni::Voucher.create! voucher_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "customer" do p = create(Omni::Customer); me = create(Omni::Voucher, customer_id: p.customer_id); me.customer.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do c = create(Buildit::Note, notable_type: 'Omni::Voucher',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "default state to draft" do
      me.state.should eq('draft')
    end

    # VALIDATE
    context "on verify" do
      before do
        me.verify
        it "set state to complete" do
          me.state.should eq('complete')
        end
        it "expire card" do
          # expire card logic
        end
      end
    end

    # CANCEL
    context "on use" do
      before do
        me.use
        it "set state to complete if balance <= 0" do
          me.use
          me.state.should eq('complete')
        end

        it "not set state to complete if balance > 0" do
          me.use
          me.state.should_not eq('complete')
        end
      end
    end    # USE

  end

end
