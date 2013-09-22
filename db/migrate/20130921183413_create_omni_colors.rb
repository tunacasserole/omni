class CreateOmniColors < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('colors')
      create_table(:colors, :id => false) do |t|
        t.column   :color_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :color_nbr,                       :string,            :null  =>  true,    :limit   => 6
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :concatenated_name,               :string,            :null  =>  true,    :limit   => 100
        t.column   :is_plaid,                        :boolean,           :null  =>  true
        t.column   :is_stripe,                       :boolean,           :null  =>  true
        t.column   :color_family,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :is_discontinued,                 :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
