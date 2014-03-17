class CreateOmniSkuSubstitutes < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_substitutes')
      create_table(:sku_substitutes, :id => false) do |t|
        t.column   :sku_substitute_id,               :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :substitute_sku_id,               :string,            null: true,    limit: 32
        t.column   :sku_substitute_type,             :string,            null: true,    limit: 200
        t.column   :effective_date,                  :datetime,          null: true
        t.column   :end_date,                        :datetime,          null: true
        t.column   :priority,                        :integer,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
