class CreateSupplierContacts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'supplier_contacts'
      create_table(:supplier_contacts, :id => false) do |t|
        t.column :supplier_contact_id,               :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => false
        t.column :first_name,                        :string,        :limit       => 100,    :null        => false
        t.column :last_name,                         :string,        :limit       => 100,    :null        => false
        t.column :name_prefix,                       :string,        :limit       => 100,    :null        => true
        t.column :name_suffix,                       :string,        :limit       => 100,    :null        => true
        t.column :department,                        :string,        :limit       => 100,    :null        => true
        t.column :job_title,                         :string,        :limit       => 100,    :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => true
        t.column :fax,                               :string,        :limit       => 30,     :null        => true
        t.column :email_address,                     :string,        :limit       => 200,    :null        => true
        t.column :is_order_contact,                  :boolean,       :null        => true
        t.column :is_return_contact,                 :boolean,       :null        => true
        t.column :is_payment_contact,                :boolean,       :null        => true
        t.column :is_executive_contact,              :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:supplier_contacts, [:supplier_contact_id], :unique => true)

    end
  end
end
