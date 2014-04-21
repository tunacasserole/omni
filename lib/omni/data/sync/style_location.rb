class Omni::Data::Sync::StyleLocation

  def self.go
    create_style_locations_from_sku_load
  end

  def self.create_style_locations_from_sku_load
    sql = "select id, style_id, location_id from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # select_sql = "select count(*) from style_locations where style_id = #{x.style_id}"
      row = Omni::StyleLocation.create(style_id: x[1], location_id: x[2]) #unless Omni::StyleLocation.where(style_id: x[0], location_id: x[1]).first
      if row
        update_sql = "update skus_load set style_location_id = '#{row.style_location_id}' where id = #{x[0]}"
        data = ActiveRecord::Base.connection.execute update_sql
      else
        puts "couldn't create style_location row for id #{x[0]}, style_id #{x[1]}, location_id #{x[2]}",
        abort
      end
    end
  end
end
