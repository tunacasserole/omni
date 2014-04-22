require 'spec_helper'

describe "customer" do

  describe "requires" do
    it "customer_id" do lambda{Omni::Customer.create! customer_id nil}.should raise_error end
    it "display" do lambda{Omni::Customer.create! display nil}.should raise_error end
    it "customer_nbr" do lambda{Omni::Customer.create! customer_nbr nil}.should raise_error end
    it "last_name" do lambda{Omni::Customer.create! last_name nil}.should raise_error end
  end

  describe "uniqueness" do
    # it "display" do create(Omni::Customer, display: 'dup_test'); dup = build(Omni::Customer, display: 'dup_test'); dup.should_not be_valid end
    it "customer_nbr" do create(Omni::Customer, customer_nbr: 'dup_test'); dup = build(Omni::Customer, customer_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "customer_id" do me = create(Omni::Customer); me.customer_id.should_not be_nil end
    it "customer_nbr" do  me = create(Omni::Customer); me.customer_nbr.should_not be_nil end
    it "display" do me = create(Omni::Customer); me.display.should eq("#{me.last_name} #{me.first_name}") end
    it "country" do me = create(Omni::Customer); me.country.should eq('USA') end
    it "ship_country" do me = create(Omni::Customer); me.ship_country.should eq('USA') end
  end

  describe "lookups" do
    it "name_prefix" do lambda{Omni::Customer.create! name_prefix 'xxx'}.should raise_error end
    it "name_suffix" do lambda{Omni::Customer.create! name_suffix 'xxx'}.should raise_error end
    it "gender" do lambda{Omni::Customer.create! gender 'xxx'}.should raise_error end
    it "charge_account_type" do lambda{Omni::Customer.create! charge_account_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "user" do x = create(Buildit::User); me = create(Omni::Customer, user_id: x.user_id); me.user.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do me = create(Omni::Customer); x = create(Buildit::Note, notable_type: 'Omni::Customer',notable_id: me.customer_id);  me.notes.count.should eq(1) end
  end

  describe "states" do
    # it "should default the state to draft" do
    #   me = create(Omni::Customer)
    #   me.state.should eq('draft')
    # end

    # it "should default the_date to today" do
    #   me = create(Omni::Approval)
    #   me.the_date.should eq(Date.today)
    # end

  end

  describe "indexing" do

  end


end
