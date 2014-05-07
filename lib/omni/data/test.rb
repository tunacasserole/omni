class Omni::Data::Test

  # attr_accessor :model_name

  def initialize
    # @model_name = model_name
  end

  # def execute_old
  #   @model_name.execute if @model_name
  # end

  def execute

    hierarchy

    inventory

    projection

  end

  def hierarchy
    count = ActiveRecord::Base.connection.execute "select count(*) from styles where subclass_id not in (select subclass_id from subclasses)"
    puts "styles missing subclass count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from subclasses where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "subclasses with invalid class count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from classifications where department_id is null or department_id not in (select department_id from classifications)")
    puts "classes with invalid department count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where style_id is null or style_id not in (select style_id from styles)")
    puts "sku with invalid style count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where subclass_id is null or subclass_id not in (select subclass_id from subclasses)")
    puts "sku with invalid subclass count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "sku with invalid classification count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where department_id is null or department_id not in (select department_id from departments)")
    puts "sku with invalid department count is #{count.first[0]}"
  end

  def inventory
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

  def projection
    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    puts "projection details with invalid projection count is #{count.first[0]}" if count.first[0] > 0

    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where inventory_id is null or inventory_id not in (select inventory_id from inventories)")
    puts "projection details with invalid inventory count is #{count.first[0]}" if count.first[0] > 0
  end

end
