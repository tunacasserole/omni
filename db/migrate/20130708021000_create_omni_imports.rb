class CreateOmniImports < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    #@connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('imports')
      create_table(:imports, :id => false) do |t|
        t.column   :import_id,                       :string,            :null  =>  false,   :limit   => 32
        t.column   :department_id,                   :string,            :null  =>  true,   :limit   => 32        
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :data_source,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :target,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :job_type,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :table_name,                      :string,            :null  =>  true,    :limit   => 200
        t.column   :model_name,                      :string,            :null  =>  true,    :limit   => 200
        t.column   :file_name,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :file_path,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :start_date,                      :date,              :null  =>  true
        t.column   :end_date,                        :date,              :null  =>  true
        t.column   :run_mode,                        :string,            :null  =>  true,    :limit   => 200
        t.column   :argument_hash,                   :text,              :null  =>  true
        t.column   :is_drop_data,                    :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
