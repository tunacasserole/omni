class CreateOmniGrades < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('grades')
      create_table(:grades, :id => false) do |t|
        t.column   :grade_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :gradeset,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :grade_name,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :grade_order,                     :integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
