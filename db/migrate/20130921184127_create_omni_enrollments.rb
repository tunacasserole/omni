class CreateOmniEnrollments < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :enrollments if ActiveRecord::Base.connection.tables.include?('enrollments')
    create_table(:enrollments, :id => false) do |t|
      t.column   :enrollment_id,  :string,            null: false,   limit: 32
      t.column   :account_id,             :string,            null: true,   limit: 32
      t.column   :display,                :string,            null: true,   limit: 200
      t.column   :school_year,            :string,            null: true,   limit: 200
      t.column   :grade_id,               :string,            null: true,   limit: 32
      t.column   :gender,                 :string,            null: true,   limit: 200
      t.column   :enrollment,             :string,            null: true,   limit: 200
      t.column   :school_year_start_date, :datetime,          null: true
      t.column   :school_year_end_date,   :datetime,          null: true
      t.column   :is_destroyed,           :boolean,           null: true
    end
  end
end
