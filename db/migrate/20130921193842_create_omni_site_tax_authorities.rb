class CreateOmniSiteTaxAuthorities < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('site_tax_authorities')
      create_table(:site_tax_authorities, :id => false) do |t|
        t.column   :site_tax_authority_id,           :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :tax_authority_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
