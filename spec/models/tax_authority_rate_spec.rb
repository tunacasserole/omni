require 'spec_helper'

describe "tax_authority_rate" do

  describe "requires" do
    it "tax_authority_rate_id" do lambda{Omni::TaxAuthorityRate.create! tax_authority_rate_id nil}.should raise_error end
    it "display" do lambda{Omni::TaxAuthorityRate.create! display nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::TaxAuthorityRate, display: 'dup_test'); dup = build(Omni::TaxAuthorityRate, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::TaxAuthorityRate); me.display.should eq("#{me.tax_authority_display} - #{me.effective_date}") end
  end

  describe "lookups" do
  end

  describe "belongs_to a" do
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
