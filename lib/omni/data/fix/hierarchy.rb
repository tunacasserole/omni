class Omni::Data::Fix::Hierarchy

  def self.go(model_name)
    self.fill_in_heirarchy
  end

  def self.fill_in_heirarchy

    # test_hierarchy

    # fill in styles
    # data = ActiveRecord::Base.connection.execute("select a.inventory_id, b.style_id from inventories a, skus b where a.sku_id = b.sku_id and a.style_id is null or a.style_id not in (select style_id from styles)")
    # bar = ProgressBar.new(data.count)
    # data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update inventories set style_id = '#{row[1]}' where inventory_id = '#{row[0]}'") }

    # fill in subclasses
    data = ActiveRecord::Base.connection.execute("select a.sku_id, b.subclass_id from skus a, styles b where (a.subclass_id is null or a.subclass_id not in (select subclass_id from subclasses)) and a.style_id = b.style_id")
    bar = ProgressBar.new(data.count)
    data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update skus set subclass_id = '#{row[1]}' where sku_id = '#{row[0]}'") }

    # fill in classes
    data = ActiveRecord::Base.connection.execute("select a.sku_id, b.classification_id from skus a, subclasses b where (a.classification_id is null or a.classification_id not in (select classification_id from classifications)) and a.subclass_id = b.subclass_id")
    bar = ProgressBar.new(data.count)
    data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update skus set classification_id = '#{row[1]}' where sku_id = '#{row[0]}'") }

    # fill in departments
    data = ActiveRecord::Base.connection.execute("select a.sku_id, b.department_id from skus a, classifications b where (a.department_id is null or a.department_id not in (select department_id from departments)) and a.classification_id = b.classification_id")
    bar = ProgressBar.new(data.count)
    data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update skus set department_id = '#{row[1]}' where sku_id = '#{row[0]}'") }

    # fill in projection_id
    # data = ActiveRecord::Basee.connection.execute("select a.projection_detail_id, b.department_id from projection_details a, inventories b where a.projection_id is null or a.projection_id not in (select projection_id from projections) and a.inventory_id = b.inventory_id")
    # data = ActiveRecord::Base.connection.execute("select projection_detail_id, inventory_id from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    # bar = ProgressBar.new(data.count)
    # data.each do |row|
    #   bar.increment!
    #   department_id = ActiveRecord::Base.connection.execute("select department_id from inventories where inventory_id = '#{row[1]}'").first[0]
    #   projection_id = ActiveRecord::Base.connection.execute("select projection_id from projections where department_id = '#{department_id}'").first[0]

    #   ActiveRecord::Base.connection.execute("update projection_details set projection_id = '#{projection_id}' where projection_detail_id = '#{row[0]}'")
    # end

  end

  def self.test_hierarchy
    # get total inventory count
    # data = ActiveRecord::Base.connection.execute("select count(*) from inventories")
    # puts "inventory count is #{data.first[0]}"

    # data = ActiveRecord::Base.connection.execute("select count(*) from skus where sku_id not in (select distinct(sku_id) from inventories)")
    # puts "skus missing inventory count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from skus where style_id not in (select style_id from styles)")
    puts "skus with missing or invalid styles count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from subclasses where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "subclasses with missing or invalid class count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where sku_id is null or sku_id not in (select sku_id from skus)")
    puts "inventory with missing or invalid sku count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where style_id is null or style_id not in (select style_id from styles)")
    puts "inventory with missing or invalid style count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where subclass_id is null or subclass_id not in (select subclass_id from subclasses)")
    puts "inventory with missing or invalid subclasse count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "inventory with missing or invalid classification count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where department_id is null or department_id not in (select department_id from departments)")
    puts "inventory with missing or invalid department count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    puts "projection details with missing or invalid projection count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from projection_details where inventory_id is null or inventory_id not in (select inventory_id from inventories)")
    puts "projection details with missing or invalid inventory count is #{data.first[0]}" if data.first[0] > 0


  end

end
