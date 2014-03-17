require 'spec_helper'

describe "size" do

  describe "requires" do
    it "size_id" do lambda{Omni::Size.create! size_id nil}.should raise_error end
    it "display" do lambda{Omni::Size.create! display nil}.should raise_error end
    # it "size_nbr" do lambda{Omni::Size.create! size_nbr nil}.should raise_error end
    # it "size_type" do lambda{Omni::Size.create! size_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Size, display: 'duptest'); dup = build(Omni::Size, display: 'duptest'); dup.should_not be_valid end
    # it "size_nbr" do create(Omni::Size, size_nbr: 'duptest'); dup = build(Omni::Size, size_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "size_id" do me = create(Omni::Size); me.size_id.should_not be_nil end
    # it "size_nbr" do me = create(Omni::Size); me.size_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "size_type" do lambda{Omni::Size.create! size_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Size, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Size); c = create(Buildit::Note, notable_type: 'Omni::Size',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
