class CreateDepartments < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'departments'
      create_table(:departments, :id => false) do |t|
        t.column :department_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :department_nbr,                    :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :buyer_user_id,                     :string,        :limit       => 32,     :null        => true
        t.column :company_id,                        :string,        :limit       => 32,     :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:departments, [:department_id], :unique => true)

    end
  end
end
