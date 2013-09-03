class CreateReceipts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'receipts'
      create_table(:receipts, :id => false) do |t|
        t.column :receipt_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :receipt_nbr,                       :string,        :limit       => 11,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :carrier_supplier_id,               :string,        :limit       => 32,     :null        => true
        t.column :trailer_identifier,                :string,        :limit       => 100,    :null        => true
        t.column :create_date,                       :date,          :null        => true
        t.column :ship_date,                         :date,          :null        => true
        t.column :appointment_date,                  :date,          :null        => true
        t.column :appointment_duration,              :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :start_date,                        :date,          :null        => true
        t.column :complete_date,                     :date,          :null        => true
        t.column :completed_by_user_id,              :string,        :limit       => 32,     :null        => true
        t.column :pro_number,                        :string,        :limit       => 100,    :null        => true
        t.column :bill_of_lading_number,             :string,        :limit       => 100,    :null        => true
        t.column :packing_slip_number,               :string,        :limit       => 100,    :null        => true
        t.column :seal_1_number,                     :string,        :limit       => 100,    :null        => true
        t.column :seal_2_number,                     :string,        :limit       => 100,    :null        => true
        t.column :seal_3_number,                     :string,        :limit       => 100,    :null        => true
        t.column :asn_number,                        :string,        :limit       => 100,    :null        => true
        t.column :is_expected_asn,                   :boolean,       :null        => true
        t.column :standard_carrier_alpha_code,       :string,        :limit       => 4,      :null        => true
        t.column :ship_point,                        :string,        :limit       => 100,    :null        => true
        t.column :ship_via,                          :string,        :limit       => 100,    :null        => true
        t.column :freight_terms,                     :string,        :limit       => 100,    :null        => true
        t.column :invoice_number,                    :string,        :limit       => 100,    :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:receipts, [:receipt_id], :unique => true)

    end
  end
end
