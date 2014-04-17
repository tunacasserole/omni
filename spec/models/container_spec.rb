require 'spec_helper'

describe "container" do
  let(:me) { create(Omni::Container) }

  describe "requires" do
    # it "account_id" do lambda{Omni::Container.create! account_id nil}.should raise_error end
  end

  describe "uniqueness" do
    # it "display" do create(Omni::Container, display: 'test container'); dup = build(Omni::Container, display: 'test container'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "container_id" do me.container_id.should_not be_nil end
    # it "display" do me = create(Omni::Container, first_name: 'test', last_name: 'person', email_address: 'me@me.com'); me.display.should eq("#{me.last_name}, #{me.first_name}, #{me.email_address}") end
  end

  describe "lookups" do
    it "container_type" do lambda{Omni::Container.create! container_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "account" do p = create(Omni::Account); me = create(Omni::Container, account_id: p.account_id); me.account.should_not be_nil end
  end

  describe "has_many" do

  end

  describe "indexing" do

  end

end
