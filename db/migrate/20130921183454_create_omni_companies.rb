class CreateOmniCompanies < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('companies')
      create_table(:companies, :id => false) do |t|
        t.column   :company_id,                      :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :company_nbr,                     :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    :limit   => 15
        t.column   :company_url,                     :string,            null: true,    limit: 200
        t.column   :line_1,                          :string,            null: true,   limit: 200
        t.column   :line_2,                          :string,            null: true,    limit: 200
        t.column   :line_3,                          :string,            null: true,    limit: 200
        t.column   :line_4,                          :string,            null: true,    limit: 200
        t.column   :city,                            :string,            null: true,   limit: 200
        t.column   :state_code,                      :string,            null: true,    limit: 2
        t.column   :zip,                             :string,            null: true,   :limit   => 10
        t.column   :country,                         :string,            null: true,    limit: 200
        t.column   :latitude,                        :string,            null: true,    :limit   => 15
        t.column   :longitude,                       :string,            null: true,    :limit   => 15
        t.column   :phone,                           :string,            null: true,   limit: 200
        t.column   :fax,                             :string,            null: true,    limit: 200
        t.column   :beta_factor,                     :decimal,           null: true,    scale: 2, precision: 11
        t.column   :demand_filter,                   :integer,           null: true
        t.column   :tracking_signal,                 :integer,           null: true
        t.column   :purchase_order_header_cost,      :decimal,           null: true,    scale: 2, precision: 11
        t.column   :carrying_cost_percent,           :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
