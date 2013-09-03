class CreateOmniCutLi < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('cut_li')
      create_table(:cut_li, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :cut_nbr,                         :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :qty_to_cut,                      :integer,           :null  =>  false
        t.column   :qty_in_cut,                      :integer,           :null  =>  false
        t.column   :qty_in_plant,                    :integer,           :null  =>  false
        t.column   :qty_in_damage,                   :integer,           :null  =>  false
        t.column   :qty_on_shelf,                    :integer,           :null  =>  false
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
