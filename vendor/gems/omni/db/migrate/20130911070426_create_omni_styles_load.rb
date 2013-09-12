class CreateOmniStylesLoad < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('styles_load')
      create_table(:styles_load, :id => false) do |t|
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :style_name,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :style_nbr,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :concatenated_name,               :string,            :null  =>  true,    :limit   => 255
        t.column   :pos_name,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :effective_date,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :subclass_id,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :product_id,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)brand,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :product_type_id,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)fabric_content,               :string,            :null  =>  true,    :limit   => 255
        t.column   :storage_code,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :is_convertible,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :is_converted,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :is_converted_heatset,            :string,            :null  =>  true,    :limit   => 255
        t.column   :is_converted_sewn,               :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)conversion_type,              :string,            :null  =>  true,    :limit   => 255
        t.column   :add_on_sku_id,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :site_id,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :generic_style_id,                :string,            :null  =>  true,    :limit   => 255
        t.column   :size_group_id,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :initial_retail_price,            :string,            :null  =>  true,    :limit   => 255
        t.column   :is_alterable,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :is_usually_altered,              :string,            :null  =>  true,    :limit   => 255
        t.column   :is_enabled,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :supplier_cost,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :cost_units,                      :string,            :null  =>  true,    :limit   => 255
        t.column   :landing_cost,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)pack_type,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :pack_size,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)master_pack_uom_code,         :string,            :null  =>  true,    :limit   => 255
        t.column   :origin_country,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)fob_point,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :(l)sell_unit_uom_code,           :string,            :null  =>  true,    :limit   => 255
        t.column   :is_discountable,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :is_taxable,                      :string,            :null  =>  true,    :limit   => 255
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
