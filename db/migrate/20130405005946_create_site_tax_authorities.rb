class CreateSiteTaxAuthorities < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'site_tax_authorities'
      create_table(:site_tax_authorities, :id => false) do |t|
        t.column :site_tax_authority_id,             :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :tax_authority_id,                  :string,        :limit       => 32,     :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:site_tax_authorities, [:site_tax_authority_id], :unique => true)

    end
  end
end
