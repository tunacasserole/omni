require 'spec_helper'

describe "enrollment" do

  describe "requires" do
    it "enrollment_id" do lambda{Omni::Enrollment.create! enrollment_id nil}.should raise_error end
    it "account_id" do lambda{Omni::Enrollment.create! account_id nil}.should raise_error end
    it "display" do lambda{Omni::Enrollment.create! display nil}.should raise_error end
    it "school_year" do lambda{Omni::Enrollment.create! school_year nil}.should raise_error end
    it "grade_id" do lambda{Omni::Enrollment.create! grade_id nil}.should raise_error end
    it "gender" do lambda{Omni::Enrollment.create! gender nil}.should raise_error end
    it "enrollment" do lambda{Omni::Enrollment.create! enrollment nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::Enrollment, display: 'dup_test'); dup = build(Omni::Enrollment, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::Enrollment); me.display.should eq("#{me.account_display} - #{me.school_year} - #{me.grade_display} - #{me.gender}") end
  end

  describe "lookups" do
    it "school_year" do lambda{Omni::Account.create! school_year 'xxx'}.should raise_error end
    it "gender" do lambda{Omni::Account.create! gender 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::Enrollment, account_id: p.account_id); me.account.should_not be_nil end
    it "grade" do p = create(Omni::Grade); me = create(Omni::Enrollment, grade_id: p.grade_id); me.grade.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
