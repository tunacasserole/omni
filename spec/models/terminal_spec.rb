require 'spec_helper'

describe "terminal" do

  describe "requires" do
    it "terminal_id" do lambda{Omni::Terminal.create! terminal_id nil}.should raise_error end
    it "location_id" do lambda{Omni::Terminal.create! location_id nil}.should raise_error end
    it "display" do lambda{Omni::Terminal.create! display nil}.should raise_error end
    it "terminal_nbr" do lambda{Omni::Terminal.create! terminal_nbr nil}.should raise_error end
    it "mac_address" do lambda{Omni::Terminal.create! mac_address nil}.should raise_error end
    it "local_server_ip" do lambda{Omni::Terminal.create! local_server_ip nil}.should raise_error end
    it "receipt_printer_url" do lambda{Omni::Terminal.create! receipt_printer_url nil}.should raise_error end
    it "receipt_printer_ip" do lambda{Omni::Terminal.create! receipt_printer_ip nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Terminal, display: 'dup_test'); dup = build(Omni::Terminal, display: 'dup_test'); dup.should_not be_valid end
    it "terminal_nbr" do create(Omni::Terminal, terminal_nbr: '123'); dup = build(Omni::Terminal, terminal_nbr: '123'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "terminal_id" do me = create(Omni::Terminal); me.terminal_id.should_not be_nil end
    it "terminal_nbr" do me = create(Omni::Terminal); me.terminal_nbr.should_not be_nil end
    it "display" do me = create(Omni::Terminal); me.display.should eq("#{me.location_display} - Terminal: #{me.terminal_nbr}") end
  end

  describe "lookups" do
    # it "terminal_type" do lambda{Omni::Terminal.create! terminal_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "location" do p = create(Omni::Location); me = create(Omni::Terminal, location_id: p.location_id); me.location.should_not be_nil end
    it "till" do p = create(Omni::Till); me = create(Omni::Terminal, till_id: p.till_id); me.till.should_not be_nil end
    it "receipt_format" do p = create(Omni::ReceiptFormat); me = create(Omni::Terminal, receipt_format_id: p.receipt_format_id); me.receipt_format.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Terminal); c = create(Buildit::Note, notable_type: 'Omni::Terminal',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
