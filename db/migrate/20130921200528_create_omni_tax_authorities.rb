class CreateOmniTaxAuthorities < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('tax_authorities')
      create_table(:tax_authorities, :id => false) do |t|
        t.column   :tax_authority_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :tax_authority_type,              :string,            :null  =>  true,    :limit   => 100
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :state_code,                      :string,            :null  =>  false,   :limit   => 2
        t.column   :filing_frequency,                :string,            :null  =>  true,    :limit   => 100
        t.column   :is_tax_when_no_presence,         :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
