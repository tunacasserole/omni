class Omni::Sync::MasterData

  def self.go
    load_styles

  end

  def self.load_styles
    # read excel

  def self.sync_skus
    puts "started at #{Time.now.to_s.chop.chop.chop.chop.chop}"
    skus_created = 0
    sql = "select id, sku_display, style_display, size_display, school_code, mark_sku, bu_sku, tg_sku, description, fabric_content, retail, g_c from skus_load_staged"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
      # break if i > 2000
      # create skus with these fields: style_id, size_id,
      display = x[1]
      style_id = Omni::Style.where(display: x[2]).first ? Omni::Style.where(display: x[2]).first.style_id : x[2].truncate(32)
      size_id = Omni::Size.where(display: x[3]).first ? Omni::Size.where(display: x[3]).first.size_id : x[3].truncate(32)
      site_id = Omni::Site.where(school_nbr: x[4]).first ? Omni::Site.where(school_nbr: x[4]).first.site_id : x[4].truncate(32)

      if x[5].length > 1
        source = 'PARKER'
        source_id = x[5]
      elsif x[6].length > 1
        source = 'BUCKHEAD'
        source_id = x[6]
      elsif x[7].length > 1
        source = 'TRUEGRITS'
        source_id = x[7]
      end

      description = x[8]
      fabric_content = x[9].length > 1 ? x[9] : 'NONE'
      initial_retail_price = x[10].length > 1 ? x[10] : 0
      is_converted = x[11] == 'CONVERTED_GARMENT'
      s = Omni::Sku.create(display: display, style_id: style_id, size_id: size_id, source: source, source_id: source_id, description: description, fabric_content: fabric_content, initial_retail_price: initial_retail_price, is_converted: is_converted)
      skus_created += 1 if s
    end

    puts "skus_created is #{skus_created}"

  end

  # def self.styles
  #   sql = "select distinct(style_id), site_id from skus_load"
  #   data = ActiveRecord::Base.connection.execute sql
  #   data.each do |x|
  #     style_id = x[0]
  #     site_id = x[1]
  #     update_sql = "update styles set site_id = '#{site_id}' where style_id = '#{style_id}'"
  #     ActiveRecord::Base.connection.execute update_sql
  #   end
  # end
end
   # def self.fill_in
   #  sql = "select distinct(school_name), school_code from skus_load"
   #  data = ActiveRecord::Base.connection.execute sql
   #  data.each do |x|
   #    school_name = x[0]
   #    school_code = x[1]
   #    unless (school_name.include?('-') || school_name.include?("'"))
   #      update_sql = "update skus_load set school_name = '#{school_name}' where school_code = '#{school_code}'"
   #      data = ActiveRecord::Base.connection.execute update_sql
   #    end
   #  end
  # end


  #  # sl = Omni::SkuLoad.where(id: 1).first
  # def self.fill_in_archive
  #   # sql = "select sl.id, sl.style_display, style.display from skus_load sl, styles s where sl.style_display = s.display"
  #   sql = "select sl.id, sl.style_display from skus_load sl"
  #   data = ActiveRecord::Base.connection.execute sql
  #   data.each_with_index do |x,i|
  #     puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
  #     style_sql = "select style_id from styles where display = '#{x[1]}'"
  #     style_data = ActiveRecord::Base.connection.execute style_sql
  #     if style_data.first
  #       style_id = style_data.first[0]
  #     # puts "style display is: #{x[1]} and id is #{style_id}"
  #       update_sql = "update skus_load set style_id = '#{style_id}' where id = #{x[0]}"
  #       ActiveRecord::Base.connection.execute update_sql
  #     end
  #   end
  # end


