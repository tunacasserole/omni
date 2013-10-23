class CreateOmniPurchaseRequests < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('purchase_requests')
      create_table(:purchase_requests, :id => false) do |t|
        t.column   :purchase_request_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                                    :string,            :null  =>  true,    :limit   => 200
        t.column   :purchase_request_nbr,           :string,            :null  =>  true,    :limit   => 200
        t.column   :state,                                         :string,            :null  =>  true,    :limit   => 200
        t.column   :purchase_request_type,           :string,            :null  =>  true,    :limit   => 100
        t.column   :supplier_id,                               :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                               :string,            :null  =>  true,    :limit   => 32
        t.column   :ordered_by_user_id,                :string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_type,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :purchase_unit_source,             :string,            :null  =>  true,    :limit   => 100
        t.column   :purchase_id,                             :string,            :null  =>  true,    :limit   => 32
        t.column   :department_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :classification_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :subclass_id,                             :string,            :null  =>  true,    :limit   => 32
        t.column   :style_id,                                  :string,            :null  =>  true,    :limit   => 32
        t.column   :order_date,                            :date,           :null  =>  true
        t.column   :units_shipped,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :adjustment_percent,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_include_conversions,        :boolean,           :null  =>  true
        t.column   :is_destroyed,                       :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
