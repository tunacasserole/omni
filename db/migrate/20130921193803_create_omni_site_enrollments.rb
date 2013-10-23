class CreateOmniSiteEnrollments < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('site_enrollments')
      create_table(:site_enrollments, :id => false) do |t|
        t.column   :site_enrollment_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :school_year,                     :string,            :null  =>  false,   :limit   => 100
        t.column   :grade_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :gender,                          :string,            :null  =>  false,   :limit   => 100
        t.column   :school_year_start_date,          :date,              :null  =>  true
        t.column   :school_year_end_date,            :date,              :null  =>  true
        t.column   :enrollment,                      :integer,           :null  =>  false
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
