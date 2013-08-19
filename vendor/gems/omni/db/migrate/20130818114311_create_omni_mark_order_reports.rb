class CreateOmniMarkOrderReports < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('mark_order_reports')
      create_table(:mark_order_reports, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :qty,                             :integer,           :null  =>  false
        t.column   :year_entered,                    :integer,           :null  =>  false
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
