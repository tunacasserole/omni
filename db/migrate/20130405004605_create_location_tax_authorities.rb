class CreateLocationTaxAuthorities < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'location_tax_authorities'
      create_table(:location_tax_authorities, :id => false) do |t|
        t.column :location_tax_authority_id,         :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :tax_authority_id,                  :string,        :limit       => 32,     :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:location_tax_authorities, [:location_tax_authority_id], :unique => true)

    end
  end
end
