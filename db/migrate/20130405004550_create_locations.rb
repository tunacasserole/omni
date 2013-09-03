class CreateLocations < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'locations'
      create_table(:locations, :id => false) do |t|
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 100,    :null        => true
        t.column :location_nbr,                      :string,        :limit       => 11,     :null        => true
        t.column :location_brand,                    :string,        :limit       => 100,    :null        => true
        t.column :line_1,                            :string,        :limit       => 100,    :null        => false
        t.column :line_2,                            :string,        :limit       => 100,    :null        => true
        t.column :line_3,                            :string,        :limit       => 100,    :null        => true
        t.column :line_4,                            :string,        :limit       => 100,    :null        => true
        t.column :city,                              :string,        :limit       => 100,    :null        => false
        t.column :state_code,                        :string,        :limit       => 2,      :null        => true
        t.column :zip,                               :string,        :limit       => 10,     :null        => false
        t.column :country,                           :string,        :limit       => 100,    :null        => true
        t.column :latitude,                          :string,        :limit       => 15,     :null        => true
        t.column :longitude,                         :string,        :limit       => 15,     :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => false
        t.column :fax,                               :string,        :limit       => 30,     :null        => true
        t.column :is_owned,                          :boolean,       :null        => true
        t.column :is_store,                          :boolean,       :null        => true
        t.column :is_temporary_store,                :boolean,       :null        => true
        t.column :is_webstore,                       :boolean,       :null        => true
        t.column :is_factory,                        :boolean,       :null        => true
        t.column :is_warehouse,                      :boolean,       :null        => true
        t.column :open_date,                         :date,          :null        => true
        t.column :close_date,                        :date,          :null        => true
        t.column :parent_location_id,                :string,        :limit       => 32,     :null        => true
        t.column :district_id,                       :string,        :limit       => 32,     :null        => false
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => true
        t.column :promo_price_book_id,               :string,        :limit       => 32,     :null        => true
        t.column :selling_square_feet,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :storage_square_feet,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :location_url,                      :string,        :limit       => 100,    :null        => true
        t.column :is_enabled,                        :boolean,       :null        => true
        t.column :time_zone,                         :string,        :limit       => 100,    :null        => true
        t.column :sunday_open_time,                  :string,        :limit       => 100,    :null        => true
        t.column :sunday_close_time,                 :string,        :limit       => 100,    :null        => true
        t.column :monday_open_time,                  :string,        :limit       => 100,    :null        => true
        t.column :monday_close_time,                 :string,        :limit       => 100,    :null        => true
        t.column :tuesday_open_time,                 :string,        :limit       => 100,    :null        => true
        t.column :tuesday_close_time,                :string,        :limit       => 100,    :null        => true
        t.column :wednesday_open_time,               :string,        :limit       => 100,    :null        => true
        t.column :wednesday_close_time,              :string,        :limit       => 100,    :null        => true
        t.column :thursday_open_time,                :string,        :limit       => 100,    :null        => true
        t.column :thursday_close_time,               :string,        :limit       => 100,    :null        => true
        t.column :friday_open_time,                  :string,        :limit       => 100,    :null        => true
        t.column :friday_close_time,                 :string,        :limit       => 100,    :null        => true
        t.column :saturday_open_time,                :string,        :limit       => 100,    :null        => true
        t.column :saturday_close_time,               :string,        :limit       => 100,    :null        => true
        t.column :merchant_identifier,               :string,        :limit       => 15,     :null        => true
        t.column :merchant_name,                     :string,        :limit       => 30,     :null        => true
        t.column :merchant_time_zone,                :string,        :limit       => 6,      :null        => true
        t.column :merchant_location,                 :string,        :limit       => 6,      :null        => true
        t.column :merchant_sic,                      :string,        :limit       => 6,      :null        => true
        t.column :merchant_industry,                 :string,        :limit       => 15,     :null        => true
        t.column :merchant_acquirer_bin,             :string,        :limit       => 6,      :null        => true
        t.column :merchant_agent,                    :string,        :limit       => 6,      :null        => true
        t.column :merchant_chain,                    :string,        :limit       => 6,      :null        => true
        t.column :merchant_store,                    :string,        :limit       => 6,      :null        => true
        t.column :merchant_terminal,                 :string,        :limit       => 6,      :null        => true
        t.column :merchant_v_number,                 :string,        :limit       => 15,     :null        => true
        t.column :merchant_pri_auth_phone,           :string,        :limit       => 15,     :null        => true
        t.column :merchant_sec_auth_phone,           :string,        :limit       => 15,     :null        => true
        t.column :merchant_pri_settle_phone,         :string,        :limit       => 15,     :null        => true
        t.column :merchant_sec_settle_phone,         :string,        :limit       => 15,     :null        => true
        t.column :merchant_amex_identifier,          :string,        :limit       => 15,     :null        => true
        t.column :merchant_discover_identifier,      :string,        :limit       => 15,     :null        => true
        t.column :merchant_diners_identifier,        :string,        :limit       => 15,     :null        => true
        t.column :merchant_sharing_groups,           :string,        :limit       => 15,     :null        => true
        t.column :merchant_reimbursement,            :string,        :limit       => 2,      :null        => true
        t.column :merchant_settle_agent,             :string,        :limit       => 6,      :null        => true
        t.column :merchant_bank_aba,                 :string,        :limit       => 15,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:locations, [:location_id], :unique => true)

    end
  end
end
