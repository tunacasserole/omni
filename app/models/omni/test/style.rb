class Omni::Test::Style < Omni::Test::Base

  def self.go
    style = create_data
    style.go_build_skus
    style = Omni::Style.where(style_id: style.style_id).first
    test_it("generate skus", 1, style.skus.count)
    test_it("generate inventory", 1, style.inventories.count)
    # destroy_data
  end

  def self.create_data
    @@model_name = 'Style'
    @@model_action = 'Event'
    skus = Omni::Sku.where(display: "OMNI TEST STYLE-Lavendar-01JT").first
    skus.delete if skus
    x = Omni::Style.where(style_id: 'XXXXXXXXXXXXXXXXXXXXTESTSTYLE123').first || Omni::Style.create(style_id: 'XXXXXXXXXXXXXXXXXXXXTESTSTYLE123', display: 'OMNI TEST STYLE', size_group_id: '9454F7D44FCA11E3BC9F20C9D047DD15')
    sc = Omni::StyleColor.create(style_id: x.style_id, color_id: '3FAE1A5A4FC811E3BC9F20C9D047DD15')
    # Omni::StyleColorSize.create(style_color_id: sc.style_color_id, size_id: '045F62CAAC5711E299E700FF58D32228')
    # Omni::StyleColorSize.create(style_color_id: sc.style_color_id, size_id: '04627014AC5711E299E700FF58D32228')
    Omni::StyleLocation.create(style_location_id: 'XXXXXXXXXXXXXXTESTSTYLELOCATION1', style_id: x.style_id, location_id: '51579764AC3E11E2947800FF58D32228')
    Omni::StyleLocation.create(style_location_id: 'XXXXXXXXXXXXXXTESTSTYLELOCATION2', style_id: x.style_id, location_id: '51713A3EAC3E11E2947800FF58D32228')
    Omni::StyleSupplier.create(style_id: x.style_id, supplier_id: '6F27CE344FF511E3919820C9D047DD15')
    x=Omni::Style.where(style_id: 'XXXXXXXXXXXXXXXXXXXXTESTSTYLE123').first
    x
  end

  def self.destroy_data
    style=Omni::Style.where(style_id: 'XXXXXXXXXXXXXXXXXXXXTESTSTYLE123').first
    style.style_colors.each {|x| x.delete}
    style.style_locations.each {|x| x.delete}
    style.style_suppliers.each {|x| x.delete}
    style.skus.each {|x| x.delete}
    skus = Omni::Sku.where(display: "OMNI TEST STYLE-Lavendar-01JT").first
    skus.delete if skus
    style.delete
  end

end
