class CreateOmniReceipts < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :receipts if ActiveRecord::Base.connection.tables.include?('receipts')
    create_table(:receipts, :id => false) do |t|
      t.column   :receipt_id,                      :string,            null: false,   limit: 32
      t.column   :allocation_profile_id,           :string,            null: true,    limit: 32
      t.column   :carrier_supplier_id,             :string,            null: true,    limit: 32
      t.column   :accepted_by_user_id,             :string,            null: true,    limit: 32
      t.column   :completed_by_user_id,            :string,            null: true,    limit: 32
      t.column   :location_id,                     :string,            null: true,    limit: 32
      t.column   :display,                         :string,            null: true,   limit: 300
      t.column   :state,                           :string,            null: true,   limit: 300
      t.column   :receipt_nbr,                     :string,            null: true,    limit: 200
      t.column   :create_date,                     :datetime,          null: true
      t.column   :ship_date,                       :datetime,          null: true
      t.column   :appointment_date,                :datetime,          null: true
      t.column   :appointment_duration,            :integer,           null: true
      t.column   :start_date,                      :datetime,          null: true
      t.column   :accept_date,                     :datetime,          null: true
      t.column   :complete_date,                   :datetime,          null: true
      t.column   :trailer_identifier,              :string,            null: true,    limit: 200
      t.column   :pro_number,                      :string,            null: true,    limit: 200
      t.column   :bill_of_lading_number,           :string,            null: true,    limit: 200
      t.column   :packing_slip_number,             :string,            null: true,    limit: 200
      t.column   :seal_1_number,                   :string,            null: true,    limit: 200
      t.column   :seal_2_number,                   :string,            null: true,    limit: 200
      t.column   :seal_3_number,                   :string,            null: true,    limit: 200
      t.column   :asn_number,                      :string,            null: true,    limit: 200
      t.column   :standard_carrier_alpha_code,     :string,            null: true,    :limit   => 4
      t.column   :ship_point,                      :string,            null: true,    limit: 200
      t.column   :ship_via,                        :string,            null: true,    limit: 200
      t.column   :freight_terms,                   :string,            null: true,    limit: 200
      t.column   :invoice_number,                  :string,            null: true,    limit: 200
      t.column   :is_expected_asn,                 :boolean,           null: true
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
