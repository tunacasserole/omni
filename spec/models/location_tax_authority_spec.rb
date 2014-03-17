require 'spec_helper'

describe "location_tax_authority" do

  describe "requires" do
    it "location_tax_authority_id" do lambda{Omni::LocationTaxAuthority.create! location_tax_authority_id nil}.should raise_error end
    it "display" do lambda{Omni::LocationTaxAuthority.create! display nil}.should raise_error end
    it "location_id" do lambda{Omni::LocationTaxAuthority.create! location_id nil}.should raise_error end
    it "tax_authority_id" do lambda{Omni::LocationTaxAuthority.create! tax_authority_id nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::LocationTaxAuthority, display: 'dup_test'); dup = build(Omni::LocationTaxAuthority, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::LocationTaxAuthority); me.display.should eq("#{me.location_display} - #{me.tax_authority_display}") end
  end

  describe "lookups" do
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::LocationTaxAuthority, location_id: p.location_id); me.location.should_not be_nil end
    it "tax_authority" do p = create(Omni::TaxAuthority); me = create(Omni::LocationTaxAuthority, tax_authority_id: p.tax_authority_id); me.tax_authority.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
