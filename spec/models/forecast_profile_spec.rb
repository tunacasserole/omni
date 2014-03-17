require 'spec_helper'

describe "forecast_profile" do

  describe "requires" do
    it "forecast_profile_id" do lambda{Omni::ForecastProfile.create! forecast_profile_id nil}.should raise_error end
    it "display" do lambda{Omni::ForecastProfile.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ForecastProfile, display: 'dup_test'); dup = build(Omni::ForecastProfile, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "forecast_profile_id" do me = create(Omni::ForecastProfile); me.forecast_profile_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::ForecastProfile); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "forecast_profile_type" do lambda{Omni::ForecastProfile.create! forecast_profile_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ForecastProfile, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "forecast_profile" do p = create(Omni::ForecastProfile); me = create(Omni::ForecastProfile, forecast_profile_id: p.forecast_profile_id); me.forecast_profile.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ForecastProfile); c = create(Buildit::Note, notable_type: 'Omni::ForecastProfile',notable_id: me.forecast_profile_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