# end

  # def self.fill_in
  #   sql = "select distinct(style_display) from skus_load"
  #   data = ActiveRecord::Base.connection.execute sql
  #   data.each do |x|
  #     sl = Omni::SkuLoad.where(style_display: x[0]).first
  #     s = Omni::Style.new
  #     s.display = sl.style_display
  #     s.short_name = sl.style_short
  #     s.description = sl.display
  #     s.subclass_id = sl.subclass_id
  #     s.fabric_content = sl.fabric_content
  #     s.initial_retail_price = sl.retail
  #     s.site_id = sl.site_id
  #     s.is_converted = sl.is_converted
  #     s.size_group_id = sl.size_group_id
  #     s.supplier_id = sl.supplier_id
  #     rc = s.save
  #     puts "save failed for id #{sl.id}" unless rc
  #   end
  # end

 # skus =
 #      # Omni::Color.create(display: x[1], short_name: x[1], concatenated_name: x[1]) unless (Omni::Color.where(display: x[1]).first || Omni::Color.where(short_name: x[1]).first)

 #      # color = Omni::Color.where(display: x[1]).first || Omni::Color.where(short_name: x[1]).first
 #      # sl.color_id = color.color_id
 #    sql = "select distinct(school_name), school_code from skus_load"
 #    data = ActiveRecord::Base.connection.execute sql
 #    data.each_with_index do |x,i|
 #      Omni::Site.create(display: x[0], site_name: x[0], school_code: x[1]) unless (Omni::Color.where(display: x[1]).first || Omni::Color.where(short_name: x[1]).first)
 #    end
 #  # def self.fill_in

 #  #   end

 #      # sl.site_id = Omni::Site.where()

 #      # sl.supplier_id = Omni::Supplier.where(supplier_name: x[1]).first.supplier_id
    # sql = "select distinct(supplier) from skus_load"
    # data = ActiveRecord::Base.connection.execute sql
    # data.each do |x|
    #   Omni::Supplier.create(supplier_name: x[0]) unless Omni::Supplier.where(supplier_name: x[0]).first
    # end
      # sl.is_converted = x[1] == 'GENERIC GARMENT'
      # size_group = Omni::SizeGroup.where(concatenated_name: x[1]).first
      # if size_group
      #   size_group_id = size_group.size_group_id
      # else
      #   size_group_id = "00000NOSIZEGROUPFOUNDXXXXXXXXXXX"
      #   puts "NONE FOUND FOR #{x[1]}"
      # end

      # size = Omni::Size.where(display: x[2]).first
      # if size
      #   size_id = size.size_id
      # else
      #   size_id = "00000NOSIZEFOUNDXXXXXXXXXXXXXXXX"
      #   puts "NONE FOUND FOR #{x[2]}"
      # end
      # sl.size_group_id = size_group_id
      # sl.size_id = size_id

      # subclass = Omni::Subclass.where("classification_id = ? and display like ?", x[5], "#{x[3]}%").first
      # if subclass
      #   subclass_id = subclass.subclass_id
      #   sl.subclass_id = subclass.subclass_id
      #   sl.save
      # else
      #   subclass_id = "00000NOSUBCLASSFOUNDFORXXXXXXXXX"
      #   puts "NONE FOUND FOR #{x[3]}"
      # end

      # subclass_sql = "select subclass_id from subclasses where display like '#{x[3]}%' and classification_id = '#{x[5]}'"
      # puts subclass_sql
      # subclass = ActiveRecord::Base.connection.execute sql
      # subclass_id = subclass.first[0]# ? subclass : 'UNKNOWNSUBCLASSXXXXXXXXXXXXXXXXX'
      # puts subclass_id
      # size_group = Omni::SizeGroup.where(concatenated_name: x.size_group).first || Omni::SizeGroup.where(size_group_id: '948A99A24FCA11E3BC9F20C9D047XXXX').first
      # Omni::Style.create(display: x.style_id, subclass: subclass_id)
      # department = Omni::Department.where(display: x[1]).first
      # puts department.display
      # puts "i: #{i} ==> DEPT: #{x[2]} CLASS: #{x[3]}"
      # puts "i: #{i} ==> id: #{x[0]} DEPT: #{x[1]}"
      # output << "id: #{x[0]}, new_dept #{x[1]}, dept_id: #{x[2]}, class_id: #{x[3]}"
      # break if i > 10000

