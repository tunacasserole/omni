class Omni::Data::Fix::SkuAlias

  def self.go(model_name)
    data = ActiveRecord::Base.connection.execute("select sku_alias_id from sku_aliases group by sku_id having count(*) = 1")
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      ActiveRecord::Base.connection.execute("update sku_aliases set is_primary = true where sku_alias_id = '#{x[0]}'")
    end
  end
end
