class CreateOmniPrograms < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('programs')
      create_table(:programs, :id => false) do |t|
        t.column   :program_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :program_nbr,                     :string,            :null  =>  false,   :limit   => 11
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :program_name,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :effective_date,                  :date,              :null  =>  true
        t.column   :end_date,                        :date,              :null  =>  true
        t.column   :contract_sent_date,              :date,              :null  =>  true
        t.column   :contract_received_date,          :date,              :null  =>  true
        t.column   :order_form_sent_date,            :date,              :null  =>  true
        t.column   :contract_won_date,               :date,              :null  =>  true
        t.column   :contract_lost_date,              :date,              :null  =>  true
        t.column   :is_exclusive,                    :boolean,           :null  =>  true
        t.column   :teacher_discount_percent,        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :administrator_discount_percent,  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_discount_in_store,            :boolean,           :null  =>  true
        t.column   :is_discount_on_web,              :boolean,           :null  =>  true
        t.column   :is_active,                       :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