#   def self.fill_slow
#     sku_load = {}
#     ActiveRecord::Base.connection.execute("select id, new_dept from skus_load").each {|x| sku_load[x[0]] = x[1]} # MRI
#     sku_load.

#     output = []
#     data = Omni::SkuLoad.all
#     data.each do |x|
#       department = Omni::Department.where(display: x.new_dept).first
#       if department
#         x.department_id = department.department_id
#       else
#         output << "None Found: #{x.new_dept}"
#         puts x.new_dept
#       end
#     end
#     puts output

#   end

#   def self.load_styles
#     data = Omni::SkuLoad.all
#     data.each_with_index do |x, i|
#       # x = Omni::SkuLoad.first
#       department = Omni::Department.where(display: x.new_dept).first
#       classification = department.classifications.where("display like ?", x.new_class).first
#       subclass = classification.subclasses.where("display like ?", x.new_subclass).first
#       subclass_id = subclass ? subclass.subclass_id : 'UNKNOWNSUBCLASSXXXXXXXXXXXXXXXXX'
#       size_group = Omni::SizeGroup.where(concatenated_name: x.size_group).first || Omni::SizeGroup.where(size_group_id: '948A99A24FCA11E3BC9F20C9D047XXXX').first
#       # Omni::Style.create(display: x.style_id, subclass_id: x.subclass_id, size_group_id: size_group.size_group_id)
#     end
#   end

#   def self.run
#     puts "--started importing"
#     load_location_users
#     de_duping
#   end

#   def self.load_location_users
#     data = Omni::LocationUser.all
#     data.each do |loc_user|
#       u=Buildit::User.create(:email_address => loc_user.display, :first_name => loc_user.display.split(',').first, :last_name => loc_user.display.split(',').last, :sso_plugin_code => 'BUILDIT')
#     end

#   end

#   def archives
#     data = Omni::SkuLoad1.all
#     data.each_with_index do |sku_load, i|
#       puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
#       x = Omni::Sku.where(:display => sku_load.display).first || Omni::Sku.new(:display => sku_load.display)
#       style = Omni::Style.where(:display => sku_load.style_id).first
#       x.style_id = style.style_id if style
#       color = Omni::Color.where(:display=>sku_load.color_id).first || Omni::Color.create(:display => sku_load.color_id)
#       x.color_id = color.color_id if color
#       size=Omni::Size.where(:display=>sku_load.size_id).first || Omni::Size.create(:display => sku_load.size_id)
#       x.size_id = size.size_id if size
#       x.design_code=sku_load.design_code
#       if sku_load.mark_stock
#         x.source = 'Parker'
#         x.source_id = "#{sku_load.mark_stock},#{sku_load.mark_size}"
#       end
#       if sku_load.buckhead_identifier
#         x.source = 'Buckhead'
#         # x.source_id = sku_load.buckhead_identifier
#       end
#       if sku_load.grits_identifier
#         x.source = 'True Grits'
#         x.source_id = sku_load.grits_identifier
#       end
#       x.initial_retail_price=sku_load.price.gsub('$','').to_f
#       x.save
#     end
#     puts "--end of importing"
#   end


#   def self.main
#     # Colors
#     Omni::Color.all.each do |x|
#       Omni::Color.create(display: x.display, short_name: x.short_name, concatenated_name: x.display)
#     end
#     Omni::Size.all.each do |x|
#       Omni::Size.create(display: x.display, size_type: 'STANDARD', concatenated_name: x.display)
#     end
#     Omni::Category.all.each do |x|
#       Omni::Category.create(display: x.display, category_code: x.display)
#     end

#     Omni::SizeGroup.all.each do |x|
#       Omni::SizeGroup.create(display: x.description, description: x.description, concatenated_name: x.display)
#     end

#     Omni::SizeGroup.all.each do |x|
#       Omni::SizeGroup.create(display: x.description, description: x.description, concatenated_name: x.display)
#     end

#    end


# end
