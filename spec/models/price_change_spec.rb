require 'spec_helper'

describe "price_change" do

  describe "requires" do
    it "price_change_id" do lambda{Omni::PriceChange.create! price_change_id nil}.should raise_error end
    it "display" do lambda{Omni::PriceChange.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::PriceChange, display: 'dup_test'); dup = build(Omni::PriceChange, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "price_change_id" do me = create(Omni::PriceChange); me.price_change_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::PriceChange); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "price_change_type" do lambda{Omni::PriceChange.create! price_change_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::PriceChange, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "price_change" do p = create(Omni::PriceChange); me = create(Omni::PriceChange, price_change_id: p.price_change_id); me.price_change.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::PriceChange); c = create(Buildit::Note, notable_type: 'Omni::PriceChange',notable_id: me.price_change_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
