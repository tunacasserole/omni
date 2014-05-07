class Omni::Data::Fix::Inventory

  def self.go(model_name)
    lookup_hash = {}; ActiveRecord::Base.connection.execute("select projection_detail_id, inventory_id from projection_details").each {|x| lookup_hash[x[1]] = x[0]}

    data = ActiveRecord::Base.connection.execute("select inventory_id from inventories where projection_detail_id is null or projection_detail_id = ''")
    bar = ProgressBar.new(data.count)

    data.each { |x| ActiveRecord::Base.connection.execute "update inventories set projection_detail_id = '#{lookup_hash[x[0]]}' where inventory_id = '#{x[0]}'"; bar.increment! }
  end
end
