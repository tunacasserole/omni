class Omni::Data::Sync::UniformDetail

  def self.go
    # create_from_mark_uniform_load
    color_id('TIE-PURPLE/BLK/WHITE STRIPE ADJ-BOY')
  end

  def self.create_from_mark_uniform_load
    no_account = []
    data = ActiveRecord::Base.connection.execute "select uniform_id, school_nbr, stock_nbr from mark_uniforms"
    bar = ProgressBar.new(data.count)
    data.each do |x|
      bar.increment!

      # weed out missing accounts
      a = Omni::Account.find_by_school_nbr(x[1])
      no_account << x[1] unless a || no_account.include?(x[1])
      next unless a

      # create 1 active uniform
      u = a.uniforms.create(state: 'active', school_year: '2015') || a.uniforms.where(school_year: '2015').first
      puts u.errors.full_messages.to_sentence unless u.save

      # create uniform details
      d = u.uniform_details.new
      d.style_id = style_id(x[2])
      # d.color_id = color_id
      # d.style_color_id = x
      # d.from_grade_id = x
      # d.thru_grade_id = x
      # d.is_required_male = x
      # d.is_required_female = x
      # d.is_optional_male = x
      # d.is_optional_femail = x

      puts d.errors.full_messages.to_sentence unless d.save

    end
    puts no_account

  end

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
