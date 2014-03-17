class CreateOmniRulesets < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('rulesets')
      create_table(:rulesets, :id => false) do |t|
        t.column   :ruleset_id,                      :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :ruleset_code,                    :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :is_active,                       :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
