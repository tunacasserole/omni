class CreateOmniSkuLoad1 < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_load1')
      create_table(:sku_load1, :id => false) do |t|
        t.column   :style_id,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :color_id,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :size_id,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :pos_name,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :is_enabled,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :design_code,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :mark_stock,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :mark_size,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :buckhead_identifier,             :string,            :null  =>  true,    :limit   => 255
        t.column   :grits_identifier,                :string,            :null  =>  true,    :limit   => 255
        t.column   :effective_date,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :discontinued_date,               :string,            :null  =>  true,    :limit   => 255
        t.column   :is_not_stocked,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :is_special_order,                :string,            :null  =>  true,    :limit   => 255
        t.column   :is_special_size,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :price,                           :string,            :null  =>  true,    :limit   => 255
        t.column   :sku_load_id,                     :integer,           :null  =>  false
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
