class CreateOmniRmsBts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('rms_bts')
      create_table(:rms_bts, :id => false) do |t|
        t.column   :ItemID,                          :integer,           null: true
        t.column   :Style,                           :string,            null: true,    limit: 255
        t.column   :StockNbr,                        :string,            null: true,    limit: 255
        t.column   :Description,                     :string,            null: true,    limit: 255
        t.column   :Color,                           :string,            null: true,    limit: 255
        t.column   :Size,                            :string,            null: true,    limit: 255
        t.column   :Variance,                        :string,            null: true,    limit: 255
        t.column   :Supplier,                        :string,            null: true,    limit: 255
        t.column   :QOH,                             :integer,           null: true
        t.column   :ItemQOH,                         :integer,           null: true
        t.column   :ItemDescrip,                     :string,            null: true,    limit: 255
        t.column   :QOO,                             :integer,           null: true
        t.column   :ItemQOO,                         :integer,           null: true
        t.column   :SalesPrice,                      :string,            null: true,    limit: 255
        t.column   :Cost,                            :string,            null: true,    limit: 255
        t.column   :JAN_2012,                        :integer,           null: true
        t.column   :JAN_2013,                        :integer,           null: true
        t.column   :FEB_2012,                        :integer,           null: true
        t.column   :FEB_2013,                        :integer,           null: true
        t.column   :MAR_2012,                        :integer,           null: true
        t.column   :MAR_2013,                        :integer,           null: true
        t.column   :APR_2012,                        :integer,           null: true
        t.column   :APR_2013,                        :integer,           null: true
        t.column   :MAY_2012,                        :integer,           null: true
        t.column   :MAY_2013,                        :integer,           null: true
        t.column   :JUN_2012,                        :integer,           null: true
        t.column   :JUN_2013,                        :integer,           null: true
        t.column   :JUL_2012,                        :integer,           null: true
        t.column   :JUL_2013,                        :integer,           null: true
        t.column   :AUG_2012,                        :integer,           null: true
        t.column   :AUG_2013,                        :integer,           null: true
        t.column   :SEP_2012,                        :integer,           null: true
        t.column   :SEP_2013,                        :integer,           null: true
        t.column   :OCT_2012,                        :integer,           null: true
        t.column   :OCT_2013,                        :integer,           null: true
        t.column   :NOV_2012,                        :integer,           null: true
        t.column   :NOV_2013,                        :integer,           null: true
        t.column   :DEC_2012,                        :integer,           null: true
        t.column   :DEC_2013,                        :integer,           null: true
        t.column   :TOT_2010,                        :integer,           null: true
        t.column   :TOT_2011,                        :integer,           null: true
        t.column   :TOT_2012,                        :integer,           null: true
        t.column   :TOT_2013,                        :integer,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
