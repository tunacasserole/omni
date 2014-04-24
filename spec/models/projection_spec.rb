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

  describe "state machine should" do
    it "closes the details when a projection is closed" do
      p = Omni::Projection.first
      p.state = 'projection_1'
      p.save

      pd = p.projection_details.first
      pd.state = 'projection_1'
      pd.projection_1_units = 99
      pd.save
      p.close

      pd = p.projection_details.first
      pd.state.should eq 'draft'
      pd.projection_2_units.should eq 99
    end

    it "sets the approval date when a projection is approved" do
      p = Omni::Projection.first
      p.state = 'projection_3'
      p.approval_3_date = nil
      p.save
      p.approve
      p.approval_3_date.should_not be_nil
    end
  end

  describe "forecast should" do
    it "prevent forecasting a projection without department" do
      me.department_id = nil
      me.save
      me.forecast
      me.state.should eq('draft')
      me.projection_details.count.should eq(0)
    end

    it "prevent forecasting a projection without forecast_profile" do
      me.forecast_profile_id = nil
      me.save
      me.forecast
      me.state.should eq('draft')
      me.projection_details.count.should eq(0)
    end

    # it "build details for test data" do
    #   # puts "== #{Time.now.strftime("%H:%M:%S").yellow}: setting up data"
    #   n = 1 # target is 10
    #   skus_per_style = 1 # target is 10
    #   prof = create(Omni::ForecastProfile, sales_py1_weight: 0.8, sales_py2_weight: 0.15, sales_py3_weight: 0.5)
    #   dept = create(Omni::Department)
    #   n.times {|i| create(Omni::Classification, department_id: dept.department_id) }
    #   dept.classifications.each do |k|
    #     n.times {|i| create(Omni::Subclass, classification_id: k.classification_id) }
    #     k.subclasses.each do |subclass|
    #       n.times {|i| create(Omni::Style, subclass_id: subclass.subclass_id) }
    #       subclass.styles.each do |style|
    #         skus_per_style.times { |i| create(Omni::Sku, style_id: style.style_id) }
    #         style.skus.each do |sku|
    #           Omni::Location.all.each { |l| create(Omni::Inventory, sku_id: sku.sku_id, location_id: l.location_id)}
    #           # puts " - created sku with inventories"
    #         end
    #       end
    #     end
    #   end

    #   # puts "== #{Time.now.strftime("%H:%M:%S").yellow}: starting forecasting #{dept.skus.count} skus with #{dept.inventories.count} inventory rows"
    #   me = create(Omni::Projection, department_id: dept.department_id, forecast_profile_id: prof.forecast_profile_id);
    #   me.forecast
    #   # puts "== #{Time.now.strftime("%H:%M:%S").yellow}: finished forecasting #{dept.skus.count} skus with #{dept.inventories.count} inventory rows"

    #   me.projection_details.count.should eq(Omni::Location.count * n * n * n * skus_per_style)
    # end

    # it "build details for seeded data" do

    #   [3].each do |sku_load|

    #     # setup skus
    #     prof = create(Omni::ForecastProfile, sales_py1_weight: 0.8, sales_py2_weight: 0.15, sales_py3_weight: 0.5)
    #     dept = Omni::Department.where(display: 'COMPONENTS').first
    #     locations = Omni::Location.all

    #     # run forecast
    #     me = create(Omni::Projection, department_id: dept.department_id, forecast_profile_id: prof.forecast_profile_id);
    #     me.forecast
    #     me.projection_details.count.should eq(locations.count * sku_load)
    #   end
    # end



  end


end
