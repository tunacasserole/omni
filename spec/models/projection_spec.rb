require 'spec_helper'

describe "projection" do
  let(:me) { create(Omni::Projection) }

  describe "requires" do
    it "projection_id" do lambda{Omni::Projection.create! projection_id nil}.should raise_error end
    it "display" do lambda{Omni::Projection.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Projection, display: 'dup_test'); dup = build(Omni::Projection, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "projection_id" do me.projection_id.should_not be_nil end
    # it "is_primary to true" do me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "projection_type" do lambda{Omni::Projection.create! projection_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "department" do p = create(Omni::Department); me = create(Omni::Projection, department_id: p.department_id); me.department.should_not be_nil end
    # it "projection" do p = create(Omni::Projection); me = create(Omni::Projection, projection_id: p.projection_id); me.projection.should_not be_nil end
  end

  describe "has_many" do
    it "details" do create(Omni::ProjectionDetail, projection_id: me.projection_id); me.projection_details.count.should eq(1) end
    it "locations" do create(Omni::ProjectionLocation, projection_id: me.projection_id); me.projection_locations.count.should eq(1) end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Projection',notable_id: me.projection_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "forecast should", focus: true do
    it "prevent forecasting a projection without department" do
      me.department_id = nil
      me.save
      me.forecast
      me.state.should eq('draft')
      me.projection_details.count.should eq(0)
    end

    it "builds details" do
      # setup skus
      prof = create(Omni::ForecastProfile, sales_py1_weight: 0.8, sales_py2_weight: 0.15, sales_py3_weight: 0.5)
      dept = create(Omni::Department)
      cls = create(Omni::Classification, department_id: dept.department_id)
      subclass = create(Omni::Subclass, classification_id: cls.classification_id)
      style = create(Omni::Style, subclass_id: subclass.subclass_id)

      100.times { |x| create(Omni::Location)
      100.times { |x| create(Omni::Sku, style_id: style.style_id)}
      skus.each {|x| create(Omni::Inventory, sku_id: x.sku_id, location_id: loc.location_id)

      me = create(Omni::Projection, department_id: dept.department_id, forecast_profile_id: prof.forecast_profile_id);
      me.forecast
      me.projection_details.count.should eq(1)
    end

  end


end
