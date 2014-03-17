class CreateOmniLabels < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('labels')
      create_table(:labels, :id => false) do |t|
        t.column   :label_id,                        :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :label_type,                      :string,            null: true,   limit: 200
        t.column   :short_name,                      :string,            null: true,    :limit   => 15
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
