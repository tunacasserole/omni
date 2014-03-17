require 'spec_helper'

describe "customer_account" do

  describe "requires" do
    it "customer_account_id" do lambda{Omni::CustomerAccount.create! customer_account_id nil}.should raise_error end
    it "customer_id" do lambda{Omni::CustomerAccount.create! customer_id nil}.should raise_error end
    it "account_id" do lambda{Omni::CustomerAccount.create! account_id nil}.should raise_error end
    it "display" do lambda{Omni::CustomerAccount.create! display nil}.should raise_error end
    it "first_name" do lambda{Omni::CustomerAccount.create! first_name nil}.should raise_error end
    it "last_name" do lambda{Omni::CustomerAccount.create! last_name nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::CustomerAccount, display: 'test customer_account'); dup = build(Omni::CustomerAccount, display: 'test customer_account'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "customer_account_id" do me = create(Omni::CustomerAccount); me.customer_account_id.should_not be_nil end
    it "display" do me = create(Omni::CustomerAccount); me.display.should eq("#{me.customer_display} - #{me.account_display}") end
  end

  describe "lookups" do

  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::CustomerAccount, account_id: p.account_id); me.account.should_not be_nil end
    it "customer" do p = create(Omni::Customer); me = create(Omni::CustomerAccount, customer_id: p.customer_id); me.customer.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
