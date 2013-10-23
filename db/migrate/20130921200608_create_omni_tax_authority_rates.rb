class CreateOmniTaxAuthorityRates < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('tax_authority_rates')
      create_table(:tax_authority_rates, :id => false) do |t|
        t.column   :tax_authority_rate_id,           :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :tax_authority_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :effective_date,                  :date,              :null  =>  true
        t.column   :end_date,                        :date,              :null  =>  true
        t.column   :tax_percent,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
