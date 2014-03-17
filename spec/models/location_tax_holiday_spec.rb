require 'spec_helper'

describe "location_tax_holiday" do

  describe "requires" do
    it "location_tax_holiday_id" do lambda{Omni::LocationTaxHoliday.create! location_tax_holiday_id nil}.should raise_error end
    it "location_id" do lambda{Omni::LocationTaxHoliday.create! location_id nil}.should raise_error end
    it "display" do lambda{Omni::LocationTaxHoliday.create! display nil}.should raise_error end
    it "short_name" do lambda{Omni::LocationTaxHoliday.create! short_name nil}.should raise_error end
    it "effective_date" do lambda{Omni::LocationTaxHoliday.create! effective_date nil}.should raise_error end
    it "end_date" do lambda{Omni::LocationTaxHoliday.create! end_date nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::LocationTaxHoliday, display: 'dup_test'); dup = build(Omni::LocationTaxHoliday, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::LocationTaxHoliday); me.display.should eq("#{me.location_display} - #{me.short_name}, #{me.effective_date}") end
  end

  describe "lookups" do
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::LocationTaxHoliday, location_id: p.location_id); me.location.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
