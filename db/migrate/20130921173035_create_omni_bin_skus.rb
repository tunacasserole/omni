class CreateOmniBinSkus < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('bin_skus')
      create_table(:bin_skus, :id => false) do |t|
        t.column   :sku_alias_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :last_activity_date,              :datetime,          :null  =>  true
        t.column   :being_received_units,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :on_hand_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :pack_type,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :due_in_units,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :due_out_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
        t.column   :bin_sku_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :bin_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
