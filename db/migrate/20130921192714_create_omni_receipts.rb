class CreateOmniReceipts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('receipts')
      create_table(:receipts, :id => false) do |t|
        t.column   :receipt_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :receipt_nbr,                     :string,            :null  =>  true,    :limit   => 11
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :carrier_supplier_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :trailer_identifier,              :string,            :null  =>  true,    :limit   => 100
        t.column   :create_date,                     :date,              :null  =>  true
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :appointment_date,                :date,              :null  =>  true
        t.column   :appointment_duration,            :integer,           :null  =>  true
        t.column   :start_date,                      :date,              :null  =>  true
        t.column   :complete_date,                   :date,              :null  =>  true
        t.column   :completed_by_user_id,            :string,            :null  =>  true,    :limit   => 32
        t.column   :pro_number,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :bill_of_lading_number,           :string,            :null  =>  true,    :limit   => 100
        t.column   :packing_slip_number,             :string,            :null  =>  true,    :limit   => 100
        t.column   :seal_1_number,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :seal_2_number,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :seal_3_number,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :asn_number,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :is_expected_asn,                 :boolean,           :null  =>  true
        t.column   :standard_carrier_alpha_code,     :string,            :null  =>  true,    :limit   => 4
        t.column   :ship_point,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_via,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :freight_terms,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :invoice_number,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
