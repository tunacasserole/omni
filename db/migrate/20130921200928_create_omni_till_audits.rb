class CreateOmniTillAudits < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('till_audits')
      create_table(:till_audits, :id => false) do |t|
        t.column   :till_audit_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :till_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :audit_date,                      :date,              :null  =>  true
        t.column   :tender_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :system_count,                    :integer,           :null  =>  true
        t.column   :system_amount,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :audit_count,                     :integer,           :null  =>  true
        t.column   :audit_amount,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :gl_interface_date,               :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
