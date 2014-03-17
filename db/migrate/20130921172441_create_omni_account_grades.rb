class CreateOmniAccountGrades < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :account_grades if ActiveRecord::Base.connection.tables.include?('account_grades')
    create_table(:account_grades, :id => false) do |t|
      t.column   :account_grade_id, :string,            null: false,   limit: 32
      t.column   :account_id,       :string,            null: true,   limit: 32
      t.column   :grade_id,         :string,            null: true,   limit: 32
      t.column   :grade_name,       :string,            null: true,   limit: 200
      t.column   :display,          :string,            null: true,   limit: 200
      t.column   :grade_order,      :string,            null: true,   limit: 200
      t.column   :is_destroyed,     :boolean,           null: true
    end
  end
end
