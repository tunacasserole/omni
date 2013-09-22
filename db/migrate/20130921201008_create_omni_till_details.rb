class CreateOmniTillDetails < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('till_details')
      create_table(:till_details, :id => false) do |t|
        t.column   :till_detail_id,                  :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :till_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :tender_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :tender_count,                    :integer,           :null  =>  true
        t.column   :tender_amount,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
