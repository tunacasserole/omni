require 'spec_helper'

describe "grade" do

  describe "requires" do
    it "grade_id" do lambda{Omni::Grade.create! grade_id nil}.should raise_error end
    it "display" do lambda{Omni::Grade.create! display nil}.should raise_error end
    it "grade_order" do lambda{Omni::Grade.create! grade_order nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Grade, display: 'dup_test'); dup = build(Omni::Grade, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "grade_id" do me = create(Omni::Grade); me.grade_id.should_not be_nil end
    it "display" do me = create(Omni::Grade); me.display.should eq(me.grade_name) end
  end

  describe "lookups" do

  end

  describe "belongs_to a" do

  end

  describe "has_many" do
    it "accounts" do me = create(Omni::Grade); x = create(Omni::AccountGrade, grade_id: me.grade_id);  me.accounts.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "logic" do
    it "should return a list of grades for a from and thru" do
      first_grade = create(Omni::Grade, grade_order: 10001)
      create(Omni::Grade, grade_order: 10002)
      second_grade = create(Omni::Grade, grade_order: 10003)
      Omni::Grade.grades(first_grade,second_grade).count.should eq(3)
    end
  end

  describe "validation should" do
    it "allow a from_grade that is lower than the thru_grade" do
      first_grade = create(Omni::Grade, grade_order: 10001)
      second_grade = create(Omni::Grade, grade_order: 10002)
      result = Omni::Grade.grades_valid(first_grade,second_grade)
      result.should be_true
    end

    it "allow a from_grade that is equal to the thru_grade" do
      first_grade = create(Omni::Grade, grade_order: 10001)
      result = Omni::Grade.grades_valid(first_grade,first_grade)
      result.should be_true
    end

    it "prevent a from_grade that is higher than the thru_grade" do
      first_grade = create(Omni::Grade, grade_order: 10001)
      second_grade = create(Omni::Grade, grade_order: 10002)
      result = Omni::Grade.grades_valid(second_grade,first_grade)
      result.should be_false
    end
  end

end
