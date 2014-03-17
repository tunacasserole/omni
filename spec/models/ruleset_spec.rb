require 'spec_helper'

describe "ruleset" do

  describe "requires" do
    it "ruleset_id" do lambda{Omni::Ruleset.create! ruleset_id nil}.should raise_error end
    it "display" do lambda{Omni::Ruleset.create! display nil}.should raise_error end
    # it "ruleset_nbr" do lambda{Omni::Ruleset.create! ruleset_nbr nil}.should raise_error end
    # it "ruleset_type" do lambda{Omni::Ruleset.create! ruleset_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Ruleset, display: 'dup_test'); dup = build(Omni::Ruleset, display: 'dup_test'); dup.should_not be_valid end
    # it "ruleset_nbr" do create(Omni::Ruleset, ruleset_nbr: 'dup_test'); dup = build(Omni::Ruleset, ruleset_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "ruleset_id" do me = create(Omni::Ruleset); me.ruleset_id.should_not be_nil end
    # it "ruleset_nbr" do me = create(Omni::Ruleset); me.ruleset_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "ruleset_type" do lambda{Omni::Ruleset.create! ruleset_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Ruleset, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Ruleset); c = create(Buildit::Note, notable_type: 'Omni::Ruleset',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
