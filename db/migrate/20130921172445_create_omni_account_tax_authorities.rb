class CreateOmniAccountTaxAuthorities < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('account_tax_authorities')
      create_table(:account_tax_authorities, :id => false) do |t|
        t.column   :account_tax_authority_id,:string,            null: false,   limit: 32
        t.column   :display,                 :string,            null: true,   limit: 200
        t.column   :account_id,              :string,            null: true,   limit: 32
        t.column   :tax_authority_id,        :string,            null: true,   limit: 32
        t.column   :is_destroyed,            :boolean,           null: true
      end
    end
  end
end
