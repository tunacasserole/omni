require 'spec_helper'

describe "system_option" do

  describe "requires" do
    it "system_option_id" do lambda{Omni::SystemOption.create! system_option_id nil}.should raise_error end
    # it "display" do lambda{Omni::SystemOption.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::SystemOption, display: 'dup_test'); dup = build(Omni::SystemOption, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "system_option_id" do me = create(Omni::SystemOption); me.system_option_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::SystemOption); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "system_option_type" do lambda{Omni::SystemOption.create! system_option_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "system_option" do p = create(Omni::SystemOption); me = create(Omni::SystemOption, system_option_id: p.system_option_id); me.system_option.should_not be_nil end
    # it "system_option" do p = create(Omni::SystemOption); me = create(Omni::SystemOption, system_option_id: p.system_option_id); me.system_option.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SystemOption); c = create(Buildit::Note, notable_type: 'Omni::SystemOption',notable_id: me.system_option_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
