class Omni::Data::Test::Projection

  def initialize
    # @model_name = model_name
    puts "projection details"
  end

  def execute
    i_count = ActiveRecord::Base.connection.execute("select count(*) from inventories").first[0]
    p_count = ActiveRecord::Base.connection.execute("select count(*) from projection_details").first[0]
    puts "inventory count #{i_count} should equal projection count #{p_count}"

    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    puts "projection details with invalid projection count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where inventory_id is null or inventory_id not in (select inventory_id from inventories)")
    puts "projection details with invalid inventory count is #{count.first[0]}"

    data = ActiveRecord::Base.connection.execute("select b.display, count(*) from projection_details a, projections b where a.projection_id = b.projection_id group by a.projection_id")
    data.each do |x|
      puts "projection #{x[0]} has #{x[1]} details"
    end

  end

end
