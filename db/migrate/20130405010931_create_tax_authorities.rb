class CreateTaxAuthorities < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'tax_authorities'
      create_table(:tax_authorities, :id => false) do |t|
        t.column :tax_authority_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :tax_authority_type,                :string,        :limit       => 100,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :state_code,                        :string,        :limit       => 2,      :null        => false
        t.column :filing_frequency,                  :string,        :limit       => 100,    :null        => true
        t.column :is_tax_when_no_presence,           :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:tax_authorities, [:tax_authority_id], :unique => true)

    end
  end
end
