class CreateCompanies < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'companies'
      create_table(:companies, :id => false) do |t|
        t.column :company_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :company_nbr,                       :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :company_url,                       :string,        :limit       => 100,    :null        => true
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
        t.column :beta_factor,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :demand_filter,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :tracking_signal,                   :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :purchase_order_header_cost,        :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :carrying_cost_percent,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:companies, [:company_id], :unique => true)

    end
  end
end
