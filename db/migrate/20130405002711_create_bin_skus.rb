class CreateBinSkus < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'bin_skus'
      create_table(:bin_skus, :id => false) do |t|
        t.column :sku_alias_id,                      :string,        :limit       => 32,     :null        => true
        t.column :last_activity_date,                :date,          :null        => true
        t.column :being_received_units,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :on_hand_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :pack_type,                         :string,        :limit       => 100,    :null        => true
        t.column :due_in_units,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :due_out_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
        t.column :bin_sku_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :bin_id,                            :string,        :limit       => 32,     :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
      end
      add_index(:bin_skus, [:bin_sku_id], :unique => true)

    end
  end
end
