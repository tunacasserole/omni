class CreateOmniOutlets < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('outlets')
      create_table(:outlets, :id => false) do |t|
        t.column   :outlet_nbr,                      :integer,           :null  =>  false
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 30
        t.column   :address1,                        :string,            :null  =>  false,   :limit   => 30
        t.column   :address2,                        :string,            :null  =>  true,    :limit   => 30
        t.column   :city,                            :string,            :null  =>  true,    :limit   => 27
        t.column   :state_id,                        :integer,           :null  =>  false
        t.column   :zip_code,                        :string,            :null  =>  false,   :limit   => 10
        t.column   :phone_nbr,                       :string,            :null  =>  true,    :limit   => 10
        t.column   :orig_out,                        :integer,           :null  =>  true
        t.column   :remits_tax,                      :integer,           :null  =>  true
        t.column   :taxed_by1,                       :integer,           :null  =>  true
        t.column   :taxed_by2,                       :integer,           :null  =>  true
        t.column   :taxed_by3,                       :integer,           :null  =>  true
        t.column   :taxed_by4,                       :integer,           :null  =>  true
        t.column   :active,                          :integer,           :null  =>  false
        t.column   :information,                     :string,            :null  =>  true,    :limit   => 500
        t.column   :whse,                            :integer,           :null  =>  false
        t.column   :email,                           :string,            :null  =>  true,    :limit   => 50
        t.column   :tax_free,                        :integer,           :null  =>  true
        t.column   :tax_free_start,                  :date,              :null  =>  true
        t.column   :tax_free_stop,                   :date,              :null  =>  true
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
