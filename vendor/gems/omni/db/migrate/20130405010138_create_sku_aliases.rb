class CreateSkuAliases < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_aliases'
      create_table(:sku_aliases, :id => false) do |t|
        t.column :sku_alias_id,                      :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :sku_alias,                         :string,        :limit       => 30,     :null        => true
        t.column :sku_alias_type,                    :string,        :limit       => 100,    :null        => true
        t.column :is_primary,                        :boolean,       :null        => true
        t.column :pack_type,                         :string,        :limit       => 100,    :null        => true
        t.column :pack_size,                         :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_aliases, [:sku_alias_id], :unique => true)

    end
  end
end
