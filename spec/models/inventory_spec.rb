require 'spec_helper'

describe "inventory" do

  describe "requires" do
    it "inventory_id" do lambda{Omni::Inventory.create! inventory_id nil}.should raise_error end
    it "display" do lambda{Omni::Inventory.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Inventory, display: 'dup_test'); dup = build(Omni::Inventory, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "inventory_id" do me = create(Omni::Inventory); me.inventory_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::Inventory); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "inventory_type" do lambda{Omni::Inventory.create! inventory_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Inventory, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "inventory" do p = create(Omni::Inventory); me = create(Omni::Inventory, inventory_id: p.inventory_id); me.inventory.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::Inventory); c = create(Buildit::Note, notable_type: 'Omni::Inventory',notable_id: me.inventory_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
