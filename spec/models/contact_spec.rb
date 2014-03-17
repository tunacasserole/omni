require 'spec_helper'

describe "contact" do

  describe "requires" do
    it "account_id" do lambda{Omni::Contact.create! account_id nil}.should raise_error end
    it "display" do lambda{Omni::Contact.create! display nil}.should raise_error end
    it "first_name" do lambda{Omni::Contact.create! first_name nil}.should raise_error end
    it "last_name" do lambda{Omni::Contact.create! last_name nil}.should raise_error end
  end

  describe "uniqueness" do
    it "display" do create(Omni::Contact, display: 'test contact'); dup = build(Omni::Contact, display: 'test contact'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "contact_id" do me = create(Omni::Contact); me.contact_id.should_not be_nil end
    it "display" do me = create(Omni::Contact, first_name: 'test', last_name: 'person', email_address: 'me@me.com'); me.display.should eq("#{me.last_name}, #{me.first_name}, #{me.email_address}") end
  end

  describe "lookups" do
    it "name_suffix" do lambda{Omni::Contact.create! name_suffix 'xxx'}.should raise_error end
    it "name_prefix" do lambda{Omni::Contact.create! name_prefix 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    it "account" do p = create(Omni::Account); me = create(Omni::Contact, account_id: p.account_id); me.account.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
