class CreateOmniStyles < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('styles')
      create_table(:styles, :id => false) do |t|
        t.column   :style_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :style_nbr,                       :string,            :null  =>  true,    :limit   => 11
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :concatenated_name,               :string,            :null  =>  true,    :limit   => 100
        t.column   :pos_name,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :effective_date,                  :datetime,          :null  =>  true
        t.column   :discontinued_date,               :datetime,          :null  =>  true
        t.column   :out_of_stock_date,               :datetime,          :null  =>  true
        t.column   :subclass_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :product_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :buyer_user_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :brand,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :product_type_id,                 :string,            :null  =>  true,    :limit   => 32
        t.column   :fabric_content,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :storage_code,                    :string,            :null  =>  true,    :limit   => 6
        t.column   :design_code,                     :string,            :null  =>  true,    :limit   => 200
        t.column   :initial_retail_price,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :suggested_retail_price,          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :planning_retail_price,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :smoothing_factor,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :replenishment_method,            :string,            :null  =>  true,    :limit   => 100
        t.column   :replenishment_source,            :string,            :null  =>  true,    :limit   => 100
        t.column   :minimum_on_hand_units,           :integer,           :null  =>  true
        t.column   :maximum_on_hand_units,           :integer,           :null  =>  true
        t.column   :pack_type,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :is_not_stocked,                  :boolean,           :null  =>  true
        t.column   :sell_unit_uom_code,              :string,            :null  =>  true,    :limit   => 100
        t.column   :sell_unit_length,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sell_unit_height,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sell_unit_width,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sell_unit_weight,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_conveyable_sell_unit,         :boolean,           :null  =>  true
        t.column   :is_discountable,                 :boolean,           :null  =>  true
        t.column   :is_taxable,                      :boolean,           :null  =>  true
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :order_uom_code,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :order_package_type,              :string,            :null  =>  true,    :limit   => 100
        t.column   :garment_pieces,                  :integer,           :null  =>  true
        t.column   :is_special_order,                :boolean,           :null  =>  true
        t.column   :is_converted,                    :boolean,           :null  =>  true
        t.column   :add_on_sku_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :site_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :conversion_type,                 :string,            :null  =>  true,    :limit   => 100
        t.column   :maintenance_level,               :string,            :null  =>  true,    :limit   => 100
        t.column   :is_convertible,                  :boolean,           :null  =>  true
        t.column   :is_converted_heatset,            :boolean,           :null  =>  true
        t.column   :is_converted_sewn,               :boolean,           :null  =>  true
        t.column   :generic_style_id,                :string,            :null  =>  true,    :limit   => 32
        t.column   :size_group_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_name_method,                 :string,            :null  =>  true,    :limit   => 100
        t.column   :is_alterable,                    :boolean,           :null  =>  true
        t.column   :is_usually_altered,              :boolean,           :null  =>  true
        t.column   :is_enabled,                      :boolean,           :null  =>  true
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
        t.column   :audit_created_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_created_at,                :datetime,          :null  =>  true
        t.column   :audit_updated_at,                :datetime,          :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
