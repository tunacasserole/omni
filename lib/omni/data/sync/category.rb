class Omni::Data::Sync::Category < Omni::Data::Sync::Base

  def self.go
    excel_to_seed('Category','categories')
  end

  def self.map_to_db(row)

    category = Omni::Category.new(
      display: row['category_name'],
      category_code: row['category_name'],
     )

    puts "category could not be created for #{row['display'].to_s} due to: #{category.errors.full_messages}" unless category.save
  end
end
