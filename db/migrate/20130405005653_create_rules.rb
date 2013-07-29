class CreateRules < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'rules'
      create_table(:rules, :id => false) do |t|
        t.column :rule_id,                           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :ruleset_id,                        :string,        :limit       => 32,     :null        => false
        t.column :rule_type,                         :string,        :limit       => 100,    :null        => true
        t.column :input_attribute,                   :string,        :limit       => 100,    :null        => true
        t.column :model_name,                        :string,        :limit       => 100,    :null        => true
        t.column :attribute_name,                    :string,        :limit       => 100,    :null        => true
        t.column :rule_action,                       :string,        :limit       => 100,    :null        => true
        t.column :is_active,                         :boolean,       :null        => true
        t.column :rule_seq,                          :string,        :limit       => 6,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:rules, [:rule_id], :unique => true)

    end
  end
end
