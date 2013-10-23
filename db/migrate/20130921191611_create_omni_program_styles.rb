class CreateOmniProgramStyles < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('program_styles')
      create_table(:program_styles, :id => false) do |t|
        t.column   :program_style_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :program_product_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :style_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :retail_price,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :price_units,                     :integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
