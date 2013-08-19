class CreateOmniMonogramHd < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('monogram_hd')
      create_table(:monogram_hd, :id => false) do |t|
        t.column   :mg_nbr,                          :integer,           :null  =>  false
        t.column   :school_nbr,                      :integer,           :null  =>  true
        t.column   :outlet_nbr,                      :integer,           :null  =>  true
        t.column   :vendor_name,                     :string,            :null  =>  true,    :limit   => 15
        t.column   :status,                          :integer,           :null  =>  true
        t.column   :transfer_nbr,                    :integer,           :null  =>  true
        t.column   :date_putin,                      :timestamp,         :null  =>  true
        t.column   :pulled,                          :integer,           :null  =>  false
        t.column   :est_completion_date,             :date,              :null  =>  true
        t.column   :entered_by,                      :integer,           :null  =>  true
        t.column   :checked_in_by,                   :integer,           :null  =>  true
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
