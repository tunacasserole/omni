class CreateOmniUniformLookups < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :uniform_lookups if ActiveRecord::Base.connection.tables.include?('uniform_lookups')
    create_table(:uniform_lookups, :id => false) do |t|
      t.column   :uniform_lookup_id,             :string,            null: false,   limit: 32
      t.column   :display,                       :string,            null: true,   limit: 200
      t.column   :uniform_lookup_nbr,            :string,            null: true,   limit: 200
      t.column   :uniform_id,                    :string,            null: true,   limit: 32
      t.column   :uniform_detail_id,             :string,            null: true,   limit: 32
      t.column   :account_id,                    :string,            null: true,   limit: 32
      t.column   :contract_id,                   :string,            null: true,   limit: 32
      t.column   :category_id,                   :string,            null: true,   limit: 32
      t.column   :product_id,                    :string,            null: true,   limit: 32
      t.column   :style_id,                      :string,            null: true,   limit: 32
      t.column   :color_id,                      :string,            null: true,   limit: 32
      t.column   :size_id,                       :string,            null: true,   limit: 32
      t.column   :sku_id,                        :string,            null: true,   limit: 32
      t.column   :grade_id,                      :string,            null: true,   limit: 32
      t.column   :date_created,                  :datetime,          null: true
      t.column   :is_required_male,              :boolean,           null: true
      t.column   :is_required_female,            :boolean,           null: true
      t.column   :is_optional_male,              :boolean,           null: true
      t.column   :is_optional_female,            :boolean,           null: true
      t.column   :is_includes_logo,              :boolean,           null: true
      t.column   :is_requires_logo,              :boolean,           null: true
      t.column   :discount_percent,              :decimal,           null: true,    scale: 2, precision: 11
      t.column   :mark_uniform_key,              :string,            null: true,   limit: 200
      t.column   :mark_stock_number,             :string,            null: true,   limit: 200
      t.column   :mark_grades,                   :string,            null: true,   limit: 200
      t.column   :price_adjustment_1,            :decimal,           null: true,    scale: 2, precision: 11
      t.column   :price_adjustment_2,            :decimal,           null: true,    scale: 2, precision: 11
      t.column   :uniform_source,                :string,            null: true,   limit: 32
      t.column   :is_approved,                   :boolean,           null: true
      t.column   :is_destroyed,                  :boolean,           null: true
    end
  end
end
