class CreateRulesets < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'rulesets'
      create_table(:rulesets, :id => false) do |t|
        t.column :ruleset_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :ruleset_code,                      :string,        :limit       => 100,    :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :is_active,                         :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:rulesets, [:ruleset_id], :unique => true)

    end
  end
end
