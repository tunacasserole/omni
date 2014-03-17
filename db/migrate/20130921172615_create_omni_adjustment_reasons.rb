class CreateOmniAdjustmentReasons < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('adjustment_reasons')
      create_table(:adjustment_reasons, :id => false) do |t|
        t.column   :adjustment_reason_id,            :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    :limit   => 15
        t.column   :ruleset_id,                      :string,            null: true,   limit: 32
        t.column   :is_allowed_cost_entry,           :boolean,           null: true
        t.column   :is_cost_adjustment,              :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
