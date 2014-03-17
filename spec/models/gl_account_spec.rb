require 'spec_helper'

describe "gl_account" do

  describe "requires" do
    it "gl_account_id" do lambda{Omni::GlAccount.create! gl_account_id nil}.should raise_error end
    it "display" do lambda{Omni::GlAccount.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::GlAccount, display: 'dup_test'); dup = build(Omni::GlAccount, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "gl_account_id" do me = create(Omni::GlAccount); me.gl_account_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::GlAccount); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "gl_account_type" do lambda{Omni::GlAccount.create! gl_account_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::GlAccount, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "gl_account" do p = create(Omni::GlAccount); me = create(Omni::GlAccount, gl_account_id: p.gl_account_id); me.gl_account.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::GlAccount); c = create(Buildit::Note, notable_type: 'Omni::GlAccount',notable_id: me.gl_account_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
