class CreateSystemOptions < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'system_options'
      create_table(:system_options, :id => false) do |t|
        t.column :system_option_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => true
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => false
        t.column :professional_discount_percent,     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :employee_discount_percent,         :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :regular_sale_ruleset_id,           :string,        :limit       => 32,     :null        => true
        t.column :promo_sale_ruleset_id,             :string,        :limit       => 32,     :null        => true
        t.column :clearance_sale_ruleset_id,         :string,        :limit       => 32,     :null        => true
        t.column :transfer_request_ruleset_id,       :string,        :limit       => 32,     :null        => true
        t.column :transfer_ship_ruleset_id,          :string,        :limit       => 32,     :null        => true
        t.column :transfer_transit_ruleset_id,       :string,        :limit       => 32,     :null        => true
        t.column :transfer_receive_ruleset_id,       :string,        :limit       => 32,     :null        => true
        t.column :transfer_close_ruleset_id,         :string,        :limit       => 32,     :null        => true
        t.column :transfer_cancel_ruleset_id,        :string,        :limit       => 32,     :null        => true
        t.column :is_charge_ship_location,           :boolean,       :null        => true
        t.column :transfer_gl_account_id,            :string,        :limit       => 32,     :null        => true
        t.column :discrepancy_gl_account_id,         :string,        :limit       => 32,     :null        => true
        t.column :overage_gl_account_id,             :string,        :limit       => 32,     :null        => true
        t.column :shortage_gl_account_id,            :string,        :limit       => 32,     :null        => true
        t.column :sales_tax_gl_account_id,           :string,        :limit       => 32,     :null        => true
        t.column :consecutive_invalid_login_attempts, :integer,       :null        => true
        t.column :purchase_approval_1_maximum_amount, :integer,       :null        => true
        t.column :purchase_approval_2_maximum_amount, :integer,       :null        => true        
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:system_options, [:system_option_id], :unique => true)

    end
  end
end
