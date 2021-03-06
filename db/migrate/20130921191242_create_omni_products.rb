class CreateOmniProducts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('products')
      create_table(:products, :id => false) do |t|
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :product_nbr,                     :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :category_id,                     :string,            null: true,    limit: 32
        t.column   :is_destroyed,                    :boolean,           null: true
        t.column   :product_id,                      :string,            null: true,    limit: 32
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
