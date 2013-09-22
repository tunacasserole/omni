class CreateOmniProgramColors < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('program_colors')
      create_table(:program_colors, :id => false) do |t|
        t.column   :program_color_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :program_style_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :style_color_id,                  :string,            :null  =>  false,   :limit   => 32
        t.column   :is_active,                       :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
        t.column   :style_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :color_id,                        :string,            :null  =>  true,    :limit   => 32
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
