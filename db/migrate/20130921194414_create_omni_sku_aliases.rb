class CreateOmniSkuAliases < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_aliases')
      create_table(:sku_aliases, :id => false) do |t|
        t.column   :sku_alias_id,                    :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :sku_alias,                       :string,            null: true,    limit: 200
        t.column   :sku_alias_type,                  :string,            null: true,    limit: 200
        t.column   :is_primary,                      :boolean,           null: true
        t.column   :pack_type,                       :string,            null: true,    limit: 200
        t.column   :pack_size,                       :integer,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
