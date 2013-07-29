class CreateSiteDonations < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'site_donations'
      create_table(:site_donations, :id => false) do |t|
        t.column :site_donation_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :donation_date,                     :date,          :null        => false
        t.column :donation_amount,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:site_donations, [:site_donation_id], :unique => true)

    end
  end
end
