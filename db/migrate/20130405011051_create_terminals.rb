class CreateTerminals < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'terminals'
      create_table(:terminals, :id => false) do |t|
        t.column :terminal_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :till_id,                           :string,        :limit       => 32,     :null        => true
        t.column :terminal_nbr,                      :string,        :limit       => 6,      :null        => false
        t.column :mac_address,                       :string,        :limit       => 15,     :null        => false
        t.column :local_server_ip,                   :string,        :limit       => 15,     :null        => false
        t.column :hq_server_url,                     :string,        :limit       => 200,    :null        => false
        t.column :override_sale_date,                :date,          :null        => true
        t.column :receipt_printer_url,               :string,        :limit       => 200,    :null        => false
        t.column :receipt_printer_ip,                :string,        :limit       => 15,     :null        => false
        t.column :receipt_format_id,                 :string,        :limit       => 32,     :null        => true
        t.column :tag_printer_url,                   :string,        :limit       => 200,    :null        => true
        t.column :tag_printer_ip,                    :string,        :limit       => 15,     :null        => true
        t.column :pin_pad_port,                      :string,        :limit       => 6,      :null        => true
        t.column :is_net_display_enabled,            :boolean,       :null        => true
        t.column :is_login_per_transaction,          :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:terminals, [:terminal_id], :unique => true)

    end
  end
end
