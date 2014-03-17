require 'spec_helper'

describe "seasonal_index" do

  describe "requires" do
    it "seasonal_index_id" do lambda{Omni::SeasonalIndex.create! seasonal_index_id nil}.should raise_error end
    it "display" do lambda{Omni::SeasonalIndex.create! display nil}.should raise_error end
    # it "seasonal_index_nbr" do lambda{Omni::SeasonalIndex.create! seasonal_index_nbr nil}.should raise_error end
    # it "seasonal_index_type" do lambda{Omni::SeasonalIndex.create! seasonal_index_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::SeasonalIndex, display: 'dup_test'); dup = build(Omni::SeasonalIndex, display: 'dup_test'); dup.should_not be_valid end
    # it "seasonal_index_nbr" do create(Omni::SeasonalIndex, seasonal_index_nbr: 'dup_test'); dup = build(Omni::SeasonalIndex, seasonal_index_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "seasonal_index_id" do me = create(Omni::SeasonalIndex); me.seasonal_index_id.should_not be_nil end
    # it "seasonal_index_nbr" do me = create(Omni::SeasonalIndex); me.seasonal_index_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "seasonal_index_type" do lambda{Omni::SeasonalIndex.create! seasonal_index_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::SeasonalIndex, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SeasonalIndex); c = create(Buildit::Note, notable_type: 'Omni::SeasonalIndex',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
