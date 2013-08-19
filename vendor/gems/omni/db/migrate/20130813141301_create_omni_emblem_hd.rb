class CreateOmniEmblemHd < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('emblem_hd')
      create_table(:emblem_hd, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :school_nbr,                      :integer,           :null  =>  false
        t.column   :emblem_nbr,                      :integer,           :null  =>  false
        t.column   :status_id,                       :integer,           :null  =>  true
        t.column   :date_created,                    :timestamp,         :null  =>  false
        t.column   :pulled,                          :integer,           :null  =>  false
        t.column   :est_completion_date,             :date,              :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
