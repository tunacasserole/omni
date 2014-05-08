require 'spec_helper'

describe "uniform" do
  let(:me) { create(Omni::Uniform, from_grade_id) }

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
    it "uniform_details" do create(Omni::UniformDetail, uniform_id: me.uniform_id); me.uniform_details.count.should eq(1) end
    it "uniform_lookups" do
      create(Omni::UniformLookup, uniform_id: me.uniform_id)
      me.uniform_lookups.count.should eq(1)
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
      me.uniform_details.first.state.should eq('active')
    end

    it "close details on close" do
      create(Omni::UniformDetail, uniform_id: me.uniform_id)
      me.close
      me.uniform_details.first.state.should eq('closed')
    end
  end

  describe "PPL" do
    it "should return a product price list for the uniform" do

      5.times do |i|
        # setup styles and uniform details
        c = create(Omni::Color)
        # size = create(Omni::Size)
        s = create(Omni::Style, description: 'Test Style', initial_retail_price: 999.99, pos_name: 'test pos name')
        sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
        # scs = create(Omni::StyleColorSize, style_color_id: sc.style_color_id, size_id: size.size_id)
        create(Omni::UniformDetail, uniform_id: me.uniform_id, style_id: s.style_id, color_id: c.color_id, style_color_id: sc.style_color_id)
      end
      # count = Omni::UniformDetail.where(uniform_id: me.uniform_id).count
      me.uniform_details.count.should eq(5)
      me.ppl.count.should eq(5)
    end
  end

  it "should insert 10000 lookups in 30 seconds" do
    load = 100
    f = Omni::Grade.where( grade_order: Omni::Grade.minimum(:grade_order) ).first
    l = Omni::Grade.where( grade_order: Omni::Grade.maximum(:grade_order) ).first
    a = create(Omni::Account, from_grade_id: f.grade_id, thru_grade_id: l.grade_id)
    Omni::Grade.all.each { |g| create(Omni::AccountGrade, account_id: a.account_id, grade_id: g.grade_id, grade_order: g.grade_order, grade_name: g.grade_name) }
    u = create(Omni::Uniform, account_id: a.account_id)

    bar = ProgressBar.new(load)
    load.times do |i|
      bar.increment!
      s = create(Omni::Style, description: 'Test Style', initial_retail_price: 999.99, pos_name: 'test pos name')
      size = create(Omni::Size, display: "test #{i}")
      c = create(Omni::Color)
      sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
      scs = create( Omni::StyleColorSize, style_color_id: sc.style_color_id, size_id: size.size_id )
      sku = create( Omni::Sku, style_id: s.style_id )
      scs.sku_id = sku.sku_id
      scs.save

      ud = create(Omni::UniformDetail, uniform_id: u.uniform_id, style_id: s.style_id, color_id: c.color_id, style_color_id: sc.style_color_id, from_grade_id: f.grade_id, thru_grade_id: l.grade_id )
      ud.should be_valid
      ud.state.should eq('draft')
    end

    u.activate
    u.uniform_lookups.count.should eq(16 * load)
  end


    # it "should delete lookups" do
    #      #   create(Omni::UniformLookup, uniform_id: me.uniform_id)
    #   me.destroy
    #   count = Omni::UniformLookup.where(uniform_id: me.uniform_id).count
    #   count.should eq(0)
    # end

end
