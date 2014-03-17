require 'spec_helper'

describe "stock_ledger_activity_log" do

  describe "requires" do
    it "stock_ledger_activity_log_id" do lambda{Omni::StockLedgerActivityLog.create! stock_ledger_activity_log_id nil}.should raise_error end
    # it "display" do lambda{Omni::StockLedgerActivityLog.create! display nil}.should raise_error end
    # it "stock_ledger_activity_log_nbr" do lambda{Omni::StockLedgerActivityLog.create! stock_ledger_activity_log_nbr nil}.should raise_error end
    # it "stock_ledger_activity_log_type" do lambda{Omni::StockLedgerActivityLog.create! stock_ledger_activity_log_type nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::StockLedgerActivityLog, display: 'duptest'); dup = build(Omni::StockLedgerActivityLog, display: 'duptest'); dup.should_not be_valid end
    # it "stock_ledger_activity_log_nbr" do create(Omni::StockLedgerActivityLog, stock_ledger_activity_log_nbr: 'duptest'); dup = build(Omni::StockLedgerActivityLog, stock_ledger_activity_log_nbr: 'duptest'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "stock_ledger_activity_log_id" do me = create(Omni::StockLedgerActivityLog); me.stock_ledger_activity_log_id.should_not be_nil end
    # it "stock_ledger_activity_log_nbr" do me = create(Omni::StockLedgerActivityLog); me.stock_ledger_activity_log_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "stock_ledger_activity_log_type" do lambda{Omni::StockLedgerActivityLog.create! stock_ledger_activity_log_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::StockLedgerActivityLog, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::StockLedgerActivityLog); c = create(Buildit::Note, notable_type: 'Omni::StockLedgerActivityLog',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
