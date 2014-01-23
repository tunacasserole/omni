class CreateOmniSizeGroupDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('size_group_details')
      create_table(:size_group_details, :id => false) do |t|
        t.column   :size_group_detail_id,            :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :size_group_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :size_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :display_order,                   :integer,           :null  =>  true
        t.column   :is_enabled,                      :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
