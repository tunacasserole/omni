require 'spec_helper'

describe "uniform_lookup" do

  describe "requires" do
    it "uniform_lookup_id" do lambda{Omni::UniformLookup.create! uniform_lookup_id nil}.should raise_error end
    it "uniform_id" do lambda{Omni::UniformLookup.create! uniform_id nil}.should raise_error end
    it "display" do lambda{Omni::UniformLookup.create! display nil}.should raise_error end
    it "uniform_lookup_nbr" do lambda{Omni::UniformLookup.create! uniform_lookup_nbr nil}.should raise_error end
    it "style_id" do lambda{Omni::UniformLookup.create! style_id nil}.should raise_error end
    it "color_id" do lambda{Omni::UniformLookup.create! color_id nil}.should raise_error end
    it "grade_id" do lambda{Omni::UniformLookup.create! grade_id nil}.should raise_error end
    it "style_color_id" do lambda{Omni::UniformLookup.create! style_color_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::UniformLookup, display: 'dup_test'); dup = build(Omni::UniformLookup, display: 'dup_test'); dup.should_not be_valid end
    it "uniform_lookup_nbr" do create(Omni::UniformLookup, uniform_lookup_nbr: 'dup_test'); dup = build(Omni::UniformLookup, uniform_lookup_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "uniform_lookup_id" do me = create(Omni::UniformLookup); me.uniform_lookup_id.should_not be_nil end
    it "uniform_lookup_nbr" do me = create(Omni::UniformLookup); me.uniform_lookup_nbr.should_not be_nil end
    it "display" do me = create(Omni::UniformLookup); me.display.should eq(me.uniform_lookup_nbr) end
  end

  describe "lookups" do
    it "uniform_sources" do lambda{Omni::UniformLookup.create! uniform_sources 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "uniform" do p = create(Omni::Uniform); me = create(Omni::UniformLookup, uniform_id: p.uniform_id); me.uniform.should_not be_nil end
    it "account" do p = create(Omni::Account); me = create(Omni::UniformLookup, account_id: p.account_id); me.account.should_not be_nil end
    it "contract" do p = create(Omni::Contract); me = create(Omni::UniformLookup, contract_id: p.contract_id); me.contract.should_not be_nil end
    it "category" do p = create(Omni::Category); me = create(Omni::UniformLookup, category_id: p.category_id); me.category.should_not be_nil end
    it "product" do p = create(Omni::Product); me = create(Omni::UniformLookup, product_id: p.product_id); me.product.should_not be_nil end
    it "style" do p = create(Omni::Style); me = create(Omni::UniformLookup, style_id: p.style_id); me.style.should_not be_nil end
    it "color" do p = create(Omni::Color); me = create(Omni::UniformLookup, color_id: p.color_id); me.color.should_not be_nil end
    it "size" do p = create(Omni::Size); me = create(Omni::UniformLookup, size_id: p.size_id); me.size.should_not be_nil end
    it "sku" do p = create(Omni::Sku); me = create(Omni::UniformLookup, sku_id: p.sku_id); me.sku.should_not be_nil end
    it "grade" do p = create(Omni::Grade); me = create(Omni::UniformLookup, grade_id: p.grade_id); me.grade.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::UniformLookup); c = create(Buildit::Note, notable_type: 'Omni::UniformLookup',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
