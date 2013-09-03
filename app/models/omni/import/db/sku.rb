class Omni::Import::Db::Sku < Omni::Import::Base

  def self.run
    puts "--started importing"
    data = Omni::SkuLoad1.all
    data.each_with_index do |sku_load, i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'      
      x = Omni::Sku.where(:display => sku_load.display).first || Omni::Sku.new(:display => sku_load.display)
      style = Omni::Style.where(:display => sku_load.style_id).first
      x.style_id = style.style_id if style
      color = Omni::Color.where(:display=>sku_load.color_id).first || Omni::Color.create(:display => sku_load.color_id)
      x.color_id = color.color_id if color
      size=Omni::Size.where(:display=>sku_load.size_id).first || Omni::Size.create(:display => sku_load.size_id)
      x.size_id = size.size_id if size
      x.design_code=sku_load.design_code
      x.mark_stock=sku_load.mark_stock
      x.mark_size=sku_load.mark_size
      x.buckhead_identifier=sku_load.buckhead_identifier
      x.grits_identifier=sku_load.grits_identifier
      x.initial_retail_price=sku_load.price.gsub('$','').to_f
      x.save
    end
    puts "--end of importing"        
  end

end