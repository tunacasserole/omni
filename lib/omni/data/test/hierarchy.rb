class Omni::Data::Test::Hierarchy

  # attr_accessor :model_name

  def initialize
    # @model_name = model_name
  end

  # def execute_old
  #   @model_name.execute if @model_name
  # end

  def execute

    count = ActiveRecord::Base.connection.execute "select count(*) from styles where subclass_id not in (select subclass_id from subclasses)"
    puts "style with invalid subclass count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from subclasses where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "subclasses with invalid class count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from classifications where department_id is null or department_id not in (select department_id from classifications)")
    puts "classes with invalid department count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where style_id is null or style_id not in (select style_id from styles)")
    puts "sku with invalid style count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where subclass_id is null or subclass_id not in (select subclass_id from subclasses)")
    puts "sku with invalid subclass count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "sku with invalid classification count is #{count.first[0]}"

    count = ActiveRecord::Base.connection.execute("select count(*) from skus where department_id is null or department_id not in (select department_id from departments)")
    puts "sku with invalid department count is #{count.first[0]}"
  end

end
