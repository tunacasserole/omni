class CreateOmniSizes < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sizes')
      create_table(:sizes, :id => false) do |t|
        t.column   :size_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :size_nbr,                        :string,            :null  =>  true,    :limit   => 6
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :size_type,                       :string,            :null  =>  false,   :limit   => 100
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :concatenated_name,               :string,            :null  =>  false,   :limit   => 6
        t.column   :dimension_1,                     :string,            :null  =>  true,    :limit   => 15
        t.column   :dimension_2,                     :string,            :null  =>  true,    :limit   => 15
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
