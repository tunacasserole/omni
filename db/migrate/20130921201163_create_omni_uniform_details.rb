class CreateOmniUniformDetails < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :uniform_details if ActiveRecord::Base.connection.tables.include?('uniform_details')
    create_table(:uniform_details, :id => false) do |t|
      t.column   :uniform_detail_id,             :string,            null: false,   limit: 32
      t.column   :display,                       :string,            null: true,   limit: 200
      t.column   :uniform_id,                    :string,            null: true,   limit: 32
      t.column   :style_id,                      :string,            null: true,   limit: 32
      t.column   :color_id,                      :string,            null: true,   limit: 32
      t.column   :style_color_id,                :string,            null: true,   limit: 32
      t.column   :uniform_detail_nbr,            :string,            null: true,   limit: 200
      t.column   :state,                         :string,            null: true,   limit: 200
      t.column   :from_grade_id,                 :string,            null: true,   limit: 32
      t.column   :thru_grade_id,                 :string,            null: true,   limit: 32
      t.column   :is_required_male,              :boolean,           null: true
      t.column   :is_required_female,            :boolean,           null: true
      t.column   :is_optional_male,              :boolean,           null: true
      t.column   :is_optional_female,            :boolean,           null: true
      t.column   :is_includes_logo,              :boolean,           null: true
      t.column   :is_requires_logo,              :boolean,           null: true
      t.column   :uniform_source,                :string,            null: true,   limit: 200
      t.column   :discount_percent,              :decimal,           null: true,    :scale   => 2,  :precision  => 11
      t.column   :retail_price,                  :decimal,           null: true,    :scale   => 2,  :precision  => 11
      t.column   :price_units,                   :decimal,           null: true,    :scale   => 2,  :precision  => 11
      t.column   :is_approved,                   :boolean,           null: true
      t.column   :is_destroyed,                  :boolean,           null: true
    end
  end
end
