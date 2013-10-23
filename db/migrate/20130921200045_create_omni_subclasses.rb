class CreateOmniSubclasses < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('subclasses')
      create_table(:subclasses, :id => false) do |t|
        t.column   :subclass_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :subclass_nbr,                    :string,            :null  =>  true,    :limit   => 6
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :classification_id,               :string,            :null  =>  false,   :limit   => 32
        t.column   :markup_percent_high_limit,       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :markup_percent_low_limit,        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
