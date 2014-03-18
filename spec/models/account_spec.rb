require 'spec_helper'

describe "account" do
  let(:me) { create(Omni::Account) }

  describe "requires" do
    it "account_name" do lambda{Omni::Account.create! account_name nil}.should raise_error end
    it "account_nbr" do lambda{Omni::Account.create! account_nbr nil}.should raise_error end
    it "display" do lambda{Omni::Account.create! display nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do dup = build(Omni::Account, display: me.display); dup.should_not be_valid end
    it "account_nbr" do dup = build(Omni::Account, account_nbr: me.account_nbr); dup.should_not be_valid end
  end

  describe "defaults" do
    it "account_id" do me = create(Omni::Account); me.account_id.should_not be_nil end
    it "account_nbr" do  me = create(Omni::Account); me.account_nbr.should_not be_nil end
    it "display" do me = create(Omni::Account); me.display.should eq("#{me.account_name} - #{me.account_nbr}") end
    it "billing country to USA" do me = create(Omni::Account); me.billing_country.should eq('USA') end
    it "shipping country to USA" do me = create(Omni::Account); me.shipping_country.should eq('USA') end
  end

  describe "validation should" do
    it "more tests" do
      p = create(Omni::Grade, grade_order: 999)
      me = create(Omni::Account, from_grade_id: p.grade_id, thru_grade_id: p.grade_id)
      me.from_grade.should_not be_nil
    end

    # it "prevent a first_grade that is higher than a second_grade" do
    #   first_grade = Omni::Grade.create(grade_order: 10001)
    #   second_grade = Omni::Grade.create(grade_order: 10002)
    #   first_grade.grade_order.should eq(10001)
    #   me = create(Omni::Account, from_grade_id: second_grade.grade_id, thru_grade_id: first_grade.grade_id)
    #   me.should be_valid
    # end

    # it "allow a first_grade that is lower than a second_grade" do
    #   first_grade = Omni::Grade.create(grade_order: 10001)
    #   second_grade = Omni::Grade.create(grade_order: 10002)
    #   me = build(Omni::Account, from_grade_id: first_grade.grade_id, thru_grade_id: second_grade.grade_id)
    #   me.should be_valid
    # end
  end

  describe "lookups" do
    it "account_type" do lambda{Omni::Account.create! account_type 'xxx'}.should raise_error end
    it "school_type" do lambda{Omni::Account.create! school_type 'xxx'}.should raise_error end
    it "prospect_type" do lambda{Omni::Account.create! prospect_type 'xxx'}.should raise_error end
    it "contract_type" do lambda{Omni::Account.create! contract_type 'xxx'}.should raise_error end
    it "school_gender" do lambda{Omni::Account.create! school_gender 'xxx'}.should raise_error end
    it "account_standing" do lambda{Omni::Account.create! account_standing 'xxx'}.should raise_error end
    it "account_exclusivity" do lambda{Omni::Account.create! account_exclusivity 'xxx'}.should raise_error end
    it "annual_tuition" do lambda{Omni::Account.create! annual_tuition 'xxx'}.should raise_error end
    it "level_of_income" do lambda{Omni::Account.create! level_of_income 'xxx'}.should raise_error end
    it "revenue_band" do lambda{Omni::Account.create! revenue_band 'xxx'}.should raise_error end
    it "school_potential" do lambda{Omni::Account.create! school_potential 'xxx'}.should raise_error end
    it "billing_state" do lambda{Omni::Account.create! billing_state 'xxx'}.should raise_error end
    it "shipping_state" do lambda{Omni::Account.create! shipping_state 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "parent_account" do me = create(Omni::Account, parent_account_id: create(Omni::Account).account_id); me.parent_account.should_not be_nil end
    it "rep_user" do p = create(Buildit::User); me = create(Omni::Account, rep_user_id: p.user_id); me.rep_user.should_not be_nil end
    it "location" do p = create(Omni::Location); me = create(Omni::Account, location_id: p.location_id); me.location.should_not be_nil end
    # it "from_grade" do p = create(Omni::Grade); me = create(Omni::Account, from_grade_id: p.grade_id, thru_grade_id: p.grade_id); me.from_grade.should_not be_nil end
    # it "thru_grade" do p = create(Omni::Grade); me = create(Omni::Account, from_grade_id: p.grade_id, thru_grade_id: p.grade_id); me.thru_grade.should_not be_nil end
  end

  describe "has_many" do
    it "customers"  do create(Omni::CustomerAccount, account_id: me.account_id);          me.customers.count.should eq(1) end
    it "contacts"  do create(Omni::Contact, account_id: me.account_id);            me.contacts.count.should eq(1) end
    it "donations" do create(Omni::Donation, account_id: me.account_id);           me.donations.count.should eq(1) end
    it "enrollments" do create(Omni::Enrollment, account_id: me.account_id);       me.enrollments.count.should eq(1) end
    it "grades" do create(Omni::AccountGrade, account_id: me.account_id);                 me.grades.count.should eq(1) end
    it "tax_authorities" do create(Omni::AccountTaxAuthority, account_id: me.account_id); me.tax_authorities.count.should eq(1) end
    it "uniforms" do create(Omni::Uniform, account_id: me.account_id);                            me.uniforms.count.should eq(1) end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Account',notable_id: me.account_id); me.notes.count.should eq(2) end
  end

  describe "state machine should" do
    it "default to draft" do
      me = create(Omni::Account)
      me.state.should eq('draft')
    end

    it "set state to active on activate" do
      me = create(Omni::Account)
      me.activate
      me.state.should eq('active')
    end

    it "set state to closed on close" do
      me = create(Omni::Account)
      me.close
      me.state.should eq('closed')
    end
  end

  describe "logic should" do
    it "build many grades" do
      first_grade = Omni::Grade.where(grade_order: 10).first
      third_grade = Omni::Grade.where(grade_order: 30).first
      you = create(Omni::Account, from_grade_id: first_grade.grade_id, thru_grade_id: third_grade.grade_id)
      you.grades.count.should eq(3)
    end

    it "build 1 grade" do
      first_grade = Omni::Grade.where(grade_order: 10).first
      you = create(Omni::Account, from_grade_id: first_grade.grade_id, thru_grade_id: first_grade.grade_id)
      you.grades.count.should eq(1)
    end

    it "build 2 grades" do
      first_grade = Omni::Grade.where(grade_order: 10).first
      second_grade = Omni::Grade.where(grade_order: 20).first
      you = create(Omni::Account, from_grade_id: first_grade.grade_id, thru_grade_id: second_grade.grade_id)
      you.grades.count.should eq(2)
    end
  end

  describe "hooks should" do
    it "build grades when from or thru grade is changed" do
      # first_grade = Omni::Grade.where(grade_order: 10).first
      # second_grade = Omni::Grade.where(grade_order: 20).first
      # third_grade = Omni::Grade.where(grade_order: 30).first

      # me = create(Omni::Account, from_grade_id: first_grade.grade_id, thru_grade_id: third_grade.grade_id)
      me = create(Omni::Account)
      me.from_grade_id = me.thru_grade_id
      me.save
      # m`e.grades.count.should eq(1)
    end
  end

  describe "indexing" do

  end


end
