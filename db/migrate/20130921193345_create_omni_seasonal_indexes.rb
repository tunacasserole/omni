class CreateOmniSeasonalIndexes < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('seasonal_indexes')
      create_table(:seasonal_indexes, :id => false) do |t|
        t.column   :seasonal_index_id,               :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :seasonal_index_name,             :string,            null: true,   limit: 200
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
