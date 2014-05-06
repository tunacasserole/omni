require 'spec_helper'

describe "uniform_detail" do
  let(:me) { create(Omni::UniformDetail) }

  describe "requires" do
    it "uniform_detail_id" do lambda{Omni::UniformDetail.create! uniform_detail_id nil}.should raise_error end
    it "uniform_id" do lambda{Omni::UniformDetail.create! uniform_id nil}.should raise_error end
    it "display" do lambda{Omni::UniformDetail.create! display nil}.should raise_error end
    it "uniform_detail_nbr" do lambda{Omni::UniformDetail.create! uniform_detail_nbr nil}.should raise_error end
    it "style_id" do lambda{Omni::UniformDetail.create! style_id nil}.should raise_error end
    it "color_id" do lambda{Omni::UniformDetail.create! color_id nil}.should raise_error end
    it "style_color_id" do lambda{Omni::UniformDetail.create! style_color_id nil}.should raise_error end
    it "from_grade_id" do lambda{Omni::UniformDetail.create! from_grade_id nil}.should raise_error end
    it "style_color_id" do lambda{Omni::UniformDetail.create! style_color_id nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::UniformDetail, display: 'dup_test'); dup = build(Omni::UniformDetail, display: 'dup_test'); dup.should_not be_valid end
    it "uniform_detail_nbr" do create(Omni::UniformDetail, uniform_detail_nbr: 'dup_test'); dup = build(Omni::UniformDetail, uniform_detail_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "default should" do
    it "uniform_detail_id" do me.uniform_detail_id.should_not be_nil end
    it "uniform_detail_nbr" do me.uniform_detail_nbr.should_not be_nil end
    it "display" do me.display.should eq("#{me.uniform_display} - #{me.style_color_display} - #{me.uniform_detail_nbr}") end
  end

  describe "lookups" do
    it "uniform_sources" do lambda{Omni::UniformDetail.create! uniform_sources 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "uniform" do p = create(Omni::Uniform); me = create(Omni::UniformDetail, uniform_id: p.uniform_id); me.uniform.should_not be_nil end
    it "style" do p = create(Omni::Style); me = create(Omni::UniformDetail, style_id: p.style_id); me.style.should_not be_nil end
    it "color" do p = create(Omni::Color); me = create(Omni::UniformDetail, color_id: p.color_id); me.color.should_not be_nil end
    it "style_color" do p = create(Omni::StyleColor); me = create(Omni::UniformDetail, style_color_id: p.style_color_id); me.style_color.should_not be_nil end
    it "from_grade" do p = create(Omni::Grade); me = create(Omni::UniformDetail, from_grade_id: p.grade_id); me.from_grade.should_not be_nil end
    it "thru_grade" do p = create(Omni::Grade); me = create(Omni::UniformDetail, thru_grade_id: p.grade_id); me.thru_grade.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do c = create(Buildit::Note, notable_type: 'Omni::UniformDetail',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "hooks should" do
    it "not allow a uniform detail to have a from or thru grade that is not valid for the account" do
      g1 = Omni::Grade.where(short_name: '1').first
      g8 = Omni::Grade.where(short_name: '8').first
      g12 = Omni::Grade.where(short_name: '12').first
      a = create(Omni::Account, from_grade_id: g1.grade_id, thru_grade_id: g8.grade_id)
      u = create(Omni::Uniform, account_id: a.account_id)
      me = build(Omni::UniformDetail, uniform_id: u.uniform_id, from_grade_id: g12.grade_id)
      me.should_not be_valid
      me.from_grade_id = g8.grade_id
      me.save
      me.should be_valid
      me.thru_grade_id = g12.grade_id
      me.save
      me.should_not be_valid
      me.thru_grade_id = g1.grade_id
      me.save
      me.should be_valid
    end

    it "set from_grade to account from_grade" do
      g = create(Omni::Grade)
      a = create(Omni::Account, from_grade_id: g.grade_id, thru_grade_id: g.grade_id)
      u = create(Omni::Uniform, account_id: a.account_id)
      me = create(Omni::UniformDetail, uniform_id: u.uniform_id)
      me.from_grade_id.should eq(a.from_grade_id)
    end

    it "set thru_grade to account thru_grade" do
      g = create(Omni::Grade)
      a = create(Omni::Account, from_grade_id: g.grade_id, thru_grade_id: g.grade_id)
      u = create(Omni::Uniform, account_id: a.account_id)
      me = create(Omni::UniformDetail, uniform_id: u.uniform_id)
      me.thru_grade_id.should eq(a.from_grade_id)
    end

    it "set state to draft when modified" do
      me = create(Omni::UniformDetail)
      me.activate
      me.is_required_male = true
      me.save
      me.state.should eq('draft')
    end

    it "set color on create" do
      s = create(Omni::Style)
      c = create(Omni::Color)
      sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
      me = create(Omni::UniformDetail, style_color_id: sc.style_color_id)
      me.color_id.should eq(c.color_id)
    end

    it "set color on row update" do
      s = create(Omni::Style)
      c = create(Omni::Color)
      sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
      me = create(Omni::UniformDetail, style_color_id: sc.style_color_id)
      me.color_id.should eq(c.color_id)
    end

    it "set style on row update" do
      s = create(Omni::Style)
      c = create(Omni::Color)
      sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
      me = create(Omni::UniformDetail, style_color_id: sc.style_color_id)
      me.style_id.should eq(s.style_id)
    end
  end

  describe "state machine should" do
    it "default state to draft" do
      me = create(Omni::UniformDetail)
      me.state.should eq('draft')
    end

    it "set state to active on activate" do
      me = create(Omni::UniformDetail)
      me.activate
      me.state.should eq('active')
    end

    it "set state to closed on close" do
      me = create(Omni::UniformDetail)
      me.close
      me.state.should eq('closed')
    end

    it "populate lookups on activate" do
      s = create(Omni::Style)
      size = create(Omni::Size)
      c = create(Omni::Color)
      sc = create(Omni::StyleColor, style_id: s.style_id, color_id: c.color_id)
      create(Omni::Sku, style_id: s.style_id, size_id: size.size_id)
      g = create(Omni::Grade)
      u = create(Omni::Uniform)
      me = create(Omni::UniformDetail, uniform_id: u.uniform_id, from_grade_id: g.grade_id, thru_grade_id: g.grade_id, style_color_id: sc.style_color_id)
      me.activate
      u.uniform_lookups.count.should eq(1)
    end

    it "remove lookups on close" do
      u = create(Omni::Uniform)
      me = create(Omni::UniformDetail, uniform_id: u.uniform_id)
      me.close
      u.uniform_lookups.count.should eq(0)
    end

  end

  describe "delete" do
    it "remove lookups on delete" do
      u = create(Omni::Uniform)
      me = create(Omni::UniformDetail, uniform_id: u.uniform_id)
      me.activate
      me.close
      u.uniform_lookups.count.should eq(0)
    end
  end




end








