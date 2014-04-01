class CreateOmniSkuAliases < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :sku_aliases if ActiveRecord::Base.connection.tables.include?('sku_aliases')
    create_table(:sku_aliases, :id => false) do |t|
      t.column   :sku_alias_id,                    :string,            null: false,   limit: 32
      t.column   :display,                         :string,            null: false,   limit: 300
      t.column   :sku_id,                          :string,            null: true,    limit: 32
      t.column   :sku_alias,                       :string,            null: true,    limit: 200
      t.column   :sku_alias_type,                  :string,            null: true,    limit: 200
      t.column   :alias_source,                    :string,            null: true,    limit: 200
      t.column   :is_primary,                      :boolean,           null: true
      t.column   :pack_type,                       :string,            null: true,    limit: 200
      t.column   :pack_size,                       :integer,           null: true
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
