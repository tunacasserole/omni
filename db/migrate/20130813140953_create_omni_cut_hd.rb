class CreateOmniCutHd < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('cut_hd')
      create_table(:cut_hd, :id => false) do |t|
        t.column   :cut_nbr,                         :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  true
        t.column   :priority,                        :integer,           :null  =>  true
        t.column   :status,                          :integer,           :null  =>  true
        t.column   :date_cut,                        :date,              :null  =>  true
        t.column   :printed,                         :string,            :null  =>  true,    :limit   => 1
        t.column   :date_entered,                    :date,              :null  =>  true
        t.column   :gerber_efficiency,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 5
        t.column   :actual_yards_1,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :actual_yards_2,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :actual_yards_3,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :contractor_id,                   :integer,           :null  =>  false
        t.column   :update_contractor_fabric,        :integer,           :null  =>  false
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
