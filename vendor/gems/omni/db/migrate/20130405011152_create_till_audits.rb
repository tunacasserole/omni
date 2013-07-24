class CreateTillAudits < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'till_audits'
      create_table(:till_audits, :id => false) do |t|
        t.column :till_audit_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :till_id,                           :string,        :limit       => 32,     :null        => true
        t.column :audit_date,                        :date,          :null        => true
        t.column :tender_id,                         :string,        :limit       => 32,     :null        => true
        t.column :system_count,                      :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :system_amount,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :audit_count,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :audit_amount,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :gl_interface_date,                 :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:till_audits, [:till_audit_id], :unique => true)

    end
  end
end
