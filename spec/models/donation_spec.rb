require 'spec_helper'

describe "donation" do

  describe "requires" do
    it "donation_id" do lambda{Omni::Donation.create! donation_id nil}.should raise_error end
    it "display" do lambda{Omni::Donation.create! display nil}.should raise_error end
    it "account_id" do lambda{Omni::Donation.create! account_id nil}.should raise_error end
    it "grade_id" do lambda{Omni::Donation.create! grade_id nil}.should raise_error end
    it "grade_name" do lambda{Omni::Donation.create! grade_name nil}.should raise_error end
    it "grade_order" do lambda{Omni::Donation.create! grade_order nil}.should raise_error end
  end

  describe "uniqueness" do
    # it "display" do create(Omni::Donation, display: 'test donation'); dup = build(Omni::Donation, display: 'test donation'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::Donation); me.display.should eq("#{me.account_display} - #{me.donation_date}") end
  end

  describe "lookups" do

  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::Donation, account_id: p.account_id); me.account.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
