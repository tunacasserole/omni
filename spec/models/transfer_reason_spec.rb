require 'spec_helper'

describe "transfer_reason" do

  describe "requires" do
    it "transfer_reason_id" do lambda{Omni::TransferReason.create! transfer_reason_id nil}.should raise_error end
    it "display" do lambda{Omni::TransferReason.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::TransferReason, display: 'dup_test'); dup = build(Omni::TransferReason, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "transfer_reason_id" do me = create(Omni::TransferReason); me.transfer_reason_id.should_not be_nil end
  end

  describe "lookups" do
    # it "transfer_reason_type" do lambda{Omni::TransferReason.create! transfer_reason_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
  end

  describe "has_many" do
    it "transfers" do me = create(Omni::TransferReason); c = create(Omni::Transfer, transfer_reason_id: me.transfer_reason_id); me.transfers.count.should eq(1) end
  end

  describe "indexing" do

  end


end
