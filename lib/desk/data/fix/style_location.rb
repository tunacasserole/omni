class Omni::Data::Fix::StyleLocation

  def self.go(model_name)
    data = ActiveRecord::Base.connection.execute("select b.style_id, a.location_id from inventories a, skus b where a.sku_id = b.sku_id group by b.style_id, a.location_id")
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      Omni::StyleLocation.create(style_id: x[0], location_id: x[1])
    end
  end
end
