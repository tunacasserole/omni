class CreateOmniTransferReasons < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('transfer_reasons')
      create_table(:transfer_reasons, :id => false) do |t|
        t.column   :transfer_reason_id,              :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    limit: 200
        t.column   :target_processing_days,          :integer,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
