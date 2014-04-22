require 'spec_helper'

describe "purchase_detail" do
  let(:sku) { create( Omni::Sku, display: 'purchase detail test' ) }
  let(:me) { create( Omni::PurchaseDetail, units_ordered: 1, sku_id: sku.sku_id ) }

  describe "requires" do
    it "purchase_id" do lambda{Omni::PurchaseDetail.create! purchase_detail_id nil}.should raise_error end
    it "purchase_detail_id" do lambda{Omni::PurchaseDetail.create! purchase_detail_id nil}.should raise_error end
    it "display" do lambda{Omni::PurchaseDetail.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    # it "display" do create(Omni::PurchaseDetail, display: 'dup_test'); dup = build(Omni::PurchaseDetail, display: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "purchase_detail_id" do
      a = create(Omni::AllocationProfile)
      s = create(Omni::Supplier)
      sku = create(Omni::Sku)
      p = create(Omni::Purchase, supplier_id: s.supplier_id)
      me = create(Omni::PurchaseDetail, purchase_id: p.purchase_id, allocation_profile_id: a.allocation_profile_id, sku_id: sku.sku_id)
      me.purchase_detail_id.should_not be_nil
    end
    # it "is_primary to true" do me = create(Omni::PurchaseDetail); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "purchase_detail_type" do lambda{Omni::PurchaseDetail.create! purchase_detail_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::PurchaseDetail, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "purchase_detail" do p = create(Omni::PurchaseDetail); me = create(Omni::PurchaseDetail, purchase_detail_id: p.purchase_detail_id); me.purchase_detail.should_not be_nil end
  end

  describe "has_many" do
    # it "notes" do me = create(Omni::PurchaseDetail); c = create(Buildit::Note, notable_type: 'Omni::PurchaseDetail',notable_id: me.purchase_detail_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "state machine should" do
    it "allocate" do
      # create projection details so there are units_needed
      p = create(Omni::Projection)
      l = Omni::Location.first.location_id
      create(Omni::Inventory, sku_id: me.sku_id, location_id: l, is_authorized: true)
      # create(Omni::Inventory, sku_id: me.sku_id, location_id: Omni::Location.last, is_authorized: true)
      create(Omni::ProjectionDetail, projection_id: p.projection_id, sku_id: me.sku_id, location_id: l, projection_1_units: 1)
      me.allocate
      me.purchase_allocations.count.should eq 1
    end
    it "approve" do
      me.approve
      me.state.should eq 'open'
    end
    it "cancel" do
      me.cancel
      # puts "\nerrors is message: #{me.errors.full_messages.to_sentence}"
      me.state.should eq 'cancelled'
    end
     it "release" do
      me.release
      me.approve
      me.receive
      me.state.should eq('complete')
    end


  end


end
