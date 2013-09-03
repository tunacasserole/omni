class CreateCustomerSites < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'customer_sites'
      create_table(:customer_sites, :id => false) do |t|
        t.column :customer_site_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => false
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :comment,                           :string,        :limit       => 300,    :null        => true
        t.column :is_site_contact,                   :boolean,       :null        => true
        t.column :is_teacher,                        :boolean,       :null        => true
        t.column :is_administrator,                  :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:customer_sites, [:customer_site_id], :unique => true)

    end
  end
end
