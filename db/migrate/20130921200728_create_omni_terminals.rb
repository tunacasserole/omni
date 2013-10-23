class CreateOmniTerminals < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('terminals')
      create_table(:terminals, :id => false) do |t|
        t.column   :terminal_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :till_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :terminal_nbr,                    :string,            :null  =>  false,   :limit   => 6
        t.column   :mac_address,                     :string,            :null  =>  false,   :limit   => 15
        t.column   :local_server_ip,                 :string,            :null  =>  false,   :limit   => 15
        t.column   :hq_server_url,                   :string,            :null  =>  false,   :limit   => 200
        t.column   :override_sale_date,              :date,              :null  =>  true
        t.column   :receipt_printer_url,             :string,            :null  =>  false,   :limit   => 200
        t.column   :receipt_printer_ip,              :string,            :null  =>  false,   :limit   => 15
        t.column   :receipt_format_id,               :string,            :null  =>  true,    :limit   => 32
        t.column   :tag_printer_url,                 :string,            :null  =>  true,    :limit   => 200
        t.column   :tag_printer_ip,                  :string,            :null  =>  true,    :limit   => 15
        t.column   :pin_pad_port,                    :string,            :null  =>  true,    :limit   => 6
        t.column   :is_net_display_enabled,          :boolean,           :null  =>  true
        t.column   :is_login_per_transaction,        :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
