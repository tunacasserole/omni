class Omni::Sync::Projection < Omni::Sync::Base

  def self.go
    create_from_inventory
  end

  def self.create_from_inventory
    # turn projections into hash
    projections_hash = {}
    ActiveRecord::Base.connection.execute("select display, projection_id from projections").each {|x| projections_hash[x[0]] = x[1]}
    puts "projections loaded to hash: #{projections_hash.count}"

    # get projections_load data
    sql = "select projection_display_name, projection_receipt_name, description, retail, style_id, color_id, size_id, style_color_size_id, supplier_id, account_id, fabric_content, design_code, g_c, id from projections_load where projection_id is null"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"

    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # puts "projection name is #{x[0]} - id is #{projections_hash[x[0]]}"
      # sql = "select projection_id from projections where display = '#{x[0]}'"
      # data = ActiveRecord::Base.connection.execute sql
      # puts "projection_id is #{data.first[0]}"
      # if data.first #.length == 0
      if projections_hash[x[0]]
        projection_id = projections_hash[x[0]]
      else
        projection_id = map_to_db(x)
      end
      sql = "update projections_load set projection_id = '#{projection_id}' where id = #{x[13]}"
      ActiveRecord::Base.connection.execute sql
    end
  end

  def self.map_to_db(row)
    is_converted = row[12] == 'CONVERTED GARMENT'

    projection = Omni::Projection.create(
      display: row[0],
      pos_name: row[1],
      description: row[2],
      initial_retail_price: row[3],
      style_id: row[4],
      color_id: row[5],
      size_id: row[6],
      style_color_size_id: row[7],
      supplier_id: row[8],
      account_id: row[9],
      fabric_content: row[10],
      design_code: row[11],
      is_converted: is_converted
     )


    if projection
      # puts "created projection #{row[0]} with id #{projection.projection_id}"
      return projection.projection_id
    else
      puts "projection could not be created for #{row[0].to_s} due to: #{projection.errors.full_messages}"
      # abort
    end
  end

end

