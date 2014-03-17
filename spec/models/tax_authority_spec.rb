require 'spec_helper'

describe "tax_authority" do

  describe "requires" do
    it "tax_authority_id" do lambda{Omni::TaxAuthority.create! tax_authority_id nil}.should raise_error end
    it "display" do lambda{Omni::TaxAuthority.create! display nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::TaxAuthority, display: 'dup_test'); dup = build(Omni::TaxAuthority, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    # it "display" do me = create(Omni::TaxAuthority); me.display.should eq("#{me.location_display} - #{me.tax_authority_display}") end
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
