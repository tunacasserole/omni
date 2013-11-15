class CreateOmniTBarcode < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless (@connection.columns('t_barcode').count > 0 || @connection.columns('T_BARCODE').count > 0)
      create_table(:t_barcode, :id => false) do |t|
        t.column   :barcode_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :origin_type,                     :string,            :null  =>  false,   :limit   => 20
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :barcode_nbr,                     :string,            :null  =>  false
        t.column   :barcode_serial_nbr,              :string,            :null  =>  false,   :limit   => 20
        t.column   :scan_code,                       :string,            :null  =>  false,   :limit   => 40
        t.column   :container_nbr,                   :string,            :null  =>  false
        t.column   :container_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :string,            :null  =>  true
        t.column   :is_arch_select,                  :string,            :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
