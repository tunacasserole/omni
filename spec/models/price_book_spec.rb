require 'spec_helper'

describe "price_book" do

  describe "requires" do
    it "price_book_id" do lambda{Omni::PriceBook.create! price_book_id nil}.should raise_error end
    # it "display" do lambda{Omni::PriceBook.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::PriceBook, display: 'dup_test'); dup = build(Omni::PriceBook, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "price_book_id" do me = create(Omni::PriceBook); me.price_book_id.should_not be_nil end
    # it "is_primary to true" do me = create(Omni::PriceBook); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "price_book_type" do lambda{Omni::PriceBook.create! price_book_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::PriceBook, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "price_book" do p = create(Omni::PriceBook); me = create(Omni::PriceBook, price_book_id: p.price_book_id); me.price_book.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::PriceBook); c = create(Buildit::Note, notable_type: 'Omni::PriceBook',notable_id: me.price_book_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end


end
