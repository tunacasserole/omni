require 'spec_helper'

describe "style" do
  let(:size_group) { create(Omni::SizeGroup) }
  # let(:size_group_detail) {    create(Omni::SizeGroupDetail, size_group_id: size_group.size_group_id, size_id: create(Omni::Size).size_id) }
  let(:me) { create(Omni::Style, size_group_id: size_group.size_group_id) }

  describe "requires" do
    it "style_id" do lambda{Omni::Style.create! style_id nil}.should raise_error end
    it "display" do lambda{Omni::Style.create! display nil}.should raise_error end
    it "style_nbr" do lambda{Omni::Style.create! style_nbr nil}.should raise_error end
  end

  describe "checks uniqueness of" do
    it "display" do create(Omni::Style, display: 'dup_test'); dup = build(Omni::Style, display: 'dup_test'); dup.should_not be_valid end
    it "style_nbr" do create(Omni::Style, style_nbr: 'dup_test'); dup = build(Omni::Style, style_nbr: 'dup_test'); dup.should_not be_valid end
  end

  describe "defaults" do
    it "style_id" do me.style_id.should_not be_nil end
    it "style_nbr" do me.style_nbr.should_not be_nil end
  end

  describe "lookups" do
    # it "style_type" do lambda{Omni::Style.create! style_type 'xxx'}.should raise_error end
  end

  describe "belongs_to a" do
    # it "supplier" do p = create(Omni::Supplier); me = create(Omni::Style, supplier_id: p.supplier_id); me.supplier.should_not be_nil end
    # it "style" do p = create(Omni::Style); me = create(Omni::Style, style_id: p.style_id); me.style.should_not be_nil end
  end

  describe "has_many" do
    it "suppliers" do ss = create(Omni::StyleSupplier, style_id: me.style_id); me.style_suppliers.count.should eq(1) end
    # it "supplier_colors" do create(Omni::StyleSupplierColor, style_supplier_id: ss.style_id); me.style_supplier_colors.count.should eq(1) end
    it "colors" do sc = create(Omni::StyleColor, style_id: me.style_id); me.style_colors.count.should eq(1) end
    # it "color_sizes" do create(Omni::StyleColorSize, style_color_id: sc.style_id); me.style_color_sizes.count.should eq(1) end
    it "locations" do create(Omni::StyleLocation, style_id: me.style_id); me.style_locations.count.should eq(1) end
    it "notes" do create(Buildit::Note, notable_type: 'Omni::Style',notable_id: me.style_id); me.notes.count.should eq(1) end
  end

  describe "indexing" do

  end

  describe "build skus should" do
    it "prevent building skus without color, size, color_size, location and supplier" do
      me.build_skus
      me.skus.count.should eq(0)
    end

    it "build 1 sku when there is 1 sku in the size group and 1 color" do
      # setup sizes
      create(Omni::SizeGroupDetail, size_group_id: size_group.size_group_id, size_id: create(Omni::Size).size_id)
      me.size_group.size_group_details.count.should eq(1)

      # puts "setup colors, suppliers & locations"
      create(Omni::StyleColor, style_id: me.style_id, color_id: Omni::Color.first.color_id)
      me.style_colors.count.should eq(1)
      me.style_color_sizes.count.should eq(1)
      create(Omni::StyleSupplier, style_id: me.style_id, supplier_id: Omni::Supplier.first.supplier_id)
      create(Omni::StyleLocation, style_id: me.style_id, location_id: Omni::Location.first.location_id)

      # build skus
      me.build_skus
      me.skus.count.should eq(size_group.size_group_details.count)
    end

    it "build 2 sku_suppliers when there are 2 style suppliers" do
      # setup sizes
      create(Omni::SizeGroupDetail, size_group_id: size_group.size_group_id, size_id: create(Omni::Size).size_id)
      me.size_group.size_group_details.count.should eq(1)

      # setup colors
      1.times { |x| create( Omni::StyleColor, style_id: me.style_id, color_id: create(Omni::Color).color_id ) }

      # setup suppliers * locations
      2.times { |x| create(Omni::StyleSupplier, style_id: me.style_id, supplier_id: create(Omni::Supplier).supplier_id) }
      1.times { |x| create(Omni::StyleLocation, style_id: me.style_id, location_id: create(Omni::Location).location_id) }

      # build skus
      me.build_skus
      me.skus.first.sku_suppliers.count.should eq(2)
    end

    it "build 2 inventories when there are 2 style_locations" do
      # setup sizes
      1.times { |x| create( Omni::SizeGroupDetail, size_group_id: size_group.size_group_id, size_id: create(Omni::Size).size_id ) }

      # setup colors
      1.times { |x| create( Omni::StyleColor, style_id: me.style_id, color_id: create(Omni::Color).color_id ) }

      # setup suppliers
      1.times { |x| create(Omni::StyleSupplier, style_id: me.style_id, supplier_id: create(Omni::Supplier).supplier_id) }

      # setup locations
      2.times { |x| create(Omni::StyleLocation, style_id: me.style_id, location_id: create(Omni::Location).location_id) }

      # build skus
      me.build_skus
      me.skus.first.inventories.count.should eq(2)
    end

    it "build 5 skus when there are 1 sizes and 5 colors", slow: true do
      # puts "== #{Time.now.strftime("%H:%M:%S").yellow}: "
      # setup sizes
      1.times { |x| create( Omni::SizeGroupDetail, size_group_id: size_group.size_group_id, size_id: create(Omni::Size).size_id ) }
      me.size_group_id = size_group.size_group_id
      me.save
      me.size_group.size_group_details.count.should eq(1)

      # setup colors
      5.times { |x| create( Omni::StyleColor, style_id: me.style_id, color_id: create(Omni::Color).color_id ) }
      me.style_colors.count.should eq(5)
      me.style_color_sizes.count.should eq(5)

      # setup suppliers
      1.times { |x| create(Omni::StyleSupplier, style_id: me.style_id, supplier_id: create(Omni::Supplier).supplier_id) }

      # setup locations
      2.times { |x| create(Omni::StyleLocation, style_id: me.style_id, location_id: create(Omni::Location).location_id) }

      # build skus
      me.build_skus

      me.skus.count.should eq(5)
      me.skus.first.inventories.count.should eq(2)
      # puts "== #{Time.now.strftime("%H:%M:%S").yellow}: "
    end

  end


end




