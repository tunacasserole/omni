class CreateOmniReceiptDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('receipt_details')
      create_table(:receipt_details, :id => false) do |t|
        t.column   :receipt_detail_id,               :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :receipt_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :receipt_line_nbr,                :string,            :null  =>  true,    :limit   => 11
        t.column   :purchase_detail_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :received_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
