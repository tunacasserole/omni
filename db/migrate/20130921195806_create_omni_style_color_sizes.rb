class CreateOmniStyleColorSizes < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('style_color_sizes')
      create_table(:style_color_sizes, :id => false) do |t|
        t.column   :style_color_size_id,             :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :style_color_id,                  :string,            :null  =>  true,    :limit   => 32
        t.column   :size_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_name,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :pos_name,                        :string,            :null  =>  true,    :limit   => 30
        t.column   :is_special_order,                :boolean,           :null  =>  true
        t.column   :is_not_available,                :boolean,           :null  =>  true
        t.column   :fabric_bom_adjust_percent,       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
