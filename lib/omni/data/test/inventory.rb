class Omni::Data::Test::Inventory

  # attr_accessor :model_name

  def initialize
    # @model_name = model_name
  end

  def execute

    expected_count = ActiveRecord::Base.connection.execute("select count(*) from rms_inventory").first[0]
    puts "rms expected count is #{expected_count}"

    expected_count = ActiveRecord::Base.connection.execute("select count(*) from tg_inventory").first[0] * 7
    puts "tg expected count is #{expected_count}"

    expected_count = ActiveRecord::Base.connection.execute("select count(*) from mark_inventory").first[0]
    puts "mark expected count is #{expected_count}"

    count = ActiveRecord::Base.connection.execute("select count(*) from inventories where sku_id in (select sku_id from skus where department_id is null or department_id not in (select department_id from departments))")
    puts "inventory with invalid department count is #{count.first[0]}" if count.first[0] > 0

    # count = ActiveRecord::Base.connection.execute("select count(*) from inventories where sku_id is null or sku_id not in (select sku_id from skus)")
    # puts "inventory with missing or invalid sku count is #{count.first[0]}" if count.first[0] > 0
  end

end
