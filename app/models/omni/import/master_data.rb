class Omni::Import::MasterData

  def self.run
    puts "--started importing"
    load_location_users
    de_duping
  end

  def self.load_location_users
    data = Omni::LocationUser.all
    data.each do |loc_user|
      u=Buildit::User.create(:email_address => loc_user.display, :first_name => loc_user.display.split(',').first, :last_name => loc_user.display.split(',').last, :sso_plugin_code => 'BUILDIT')
    end

  end

  def cleanup
    data = Omni::LocationUserLoad.all
    data.each do |loc_user|
      # loc_user = Omni::LocationUser.first
      user = Buildit::User.where(:email_address => loc_user.display).first || Buildit::User.create(:email_address => loc_user.display, :first_name => loc_user.display.split(',').first, :last_name => loc_user.display.split(',').last, :sso_plugin_code => 'BUILDIT')
      loc = Omni::Location.where(:location_nbr => loc_user.location_id).first || Omni::Location.first
      x=Omni::LocationUser.create(:user_id => user.user_id, :location_id => loc.location_id)
    end








        dup_check = Omni::LocationUser.where(:display => loc_user.display).count
        if dup_check > 1
          puts "dup found"
          # loc_user.display = 'delete me'
        end
      end

    data = Buildit::User.all
    data.each do |user|
    us =

    if dup_check > 1
      user.destroy
    end
  end

  def archives
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
      if sku_load.mark_stock
        x.source = 'Parker'
        x.source_id = "#{sku_load.mark_stock},#{sku_load.mark_size}"
      end
      if sku_load.buckhead_identifier
        x.source = 'Buckhead'
        # x.source_id = sku_load.buckhead_identifier
      end
      if sku_load.grits_identifier
        x.source = 'True Grits'
        x.source_id = sku_load.grits_identifier
      end
      x.initial_retail_price=sku_load.price.gsub('$','').to_f
      x.save
    end
    puts "--end of importing"
  end

end