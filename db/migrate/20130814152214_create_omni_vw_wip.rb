class CreateOmniVwWip < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('vw_wip')
      create_table(:vw_wip, :id => false) do |t|
        t.column   :outlet_nbr,                      :integer,           :null  =>  true
        t.column   :stock_nbr,                       :integer,           :null  =>  true
        t.column   :size,                            :string,            :null  =>  true,    :limit   => 3
        t.column   :cut_wip,                         :integer,           :null  =>  true
        t.column   :plant_wip,                       :integer,           :null  =>  true
        t.column   :cont_wip,                        :integer,           :null  =>  true
        t.column   :status_id,                       :integer,           :null  =>  true
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
