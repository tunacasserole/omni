class CreateOmniRules < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('rules')
      create_table(:rules, :id => false) do |t|
        t.column   :rule_id,                         :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :ruleset_id,                      :string,            null: true,   limit: 32
        t.column   :rule_type,                       :string,            null: true,    limit: 200
        t.column   :input_attribute,                 :string,            null: true,    limit: 200
        t.column   :model_name,                      :string,            null: true,    limit: 200
        t.column   :attribute_name,                  :string,            null: true,    limit: 200
        t.column   :rule_action,                     :string,            null: true,    limit: 200
        t.column   :is_active,                       :boolean,           null: true
        t.column   :rule_seq,                        :string,            null: true,    limit: 200
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
