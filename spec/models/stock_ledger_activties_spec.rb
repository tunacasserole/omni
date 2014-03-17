require 'spec_helper'

describe "stock_ledger_activity" do

  describe "requires" do
    it "stock_ledger_activity_id" do lambda{Omni::StockLedgerActvity.create! stock_ledger_activity_id nil}.should raise_error end
    it "display" do lambda{Omni::StockLedgerActivity.create! display nil}.should raise_error end
    # it "stock_ledger_activity_nbr" do lambda{Omni::StockLedgerActivity.create! stock_ledger_activity_nbr nil}.should raise_error end
    # it "stock_ledger_activity_type" do lambda{Omni::StockLedgerActivity.create! stock_ledger_activity_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::StockLedgerActivity, display: 'duptest'); dup = build(Omni::StockLedgerActivity, display: 'duptest'); dup.should_not be_valid end
    # it "stock_ledger_activity_nbr" do create(Omni::StockLedgerActivity, stock_ledger_activity_nbr: 'duptest'); dup = build(Omni::StockLedgerActivity, stock_ledger_activity_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "stock_ledger_activity_id" do
      r = create(Omni::Ruleset)
      me = create(Omni::StockLedgerActivity, ruleset_id: r.ruleset_id)
      me.stock_ledger_activity_id.should_not be_nil
    end
    # it "stock_ledger_activity_nbr" do me = create(Omni::StockLedgerActivity); me.stock_ledger_activity_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "stock_ledger_activity_type" do lambda{Omni::StockLedgerActivity.create! stock_ledger_activity_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::StockLedgerActivity, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::StockLedgerActivity); c = create(Buildit::Note, notable_type: 'Omni::StockLedgerActivity',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
