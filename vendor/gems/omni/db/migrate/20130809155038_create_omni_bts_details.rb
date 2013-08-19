class CreateOmniBtsDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('bts_details')
      create_table(:bts_details, :id => false) do |t|
        t.column   :bts_detail_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :bts_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :on_hand,                         :integer,           :null  =>  true
        t.column   :work_ip,                         :integer,           :null  =>  true
        t.column   :purchase_ip,                     :integer,           :null  =>  true
        t.column   :wip,                             :integer,           :null  =>  true
        t.column   :allocated,                       :integer,           :null  =>  true
        t.column   :in_transit,                      :integer,           :null  =>  true
        t.column   :backorder,                       :integer,           :null  =>  true
        t.column   :ytd,                             :integer,           :null  =>  true
        t.column   :py1,                             :integer,           :null  =>  true
        t.column   :py2,                             :integer,           :null  =>  true
        t.column   :projected,                       :integer,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :version,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_at,                :datetime,          :null  =>  true
        t.column   :audit_created_at,                :datetime,          :null  =>  true
        t.column   :audit_created_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
