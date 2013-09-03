class CreateTaxAuthorityRates < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'tax_authority_rates'
      create_table(:tax_authority_rates, :id => false) do |t|
        t.column :tax_authority_rate_id,             :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :tax_authority_id,                  :string,        :limit       => 32,     :null        => false
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :tax_percent,                       :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:tax_authority_rates, [:tax_authority_rate_id], :unique => true)

    end
  end
end
