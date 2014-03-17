class CreateOmniBoms < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('boms')
      create_table(:boms, :id => false) do |t|
        t.column   :bom_id,                          :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :bomable_type,                    :string,            null: true,    limit: 200
        t.column   :bomable_id,                      :string,            null: true,    limit: 32
        t.column   :bom_nbr,                         :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :bom_type,                        :string,            null: true,   limit: 200
        t.column   :version,                         :decimal,           null: true,    scale: 2, precision: 11
        t.column   :effective_date,                  :datetime,          null: true
        t.column   :end_date,                        :datetime,          null: true
        t.column   :is_primary_bom,                  :boolean,           null: true
        t.column   :labor_hours,                     :decimal,           null: true,    scale: 2, precision: 11
        t.column   :machine_hours,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :construction_hours,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_enabled,                      :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
