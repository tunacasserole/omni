class CreateOmniProgramProducts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('program_products')
      create_table(:program_products, :id => false) do |t|
        t.column   :program_product_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :program_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :product_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :from_grade_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :thru_grade_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :uniform_source,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :is_required_male,                :boolean,           :null  =>  true
        t.column   :is_required_female,              :boolean,           :null  =>  true
        t.column   :is_optional_male,                :boolean,           :null  =>  true
        t.column   :is_optional_female,              :boolean,           :null  =>  true
        t.column   :is_includes_logo,                :boolean,           :null  =>  true
        t.column   :discount_percent,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_active,                       :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
