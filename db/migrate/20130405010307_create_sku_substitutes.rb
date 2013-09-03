class CreateSkuSubstitutes < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_substitutes'
      create_table(:sku_substitutes, :id => false) do |t|
        t.column :sku_substitute_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :substitute_sku_id,                 :string,        :limit       => 32,     :null        => true
        t.column :sku_substitute_type,               :string,        :limit       => 100,    :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :priority,                          :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_substitutes, [:sku_substitute_id], :unique => true)

    end
  end
end
