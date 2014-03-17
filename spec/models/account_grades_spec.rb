require 'spec_helper'

describe "account_grade should" do

  describe "require" do
    it "account_grade_id" do lambda{Omni::AccountGrade.create! account_grade_id nil}.should raise_error end
    it "account_id" do lambda{Omni::AccountGrade.create! account_id nil}.should raise_error end
    it "grade_id" do lambda{Omni::AccountGrade.create! grade_id nil}.should raise_error end
    it "display" do lambda{Omni::AccountGrade.create! display nil}.should raise_error end
    it "grade_name" do lambda{Omni::AccountGrade.create! grade_name nil}.should raise_error end
    it "grade_order" do lambda{Omni::AccountGrade.create! grade_order nil}.should raise_error end
  end

  describe "validate uniqueness of" do
    it "display" do create(Omni::AccountGrade, display: 'dup_test'); dup = build(Omni::AccountGrade, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "display" do me = create(Omni::AccountGrade); me.display.should eq("#{me.account_display} - #{me.grade_display}") end
  end

  describe "validate lookup value of" do
  end

  describe "belongs_to a" do
    it "account" do x = create(Omni::Account); me = create(Omni::AccountGrade, account_id: x.account_id); me.account.should_not be_nil end
    it "grade" do x = create(Omni::Grade); me = create(Omni::AccountGrade, grade_id: x.grade_id); me.grade.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
