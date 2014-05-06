class CreateOmniUniforms < ActiveRecord::Migration
def change
  @connection = ActiveRecord::Base.connection
  drop_table :uniforms if ActiveRecord::Base.connection.tables.include?('uniforms')
  create_table(:uniforms, :id => false) do |t|
    t.column   :uniform_id,                    :string,            null: false,   limit: 32
    t.column   :account_id,                    :string,            null: true,   limit: 32
    t.column   :contract_id,                   :string,            null: true,   limit: 32
    t.column   :display,                       :string,            null: true,   limit: 200
    t.column   :uniform_nbr,                   :string,            null: true,   limit: 200
    t.column   :uniform_name,                  :string,            null: true,    limit: 200
    t.column   :description,                   :string,            null: true,    limit: 4000
    t.column   :state,                         :string,            null: true,   limit: 200
    t.column   :school_year,                   :string,            null: true,   limit: 200
    t.column   :discount_percent,              :decimal,           null: true,    scale: 2, precision: 11
    t.column   :teacher_discount_percent,      :decimal,           null: true,    scale: 2, precision: 11
    t.column   :administrator_discount_percent,:decimal,           null: true,    scale: 2, precision: 11
    t.column   :is_discount_in_store,          :boolean,           null: true
    t.column   :is_discount_on_web,            :boolean,           null: true
    t.column   :is_free_shipping,              :boolean,           null: true
    t.column   :is_destroyed,                  :boolean,           null: true
  end
end
end
