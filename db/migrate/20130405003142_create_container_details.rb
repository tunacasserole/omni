class CreateContainerDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'container_details'
      create_table(:container_details, :id => false) do |t|
        t.column :container_detail_id,               :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :container_detail_nbr,              :string,        :limit       => 11,     :null        => true
        t.column :container_id,                      :string,        :limit       => 32,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :selling_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :commited_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :pack_type,                         :string,        :limit       => 100,    :null        => true
        t.column :sell_units_per_pack,               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :container_inventory_source,        :string,        :limit       => 100,    :null        => true
        t.column :container_detail_source,           :string,        :limit       => 100,    :null        => true
        t.column :purchase_detail_id,                :string,        :limit       => 32,     :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :supplier_item_identifier,          :string,        :limit       => 100,    :null        => true
        t.column :lot_identifier,                    :string,        :limit       => 100,    :null        => true
        t.column :work_order_id,                     :string,        :limit       => 32,     :null        => true
        t.column :receipt_detail_id,                 :string,        :limit       => 32,     :null        => true
        t.column :pick_ticket_id,                    :string,        :limit       => 32,     :null        => true
        t.column :origin_container_detail_id,        :string,        :limit       => 32,     :null        => true
        t.column :is_quality_hold,                   :boolean,       :null        => true
        t.column :is_duty_paid,                      :boolean,       :null        => true
        t.column :last_activity_date,                :date,          :null        => true
        t.column :last_count_date,                   :date,          :null        => true
        t.column :is_audited,                        :boolean,       :null        => true
        t.column :is_inspected,                      :boolean,       :null        => true
        t.column :Inspection_date,                   :date,          :null        => true
        t.column :create_date,                       :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:container_details, [:container_detail_id], :unique => true)

    end
  end
end
