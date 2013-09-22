class CreateOmniCategories < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('categories')
      create_table(:categories, :id => false) do |t|
        t.column   :category_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :category_code,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :category_type,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
