class Omni::Data::Sync::UniformDetail

  def self.go
    # update_account_id
    update_style_id
    # update_color_id
  end

  def self.update_account_id
    missing_values = []
    data = ActiveRecord::Base.connection.execute "select id, school_nbr, stock_nbr from mark_uniforms where account_id is null"
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      # weed out missing accounts
      a = Omni::Account.find_by_school_nbr(x[1])
      missing_values << x[1] unless a || missing_values.include?(x[1])
      next unless a
      ActiveRecord::Base.connection.execute "update mark_uniforms set account_id = '#{a.account_id}' where id = '#{x[0]}'"
    end
    puts missing_values
  end

  def self.update_style_id
    # skus_hash = {}
    # ActiveRecord::Base.connection.execute("select display, sku_id from skus").each {|x| skus_hash[x[0]] = x[1]}
    # puts "skus loaded to hash: #{skus_hash.count}"

    # data = ActiveRecord::Base.connection.execute "select a.stock_nbr, b.style_id from sku_aliases a, skus b where a.alias_source = 'PARKER' and a.sku_id = b.sku_id"



    missing_values = []
    data = ActiveRecord::Base.connection.execute "select id, stock_nbr from mark_uniforms where style_id is null"
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      update_id = style_id(x[1])
      missing_values << x[1] unless update_id || missing_values.include?(x[1])
      next unless update_id
      ActiveRecord::Base.connection.execute "update mark_uniforms set style_id = '#{update_id}' where id = '#{x[0]}'"
    end
    puts missing_values
  end

  def self.update_color_id
    missing_values = []
    data = ActiveRecord::Base.connection.execute "select id, description from mark_uniforms where color_id is null"
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      update_id = color_id(x[1])
      missing_values << x[1] unless update_id || missing_values.include?(x[1])
      next unless update_id
      ActiveRecord::Base.connection.execute "update mark_uniforms set color_id = '#{update_id}' where id = '#{x[0]}'"
    end
    puts missing_values
  end

  def self.update_style_color_id
    missing_values = []
    data = ActiveRecord::Base.connection.execute "select id, description from mark_uniforms where style_color_id is null"
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!
      update_id = style_id(x[1])
      missing_values << x[1] unless update_id || missing_values.include?(x[1])
      next unless update_id
      ActiveRecord::Base.connection.execute "update mark_uniforms set style_color_id = '#{update_id}' where id = '#{x[0]}'"
    end
    puts missing_values
  end

  # def self.create_from_mark_uniform_load
  #     # create 1 active uniform
  #     u = a.uniforms.create(state: 'active', school_year: '2015') || a.uniforms.where(school_year: '2015').first
  #     puts u.errors.full_messages.to_sentence unless u.save

  #     # create uniform details
  #     d = u.uniform_details.new
  #     d.style_id = style_id(x[2])
  #     # d.color_id = color_id
  #     # d.style_color_id = x
  #     # d.from_grade_id = x
  #     # d.thru_grade_id = x
  #     # d.is_required_male = x
  #     # d.is_required_female = x
  #     # d.is_optional_male = x
  #     # d.is_optional_femail = x

  #     puts d.errors.full_messages.to_sentence unless d.save

  #   end
  #   puts missing_values

  # end

  def self.style_id(stock_nbr)
    data = ActiveRecord::Base.connection.execute "select b.style_id from sku_aliases a, skus b where a.alias_source = 'PARKER' and a.sku_alias like '#{stock_nbr}-%' and a.sku_id = b.sku_id"
    data.first[0] if data.any?
  end

  def self.color_id(description)
    color_name = description
    # data = ActiveRecord::Base.connection.execute "select b.style_id from sku_aliases a, skus b where a.alias_source = 'PARKER' and a.sku_alias like '#{stock_nbr}-%' and a.sku_id = b.sku_id"
    data.first[0]
    puts data.first[0]
  end
end
