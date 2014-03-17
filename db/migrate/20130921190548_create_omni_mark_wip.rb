class CreateOmniMarkWip < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('mark_wip')
      create_table(:mark_wip, :id => false) do |t|
        t.column   :id,                              :integer,           null: false
        t.column   :outlet_nbr,                      :integer,           null: true
        t.column   :stock_nbr,                       :integer,           null: true
        t.column   :size,                            :string,            null: true,    limit: 255
        t.column   :cut_wip,                         :integer,           null: true
        t.column   :plant_wip,                       :integer,           null: true
        t.column   :cont_wip,                        :integer,           null: true
        t.column   :status_id,                       :integer,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
