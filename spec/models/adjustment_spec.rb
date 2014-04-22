require 'spec_helper'

describe "adjustment" do
  let(:me) { create( Omni::Adjustment ) }

  describe "requires" do
    it "adjustment_id" do lambda{Omni::Adjustment.create! adjustment_id nil}.should raise_error end
    it "display" do lambda{Omni::Adjustment.create! display nil}.should raise_error end
    it "adjustment_nbr" do lambda{Omni::Adjustment.create! adjustment_nbr nil}.should raise_error end
    it "location" do lambda{Omni::Adjustment.create! location nil}.should raise_error end
    it "sku" do lambda{Omni::Adjustment.create! sku nil}.should raise_error end
    it "request_date" do lambda{Omni::Adjustment.create! request_date nil}.should raise_error end
    it "cancel_date" do lambda{Omni::Adjustment.create! cancel_date nil}.should raise_error end
    it "adjustment_reason_id" do lambda{Omni::Adjustment.create! adjustment_reason_id nil}.should raise_error end
  end

  describe "uniqueness" do
    it "adjustment_nbr" do create(Omni::Adjustment, adjustment_nbr: '123'); dup = build(Omni::Adjustment, adjustment_nbr: '123'); dup.should_not be_valid end
    it "display" do create(Omni::Adjustment, display: 'test adjustment'); dup = build(Omni::Adjustment, display: 'test adjustment'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "adjustment_id" do me = create(Omni::Adjustment); me.adjustment_id.should_not be_nil end
    it "adjustment_nbr" do  me = create(Omni::Adjustment); me.adjustment_nbr.should_not be_nil end
    it "display" do me = create(Omni::Adjustment); me.display.should eq("#{me.location_display} - #{me.sku_display} - #{me.request_date}") end
  end

  describe "lookups" do
    # it "shipping_state" do lambda{Omni::Adjustment.create! shipping_state 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::Adjustment, location_id: p.location_id); me.location.should_not be_nil end
    it "sku" do p = create(Omni::Sku); me = create(Omni::Adjustment, sku_id: p.sku_id); me.sku.should_not be_nil end
    it "bin" do p = create(Omni::Bin); me = create(Omni::Adjustment, bin_id: p.bin_id); me.bin.should_not be_nil end
    it "request_user" do p = create(Buildit::User); me = create(Omni::Adjustment, request_user_id: p.user_id); me.request_user.should_not be_nil end
    it "post_user" do p = create(Buildit::User); me = create(Omni::Adjustment, post_user_id: p.user_id); me.post_user.should_not be_nil end
    it "cancel_user" do p = create(Buildit::User); me = create(Omni::Adjustment, cancel_user_id: p.user_id); me.cancel_user.should_not be_nil end
    it "adjustment_reason" do p = create(Omni::AdjustmentReason); me = create(Omni::Adjustment, adjustment_reason_id: p.adjustment_reason_id); me.adjustment_reason.should_not be_nil end
  end

  describe "has_many" do
    # it "uniforms" do me = create(Omni::Adjustment); c = create(Omni::Uniform, adjustment_id: me.adjustment_id);                            me.uniforms.count.should eq(1) end
    # it "notes" do me = create(Omni::Adjustment); c = create(Buildit::Note, notable_type: 'Omni::Adjustment',notable_id: me.adjustment_id); me.notes.count.should eq(1) end
  end

  describe "state machine should" do
    it "default state to draft" do
      me = create(Omni::Adjustment)
      me.state.should eq('draft')
    end

    context "on approve" do
      it "set adjustment to complete" do
        me = create(Omni::Adjustment)
        me.approve
        me.state.should eq('complete')
      end
    end
  end


end
