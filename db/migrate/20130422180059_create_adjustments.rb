class CreateAdjustments < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'adjustments'
      create_table(:adjustments, :id => false) do |t|
        t.column :adjustment_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :adjustment_nbr,                    :string,        :limit       => 11,     :null        => false
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :bin_id,                            :string,        :limit       => 32,     :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :request_date,                      :date,          :null        => true
        t.column :request_user_id,                   :string,        :limit       => 32,     :null        => true
        t.column :post_date,                         :date,          :null        => true
        t.column :post_user_id,                      :string,        :limit       => 32,     :null        => true
        t.column :cancel_date,                       :date,          :null        => true
        t.column :cancel_user_id,                    :string,        :limit       => 32,     :null        => true
        t.column :adjustment_reason_id,              :string,        :limit       => 32,     :null        => false
        t.column :adjustment_units,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :adjustment_cost,                   :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:adjustments, [:adjustment_id], :unique => true)

    end
  end
end
