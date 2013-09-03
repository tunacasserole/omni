class CreateProgramProducts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'program_products'
      create_table(:program_products, :id => false) do |t|
        t.column :program_product_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :program_id,                        :string,        :limit       => 32,     :null        => false
        t.column :product_id,                        :string,        :limit       => 32,     :null        => false
        t.column :from_grade_id,                     :string,        :limit       => 32,     :null        => false
        t.column :thru_grade_id,                     :string,        :limit       => 32,     :null        => false
        t.column :uniform_source,                    :string,        :limit       => 100,    :null        => true
        t.column :is_required_male,                  :boolean,       :null        => true
        t.column :is_required_female,                :boolean,       :null        => true
        t.column :is_optional_male,                  :boolean,       :null        => true
        t.column :is_optional_female,                :boolean,       :null        => true
        t.column :is_includes_logo,                  :boolean,       :null        => true
        t.column :discount_percent,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_active,                         :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:program_products, [:program_product_id], :unique => true)

    end
  end
end
