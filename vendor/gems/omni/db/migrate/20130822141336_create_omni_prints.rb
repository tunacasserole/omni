class CreateOmniPrints < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('prints')
      create_table(:prints, :id => false) do |t|
        t.column   :print_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :source_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :source_model,                    :string,            :null  =>  true,    :limit   => 200
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :print_type,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :file_name,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :file_path,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
