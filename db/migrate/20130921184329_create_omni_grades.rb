class CreateOmniGrades < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('grades')
      create_table(:grades, :id => false) do |t|
        t.column   :grade_id,                        :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 300
        t.column   :grade_name,                      :string,            null: true,    limit: 200
        t.column   :short_name,                      :string,            null: true,    limit: 200
        t.column   :grade_order,                     :integer,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
  end
end
