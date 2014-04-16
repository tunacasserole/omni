class Omni::Data::Sync::Product < Omni::Data::Sync::Base

  def self.go
    excel_to_seed('Product','products')
  end

  def self.map_to_db(row)
    category_id = Omni::Category.where(display: row['category_name']).first.category_id if Omni::Category.where(display: row['category_name']).first

    product = Omni::Product.new(
      display: row['product_name'],
      category_id: category_id,
     )

    puts "product could not be created for #{row['display'].to_s} due to: #{product.errors.full_messages}" unless product.save
  end

end
