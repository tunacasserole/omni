require 'spec_helper'

describe "receipt_format" do

  describe "requires" do
    it "receipt_format_id" do lambda{Omni::ReceiptFormat.create! receipt_format_id nil}.should raise_error end
    it "display" do lambda{Omni::ReceiptFormat.create! display nil}.should raise_error end
    # it "receipt_format_nbr" do lambda{Omni::ReceiptFormat.create! receipt_format_nbr nil}.should raise_error end
    # it "receipt_format_type" do lambda{Omni::ReceiptFormat.create! receipt_format_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::ReceiptFormat, display: 'dup_test'); dup = build(Omni::ReceiptFormat, display: 'dup_test'); dup.should_not be_valid end
    # it "receipt_format_nbr" do create(Omni::ReceiptFormat, receipt_format_nbr: 'dup_test'); dup = build(Omni::ReceiptFormat, receipt_format_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "receipt_format_id" do me = create(Omni::ReceiptFormat); me.receipt_format_id.should_not be_nil end
    # it "receipt_format_nbr" do me = create(Omni::ReceiptFormat); me.receipt_format_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "receipt_format_type" do lambda{Omni::ReceiptFormat.create! receipt_format_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::ReceiptFormat, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::ReceiptFormat); c = create(Buildit::Note, notable_type: 'Omni::ReceiptFormat',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
