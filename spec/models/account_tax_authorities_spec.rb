require 'spec_helper'

describe "account_tax_authority" do

  describe "requires" do
    it "account_tax_authority_id" do lambda{Omni::AccountTaxAuthority.create! account_tax_authority_id nil}.should raise_error end
    it "account_id" do lambda{Omni::AccountTaxAuthority.create! account_id nil}.should raise_error end
    it "tax_authority_id" do lambda{Omni::AccountTaxAuthority.create! tax_authority_id nil}.should raise_error end
    it "display" do lambda{Omni::AccountTaxAuthority.create! display nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::AccountTaxAuthority, display: 'dup_test'); dup = build(Omni::AccountTaxAuthority, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::AccountTaxAuthority); me.display.should eq("#{me.account_display} - #{me.tax_authority_display}") end
  end

  describe "lookups" do
  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::AccountTaxAuthority, account_id: p.account_id); me.account.should_not be_nil end
    it "tax_authority" do p = create(Omni::TaxAuthority); me = create(Omni::AccountTaxAuthority, tax_authority_id: p.tax_authority_id); me.tax_authority.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
