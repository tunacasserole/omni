require 'spec_helper'

describe "uniform" do
  let(:me) { create(Omni::Uniform) }

  describe "requires" do
    it "uniform_id" do lambda{Omni::Uniform.create! uniform_id nil}.should raise_error end
    it "display" do lambda{Omni::Uniform.create! display nil}.should raise_error end
    it "uniform_nbr" do lambda{Omni::Uniform.create! uniform_nbr nil}.should raise_error end
    # it "uniform_type" do lambda{Omni::Uniform.create! uniform_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Uniform, display: 'dup_test'); dup = build(Omni::Uniform, display: 'dup_test'); dup.should_not be_valid end
    it "uniform_nbr" do create(Omni::Uniform, uniform_nbr: 'dup_test'); dup = build(Omni::Uniform, uniform_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "uniform_id" do me.uniform_id.should_not be_nil end
    it "uniform_nbr" do me.uniform_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "uniform_type" do lambda{Omni::Uniform.create! uniform_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::Uniform, account_id: p.account_id); me.account.should_not be_nil end
  end

  describe "has_many" do
    it "details" do create(Omni::UniformDetail, uniform_id: me.uniform_id); me.details.count.should eq(1) end
    it "lookups" do
      create(Omni::UniformLookup, uniform_id: me.uniform_id)
      me.lookups.count.should eq(1)
    end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "default state to draft" do
      me.state.should eq('draft')
    end

    it "set state to active on activate" do
      me.activate
      me.state.should eq('active')
    end

    it "close any other active uniforms on activate" do
      a = create(Omni::Account)
      me = create(Omni::Uniform, account_id: a.account_id)
      me.activate
      me.state.should eq('active')
      you = create(Omni::Uniform, account_id: a.account_id)
      you.activate
      me = Omni::Uniform.where(uniform_id: me.uniform_id).first
      me.state.should eq('closed')
    end

    it "log approval on activate" do
      me.activate
      me.approvals.count.should eq(1)
    end

    it "set state to closed on close" do
      me.close
      me.state.should eq('closed')
    end

    it "activate details on activate" do
      create(Omni::UniformDetail, uniform_id: me.uniform_id)
      me.activate
      me.details.first.state.should eq('active')
    end

    it "close details on close" do
      create(Omni::UniformDetail, uniform_id: me.uniform_id)
      me.close
      me.details.first.state.should eq('closed')
    end
  end

  describe "delete" do
    # it "should delete details" do
    #      #   create(Omni::UniformDetail, uniform_id: me.uniform_id)
    #   me.delete
    #   count = Omni::UniformDetail.where(uniform_id: me.uniform_id).count
    #   count.should eq(0)
    # end

    # it "should delete lookups" do
    #      #   create(Omni::UniformLookup, uniform_id: me.uniform_id)
    #   me.destroy
    #   count = Omni::UniformLookup.where(uniform_id: me.uniform_id).count
    #   count.should eq(0)
    # end

  end

end
