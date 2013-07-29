class CreateSiteEnrollments < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'site_enrollments'
      create_table(:site_enrollments, :id => false) do |t|
        t.column :site_enrollment_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :school_year,                       :string,        :limit       => 100,    :null        => false
        t.column :grade_id,                          :string,        :limit       => 32,     :null        => false
        t.column :gender,                            :string,        :limit       => 100,    :null        => false
        t.column :school_year_start_date,            :date,          :null        => true
        t.column :school_year_end_date,              :date,          :null        => true
        t.column :enrollment,                        :decimal,       :precision   => 9,      :scale       => 0,      :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:site_enrollments, [:site_enrollment_id], :unique => true)

    end
  end
end
