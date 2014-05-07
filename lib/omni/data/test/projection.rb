class Omni::Data::Test::Projection

  def initialize
    # @model_name = model_name
  end

  def execute

    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    puts "projection details with invalid projection count is #{count.first[0]}" if count.first[0] > 0

    count = ActiveRecord::Base.connection.execute("select count(*) from projection_details where inventory_id is null or inventory_id not in (select inventory_id from inventories)")
    puts "projection details with invalid inventory count is #{count.first[0]}" if count.first[0] > 0
  end

end
