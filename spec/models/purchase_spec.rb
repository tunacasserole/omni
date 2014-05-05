require 'spec_helper'

describe "purchase" do
  let(:me) { create(Omni::Purchase) }
  # let(:detail) {  }

  describe "requires" do
    it "purchase_id" do lambda{Omni::Purchase.create! purchase_id nil}.should raise_error end
    it "supplier_id" do lambda{Omni::Purchase.create! supplier_id nil}.should raise_error end
    it "display" do lambda{Omni::Purchase.create! display nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do
      s = create(Omni::Supplier)
      create(Omni::Purchase, display: 'dup_test', supplier_id: s.supplier_id)
      dup = build(Omni::Purchase, display: 'dup_test', supplier_id: s.supplier_id)
      dup.should_not be_valid
    end
  end

  describe "defaults" do
    it "purchase_id" do
      s = create(Omni::Supplier)
      me = create(Omni::Purchase, supplier_id: s.supplier_id)
      me.purchase_id.should_not be_nil
   end
    # it "is_primary to true" do me = create(Omni::Purchase); me.is_primary.should be_true end
  end

  describe "lookups" do
    # it "purchase_type" do lambda{Omni::Purchase.create! purchase_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Purchase, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "purchase" do p = create(Omni::Purchase); me = create(Omni::Purchase, purchase_id: p.purchase_id); me.purchase.should_not be_nil end
  end

  describe "has_many" do
    it "purchase_details" do create(Omni::PurchaseDetail, purchase_id: me.purchase_id); me.purchase_details.count.should eq(1) end
    it "purchase_allocations" do
      pd = create(Omni::PurchaseDetail, purchase_id: me.purchase_id)
      create(Omni::PurchaseAllocation, purchase_detail_id: pd.purchase_detail_id)
      me.purchase_allocations.count.should eq(1)
    end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Purchase', notable_id: me.purchase_id); me.notes.count.should eq(1) end
  end

  describe "state machine should" do

    # it "bulk_allocate" do

    #   p = create(Omni::Projection)
    #   l = Omni::Location.first.location_id

    #   load = 1000
    #   bar = ProgressBar.new(load)

    #   load.times do |l|
    #     bar.increment!

    #     sku = create(Omni::Sku)

    #     # create purchase details so there are allocatable units
    #     create( Omni::PurchaseDetail, purchase_id: me.purchase_id, sku_id: sku.sku_id, units_ordered: 1 )

    #     # create projection details so there are units_needed
    #     create(Omni::ProjectionDetail, projection_id: p.projection_id, sku_id: sku.sku_id, location_id: l, projection_1_units: 1)

    #     # create inventory
    #     create(Omni::Inventory, sku_id: sku.sku_id, location_id: l, is_authorized: true)
    #   end

    #   # me.allocate
    #   # me.purchase_details.first.inventories.count.should_not be_nil
    #   # me.purchase_details.first.purchase_allocations.count.should eq(1)
    #   # me.purchase_allocations.first.should_not be_nil
    # end

    it "approve" do
      me.approve
      me.state.should eq 'open'
    end
    it "cancel" do
      me.cancel
      me.state.should eq 'cancelled'
    end
     it "release" do
      me.release
      me.state.should eq('pending_approval')
    end


  end

      # puts "\nerrors is message: #{me.errors.full_messages.to_sentence}"

end
