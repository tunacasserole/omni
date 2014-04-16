class Omni::Sync::Style < Omni::Sync::Base

  def self.go
    # table_to_seed('Style','styles','styles_sync')
    # excel_to_seed('Style','styles')
    # update_style_id
    # update_retail_price
  end

  def self.update_retail_price
    ActiveRecord::Base.connection.execute("select style_id from styles").each_with_index do |x,i|
      initial_retail_price = ActiveRecord::Base.connection.execute("select initial_retail_price from skus where style_id = '#{x[0]}' limit 1").first[0]
      ActiveRecord::Base.connection.execute("update styles set initial_retail_price = #{initial_retail_price} where style_id = '#{x[0]}'")
    end
  end


  def self.map_to_db(row)

    update_fabric_content(row)

    # size_group_id = Omni::SizeGroup.where(short_name: row['size_group']).first.size_group_id if Omni::SizeGroup.where(short_name: row['size_group']).first
    # subclass_id = Omni::Subclass.where(display: row['subclass_name']).first.subclass_id if Omni::Subclass.where(display: row['subclass_name']).first
    # supplier_id = Omni::Supplier.where(display: row['supplier_name']).first.supplier_id if Omni::Supplier.where(display: row['supplier_name']).first
    # product_id = Omni::Product.where(display: row['product_name']).first.product_id if Omni::Product.where(display: row['product_name']).first
    # account_id = Omni::Account.where(display: row['account_name']).first.account_id if Omni::Account.where(display: row['account_name']).first unless row['account_name'] == 'GENERIC ITEM'
    # is_converted = row['g_c'] == 'CONVERTED GARMENT'

    # style = Omni::Style.new(
    #   display: row['style_name'],
    #   description: row['description'],
    #   pos_name: row['style_receipt_name'],
    #   initial_retail_price: row['retail'],
    #   size_group_id: size_group_id,
    #   subclass_id: subclass_id,
    #   supplier_id: supplier_id,
    #   product_id: product_id,
    #   account_id: account_id,
    #   fabric_content: row['FABRIC_CONTENT'],
    #   is_converted: is_converted
    #  )

    # # puts "style could not be created for #{row['style_name'].to_s} due to: #{style.errors.full_messages}" unless style.save
  end

  def self.update_fabric_content(row)
    style = Omni::Style.where(display: row['style_name']).first
    style.fabric_content = row['fabric_content']
    style.save
  end

  def self.update_style_id
    sql = "update styles, skus_load set styles.style_id = skus_load.style_id where skus_load.style_name = styles.display"
    ActiveRecord::Base.connection.execute sql
  end
end

    # data = Omni::Style.all
    # data.each_with_index do |x, i|
    #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
    #   style_id = Omni::SkuLoad.where(style_id)



#   def self.update_missing_suppliers_from_styles_load
#     data = Omni::Style.where(supplier_id: nil)
#     data.each_with_index do |x, i|
#       puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
#       # sku_id = @skus[source]
#       load = Omni::StyleLoad.where(display: x.display).first
#       puts "load not found ==> x.supplier_id is #{x.supplier_id} and style is #{x.display}" unless load
#       next unless load
#       supplier = Omni::Supplier.where(display: load.supplier_id).first || Omni::Supplier.where(description: load.supplier_id).first
#       puts "supplier not found ==> and load.supplier is #{load.supplier} supplier name is #{load.supplier} and style is #{x.display}" unless supplier
#       next unless supplier
#       x.supplier_id = supplier.supplier_id
#       x.save
#     end
#   end

#   def self.update_missing_suppliers_from_skus_load
#     data = Omni::Style.where(supplier_id: nil)
#     data.each_with_index do |x, i|
#       puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
#       # sku_id = @skus[source]
#       load = Omni::SkuLoad.where(style_display: x.display).first
#       puts "load not found ==> x.supplier_id is #{x.supplier_id} and style is #{x.display}" unless load
#       next unless load
#       supplier = Omni::Supplier.where(display: load.supplier).first || Omni::Supplier.where(description: load.supplier).first
#       puts "supplier not found ==> and load.supplier is #{load.supplier} supplier name is #{load.supplier} and style is #{x.display}" unless supplier
#       next unless supplier
#       x.supplier_id = supplier.supplier_id
#       x.save
#     end
#   end

#   def self.update_subclasses
#     data = Omni::Style.all
#     data.each_with_index do |x, i|
#       puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
#       load = Omni::StyleLoad.where(display: x.display).first
#       next unless load
#       subclass = Omni::Subclass.where(display: load.subclass_id).first
#       next unless subclass
#       x.subclass_id = subclass.subclass_id
#       x.save
#     end
#   end

#   def self.update_size_groups
#     data = Omni::Style.all
#     data.each_with_index do |x, i|
#       puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
#       load = Omni::StyleLoad.where(display: x.display).first
#       next unless load
#       size_group = Omni::SizeGroup.where(concatenated_name: load.size_group_id).first
#       next unless size_group
#       x.size_group_id = size_group.size_group_id
#       x.save
#     end
#   end
# end
