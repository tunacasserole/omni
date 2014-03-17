require 'spec_helper'

describe "contract" do

  describe "requires" do
    it "contract_id" do lambda{Omni::Contract.create! contract_id nil}.should raise_error end
    it "display" do lambda{Omni::Contract.create! display nil}.should raise_error end
    it "contract_nbr" do lambda{Omni::Contract.create! contract_nbr nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::Contract, display: 'dup_test'); dup = build(Omni::Contract, display: 'dup_test'); dup.should_not be_valid end
    it "contract_nbr" do create(Omni::Contract, contract_nbr: 'dup_test'); dup = build(Omni::Contract, contract_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "contract_id" do me = create(Omni::Contract); me.contract_id.should_not be_nil end
    it "contract_nbr" do  me = create(Omni::Contract); me.contract_nbr.should_not be_nil end
    it "display" do me = create(Omni::Contract); me.display.should eq("#{me.account_display}, Contract: #{me.contract_nbr} - #{me.effective_date}") end
    it "rep_user_id" do a = create(Buildit::User); b = create(Omni::Account, rep_user_id: a.user_id); me = create(Omni::Contract, account_id: b.account_id); me.rep_user_id.should eq(a.user_id) end
  end

  describe "lookups" do

  end

  describe "belongs_to a" do
    it "account" do x = create(Omni::Account); me = create(Omni::Contract, account_id: x.account_id); me.account.should_not be_nil end
    it "rep_user" do x = create(Buildit::User); me = create(Omni::Contract, rep_user_id: x.user_id); me.rep_user.should_not be_nil end
    it "parker_signed_by_user" do x = create(Buildit::User); me = create(Omni::Contract, parker_signed_by_user_id: x.user_id); me.parker_signed_by_user.should_not be_nil end
    it "customer_signed_by_user" do x = create(Buildit::User); me = create(Omni::Contract, customer_signed_by_user_id: x.user_id); me.customer_signed_by_user.should_not be_nil end
    it "activated_by_user" do x = create(Buildit::User); me = create(Omni::Contract, activated_by_user_id: x.user_id); me.activated_by_user.should_not be_nil end
  end

  describe "has_many" do
    it "notes" do me = create(Omni::Contract); x = create(Buildit::Note, notable_type: 'Omni::Contract',notable_id: me.contract_id);  me.notes.count.should eq(1) end
  end

  describe "state machine should" do
    it "default to draft" do
      me = create(Omni::Contract)
      me.state.should eq('draft')
    end

    it "set state to active on activate" do
      me = create(Omni::Contract)
      me.activate
      me.state.should eq('active')
    end

    it "set state to closed on close" do
      me = create(Omni::Contract)
      me.close
      me.state.should eq('closed')
    end
  end

  describe "indexing" do

  end


end
