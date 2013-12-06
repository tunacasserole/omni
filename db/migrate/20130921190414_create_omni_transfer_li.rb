class CreateOmniTransferLi < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('transfer_li')
      create_table(:transfer_li, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :transfer_id,                     :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :qty,                             :integer,           :null  =>  false
        t.column   :datetime,                        :datetime,          :null  =>  false
        t.column   :box_nbr,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :status_id,                       :integer,           :null  =>  false
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
