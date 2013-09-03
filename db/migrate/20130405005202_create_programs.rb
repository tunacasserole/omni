class CreatePrograms < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'programs'
      create_table(:programs, :id => false) do |t|
        t.column :program_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :program_nbr,                       :string,        :limit       => 11,     :null        => false
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :program_name,                      :string,        :limit       => 100,    :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :contract_sent_date,                :date,          :null        => true
        t.column :contract_received_date,            :date,          :null        => true
        t.column :order_form_sent_date,              :date,          :null        => true
        t.column :contract_won_date,                 :date,          :null        => true
        t.column :contract_lost_date,                :date,          :null        => true
        t.column :is_exclusive,                      :boolean,       :null        => true
        t.column :teacher_discount_percent,          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :administrator_discount_percent,    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_discount_in_store,              :boolean,       :null        => true
        t.column :is_discount_on_web,                :boolean,       :null        => true
        t.column :is_active,                         :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:programs, [:program_id], :unique => true)

    end
  end
end
