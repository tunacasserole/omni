class CreateOmniStyleSupplierColors < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('style_supplier_colors')
      create_table(:style_supplier_colors, :id => false) do |t|
        t.column   :style_supplier_color_id,         :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :style_supplier_id,               :string,            null: true,    limit: 32
        t.column   :style_color_id,                  :string,            null: true,    limit: 32
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
