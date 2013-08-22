class CreateOmniRaters < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('raters')
      create_table(:raters, :id => false) do |t|
        t.column   :rater_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 2000
        t.column   :points,                          :integer,           :null  =>  true
        t.column   :creator_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :target_release,                  :date,              :null  =>  true
        t.column   :actual_release,                  :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
