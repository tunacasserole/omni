class CreateOmniGritsBts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('grits_bts')
      create_table(:grits_bts, :id => false) do |t|
        t.column   :tg_sku_id,                       :integer,           :null  =>  true
        t.column   :qoh_60,                          :integer,           :null  =>  true
        t.column   :qoh_61,                          :integer,           :null  =>  true
        t.column   :qoh_62,                          :integer,           :null  =>  true
        t.column   :qoh_63,                          :integer,           :null  =>  true
        t.column   :qoh_64,                          :integer,           :null  =>  true
        t.column   :qoh_65,                          :integer,           :null  =>  true
        t.column   :qoh_66,                          :integer,           :null  =>  true
        t.column   :qoo_60,                          :integer,           :null  =>  true
        t.column   :qoo_61,                          :integer,           :null  =>  true
        t.column   :qoo_62,                          :integer,           :null  =>  true
        t.column   :qoo_63,                          :integer,           :null  =>  true
        t.column   :qoo_64,                          :integer,           :null  =>  true
        t.column   :qoo_65,                          :integer,           :null  =>  true
        t.column   :qoo_66,                          :integer,           :null  =>  true
        t.column   :sold_60,                         :integer,           :null  =>  true
        t.column   :sold_61,                         :integer,           :null  =>  true
        t.column   :sold_62,                         :integer,           :null  =>  true
        t.column   :sold_63,                         :integer,           :null  =>  true
        t.column   :sold_64,                         :integer,           :null  =>  true
        t.column   :sold_65,                         :integer,           :null  =>  true
        t.column   :sold_66,                         :integer,           :null  =>  true
        t.column   :projected_60,                    :integer,           :null  =>  true
        t.column   :projected_61,                    :integer,           :null  =>  true
        t.column   :projected_62,                    :integer,           :null  =>  true
        t.column   :projected_63,                    :integer,           :null  =>  true
        t.column   :projected_64,                    :integer,           :null  =>  true
        t.column   :projected_65,                    :integer,           :null  =>  true
        t.column   :projected_66,                    :integer,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
