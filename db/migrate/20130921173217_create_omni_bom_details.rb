class CreateOmniBomDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('bom_details')
      create_table(:bom_details, :id => false) do |t|
        t.column   :bom_detail_id,                   :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :bom_id,                          :string,            null: true,    limit: 32
        t.column   :color_id,                        :string,            null: true,    limit: 32
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :quantity,                        :decimal,           null: true,    scale: 2, precision: 11
        t.column   :waste_percent,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :uom_code,                        :string,            null: true,    limit: 200
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
