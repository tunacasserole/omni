class CreateOmniPicks < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('picks')
      create_table(:picks, :id => false) do |t|
        t.column   :pick_id,                         :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :pick_nbr,                        :string,            null: true,    limit: 200
        t.column   :pickable_id,                     :string,            null: true,    limit: 32
        t.column   :pickable_type,                   :string,            null: true,    limit: 200
        t.column   :fulfillment_location_id,         :string,            null: true,    limit: 32
        t.column   :job_id,                          :string,            null: true,    limit: 32
        t.column   :request_units,                   :integer,           null: true
        t.column   :complete_units,                  :integer,           null: true
        t.column   :release_date,                    :datetime,          null: true
        t.column   :start_date,                      :datetime,          null: true
        t.column   :complete_date,                   :datetime,          null: true
        t.column   :ship_date,                       :datetime,          null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
  end
end
