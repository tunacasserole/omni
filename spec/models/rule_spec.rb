require 'spec_helper'

describe "rule" do

  describe "requires" do
    it "rule_id" do lambda{Omni::Rule.create! rule_id nil}.should raise_error end
    it "display" do lambda{Omni::Rule.create! display nil}.should raise_error end
    # it "rule_nbr" do lambda{Omni::Rule.create! rule_nbr nil}.should raise_error end
    # it "rule_type" do lambda{Omni::Rule.create! rule_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Rule, display: 'dup_test'); dup = build(Omni::Rule, display: 'dup_test'); dup.should_not be_valid end
    # it "rule_nbr" do create(Omni::Rule, rule_nbr: 'dup_test'); dup = build(Omni::Rule, rule_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "rule_id" do me = create(Omni::Rule); me.rule_id.should_not be_nil end
    # it "rule_nbr" do me = create(Omni::Rule); me.rule_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "rule_type" do lambda{Omni::Rule.create! rule_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Rule, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Rule); c = create(Buildit::Note, notable_type: 'Omni::Rule',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
