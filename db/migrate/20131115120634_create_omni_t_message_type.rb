class CreateOmniTMessageType < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless (@connection.columns('t_message_type').count > 0 || @connection.columns('T_MESSAGE_TYPE').count > 0)
      create_table(:t_message_type, :id => false) do |t|
        t.column   :id,                              :string,            :null  =>  true,    :limit   => 20
        t.column   :msg_nbr,                         :string,            :null  =>  false
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :message_code,                    :string,            :null  =>  true,    :limit   => 10
        t.column   :language_code,                   :string,            :null  =>  true
        t.column   :message_type,                    :string,            :null  =>  true
        t.column   :message_severity,                :string,            :null  =>  true,    :limit   => 1
        t.column   :num_parm,                        :string,            :null  =>  true
        t.column   :text_template,                   :string,            :null  =>  true,    :limit   => 200
        t.column   :p1_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p1,                  :string,            :null  =>  true
        t.column   :p2_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p2,                  :string,            :null  =>  true
        t.column   :p3_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p3,                  :string,            :null  =>  true
        t.column   :p4_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p4,                  :string,            :null  =>  true
        t.column   :p5_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p5,                  :string,            :null  =>  true
        t.column   :p6_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p6,                  :string,            :null  =>  true
        t.column   :p7_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p7,                  :string,            :null  =>  true
        t.column   :p8_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p8,                  :string,            :null  =>  true
        t.column   :p9_name,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p9,                  :string,            :null  =>  true
        t.column   :p10_name,                        :string,            :null  =>  true,    :limit   => 20
        t.column   :is_required_p10,                 :string,            :null  =>  true
        t.column   :is_destroyed,                    :string,            :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
