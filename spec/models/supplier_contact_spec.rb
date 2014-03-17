require 'spec_helper'

describe "supplier_contact" do

  describe "requires" do
    it "supplier_contact_id" do lambda{Omni::SupplierContact.create! supplier_contact_id nil}.should raise_error end
    it "display" do lambda{Omni::SupplierContact.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::SupplierContact, display: 'dup_test'); dup = build(Omni::SupplierContact, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "supplier_contact_id" do me = create(Omni::SupplierContact); me.supplier_contact_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::SupplierContact); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "supplier_contact_type" do lambda{Omni::SupplierContact.create! supplier_contact_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier_contact" do p = create(Omni::SupplierContact); me = create(Omni::SupplierContact, supplier_contact_id: p.supplier_contact_id); me.supplier_contact.should_not be_nil end
    # it "supplier_contact" do p = create(Omni::SupplierContact); me = create(Omni::SupplierContact, supplier_contact_id: p.supplier_contact_id); me.supplier_contact.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::SupplierContact); c = create(Buildit::Note, notable_type: 'Omni::SupplierContact',notable_id: me.supplier_contact_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
