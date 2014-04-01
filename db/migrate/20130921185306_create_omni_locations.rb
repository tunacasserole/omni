class CreateOmniLocations < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :skus if ActiveRecord::Base.connection.tables.include?('skus')
      create_table(:locations, :id => false) do |t|
        t.column   :location_id,                     :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    limit: 200
        t.column   :location_nbr,                    :string,            null: true,    limit: 200
        t.column   :location_brand,                  :string,            null: true,    limit: 200
        t.column   :line_1,                          :string,            null: true,    limit: 200
        t.column   :line_2,                          :string,            null: true,    limit: 200
        t.column   :line_3,                          :string,            null: true,    limit: 200
        t.column   :line_4,                          :string,            null: true,    limit: 200
        t.column   :city,                            :string,            null: true,    limit: 200
        t.column   :state_code,                      :string,            null: true,    limit: 2
        t.column   :zip,                             :string,            null: true,    :limit   => 10
        t.column   :country,                         :string,            null: true,    limit: 200
        t.column   :latitude,                        :string,            null: true,    :limit   => 15
        t.column   :longitude,                       :string,            null: true,    :limit   => 15
        t.column   :phone,                           :string,            null: true,    limit: 200
        t.column   :fax,                             :string,            null: true,    limit: 200
        t.column   :is_owned,                        :boolean,           null: true
        t.column   :is_store,                        :boolean,           null: true
        t.column   :is_temporary_store,              :boolean,           null: true
        t.column   :is_webstore,                     :boolean,           null: true
        t.column   :is_factory,                      :boolean,           null: true
        t.column   :is_warehouse,                    :boolean,           null: true
        t.column   :open_date,                       :datetime,          null: true
        t.column   :close_date,                      :datetime,          null: true
        t.column   :parent_location_id,              :string,            null: true,    limit: 32
        t.column   :district_id,                     :string,            null: true,   limit: 32
        t.column   :price_book_id,                   :string,            null: true,    limit: 32
        t.column   :promo_price_book_id,             :string,            null: true,    limit: 32
        t.column   :selling_square_feet,             :integer,           null: true
        t.column   :storage_square_feet,             :integer,           null: true
        t.column   :location_url,                    :string,            null: true,    limit: 200
        t.column   :is_enabled,                      :boolean,           null: true
        t.column   :time_zone,                       :string,            null: true,    limit: 200
        t.column   :sunday_open_time,                :string,            null: true,    limit: 200
        t.column   :sunday_close_time,               :string,            null: true,    limit: 200
        t.column   :monday_open_time,                :string,            null: true,    limit: 200
        t.column   :monday_close_time,               :string,            null: true,    limit: 200
        t.column   :tuesday_open_time,               :string,            null: true,    limit: 200
        t.column   :tuesday_close_time,              :string,            null: true,    limit: 200
        t.column   :wednesday_open_time,             :string,            null: true,    limit: 200
        t.column   :wednesday_close_time,            :string,            null: true,    limit: 200
        t.column   :thursday_open_time,              :string,            null: true,    limit: 200
        t.column   :thursday_close_time,             :string,            null: true,    limit: 200
        t.column   :friday_open_time,                :string,            null: true,    limit: 200
        t.column   :friday_close_time,               :string,            null: true,    limit: 200
        t.column   :saturday_open_time,              :string,            null: true,    limit: 200
        t.column   :saturday_close_time,             :string,            null: true,    limit: 200
        t.column   :merchant_identifier,             :string,            null: true,    :limit   => 15
        t.column   :merchant_name,                   :string,            null: true,    limit: 200
        t.column   :merchant_time_zone,              :string,            null: true,    limit: 200
        t.column   :merchant_location,               :string,            null: true,    limit: 200
        t.column   :merchant_sic,                    :string,            null: true,    limit: 200
        t.column   :merchant_industry,               :string,            null: true,    :limit   => 15
        t.column   :merchant_acquirer_bin,           :string,            null: true,    limit: 200
        t.column   :merchant_agent,                  :string,            null: true,    limit: 200
        t.column   :merchant_chain,                  :string,            null: true,    limit: 200
        t.column   :merchant_store,                  :string,            null: true,    limit: 200
        t.column   :merchant_terminal,               :string,            null: true,    limit: 200
        t.column   :merchant_v_number,               :string,            null: true,    :limit   => 15
        t.column   :merchant_pri_auth_phone,         :string,            null: true,    :limit   => 15
        t.column   :merchant_sec_auth_phone,         :string,            null: true,    :limit   => 15
        t.column   :merchant_pri_settle_phone,       :string,            null: true,    :limit   => 15
        t.column   :merchant_sec_settle_phone,       :string,            null: true,    :limit   => 15
        t.column   :merchant_amex_identifier,        :string,            null: true,    :limit   => 15
        t.column   :merchant_discover_identifier,    :string,            null: true,    :limit   => 15
        t.column   :merchant_diners_identifier,      :string,            null: true,    :limit   => 15
        t.column   :merchant_sharing_groups,         :string,            null: true,    :limit   => 15
        t.column   :merchant_reimbursement,          :string,            null: true,    limit: 2
        t.column   :merchant_settle_agent,           :string,            null: true,    limit: 200
        t.column   :merchant_bank_aba,               :string,            null: true,    :limit   => 15
        t.column   :is_enabled,                      :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
  end
end
