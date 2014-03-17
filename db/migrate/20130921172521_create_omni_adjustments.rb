class CreateOmniAdjustments < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('adjustments')
      create_table(:adjustments, :id => false) do |t|
        t.column   :adjustment_id,                   :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :adjustment_nbr,                  :string,            null: true,   limit: 200
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :location_id,                     :string,            null: true,   limit: 32
        t.column   :sku_id,                          :string,            null: true,   limit: 32
        t.column   :bin_id,                          :string,            null: true,    limit: 32
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :request_date,                    :datetime,          null: true
        t.column   :request_user_id,                 :string,            null: true,    limit: 32
        t.column   :post_date,                       :datetime,          null: true
        t.column   :post_user_id,                    :string,            null: true,    limit: 32
        t.column   :cancel_date,                     :datetime,          null: true
        t.column   :cancel_user_id,                  :string,            null: true,    limit: 32
        t.column   :adjustment_reason_id,            :string,            null: true,   limit: 32
        t.column   :adjustment_units,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :adjustment_cost,                 :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
  end
end
