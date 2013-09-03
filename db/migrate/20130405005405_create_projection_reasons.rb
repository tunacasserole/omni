class CreateProjectionReasons < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'projection_reasons'
      create_table(:projection_reasons, :id => false) do |t|
        t.column :projection_reason_id,              :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:projection_reasons, [:projection_reason_id], :unique => true)

    end
  end
end
