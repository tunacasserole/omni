class CreateOmniSiteDonations < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('site_donations')
      create_table(:site_donations, :id => false) do |t|
        t.column   :site_donation_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :donation_date,                   :date,              :null  =>  false
        t.column   :donation_amount,                 :decimal,           :null  =>  false,   :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
