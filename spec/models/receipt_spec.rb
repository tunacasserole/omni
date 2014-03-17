require 'spec_helper'

describe "receipt" do

  describe "requires" do
    it "receipt_id" do lambda{Omni::Receipt.create! receipt_id nil}.should raise_error end
    it "display" do lambda{Omni::Receipt.create! display nil}.should raise_error end
    # it "receipt_nbr" do lambda{Omni::Receipt.create! receipt_nbr nil}.should raise_error end
    # it "receipt_type" do lambda{Omni::Receipt.create! receipt_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::Receipt, display: 'dup_test'); dup = build(Omni::Receipt, display: 'dup_test'); dup.should_not be_valid end
    # it "receipt_nbr" do create(Omni::Receipt, receipt_nbr: 'dup_test'); dup = build(Omni::Receipt, receipt_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "receipt_id" do me = create(Omni::Receipt); me.receipt_id.should_not be_nil end
    # it "receipt_nbr" do me = create(Omni::Receipt); me.receipt_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "receipt_type" do lambda{Omni::Receipt.create! receipt_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Receipt, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Receipt); c = create(Buildit::Note, notable_type: 'Omni::Receipt',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
