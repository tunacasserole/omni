require 'spec_helper'

describe "uniform" do

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
    it "uniform_id" do me = create(Omni::Uniform); me.uniform_id.should_not be_nil end
    it "uniform_nbr" do me = create(Omni::Uniform); me.uniform_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "uniform_type" do lambda{Omni::Uniform.create! uniform_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Uniform, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    it "details" do me = create(Omni::Uniform); c = create(Omni::UniformDetail, uniform_id: me.uniform_id); me.details.count.should eq(1) end
    it "lookups" do
      me = create(Omni::Uniform)
      create(Omni::UniformLookup, uniform_id: me.uniform_id)
      me.lookups.count.should eq(1)
    end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "default state to draft" do
      me = create(Omni::Uniform)
      me.state.should eq('draft')
    end

    it "set state to active on activate" do
      me = create(Omni::Uniform)
      me.activate
      me.state.should eq('active')
    end

    it "log approval on activate" do
      me = create(Omni::Uniform)
      me.activate
      me.approvals.count.should eq(1)
    end

    it "set state to closed on close" do
      me = create(Omni::Uniform)
      me.close
      me.state.should eq('closed')
    end

    it "activate details on activate" do
      me = create(Omni::Uniform)
      create(Omni::UniformDetail, uniform_id: me.uniform_id)
      me.activate
      me.details.first.state.should eq('active')
    end

    it "close details on activate" do
      me = create(Omni::Uniform)
      create(Omni::UniformDetail, uniform_id: me.uniform_id)
      me.close
      me.details.first.state.should eq('closed')
    end
  end

  describe "delete" do
    # it "should delete details" do
    #   me = create(Omni::Uniform)
    #   create(Omni::UniformDetail, uniform_id: me.uniform_id)
    #   me.delete
    #   count = Omni::UniformDetail.where(uniform_id: me.uniform_id).count
    #   count.should eq(0)
    # end

    # it "should delete lookups" do
    #   me = create(Omni::Uniform)
    #   create(Omni::UniformLookup, uniform_id: me.uniform_id)
    #   me.destroy
    #   count = Omni::UniformLookup.where(uniform_id: me.uniform_id).count
    #   count.should eq(0)
    # end

  end

end
