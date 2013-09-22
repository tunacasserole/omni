class CreateOmniSupplierRatings < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('supplier_ratings')
      create_table(:supplier_ratings, :id => false) do |t|
        t.column   :supplier_rating_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :supplier_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :supplier_rating_subject_id,      :string,            :null  =>  false,   :limit   => 32
        t.column   :rating_date,                     :date,              :null  =>  true
        t.column   :rating_value,                    :integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
