class CreateOmniStyleColors < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('style_colors')
      create_table(:style_colors, :id => false) do |t|
        t.column   :style_color_id,                  :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :style_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :color_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :concatenated_name,               :string,            :null  =>  true,    :limit   => 6
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
