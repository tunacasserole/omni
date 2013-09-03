class CreateReceiptDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'receipt_details'
      create_table(:receipt_details, :id => false) do |t|
        t.column :receipt_detail_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :receipt_id,                        :string,        :limit       => 32,     :null        => true
        t.column :receipt_line_nbr,                  :string,        :limit       => 11,     :null        => true
        t.column :purchase_detail_id,                :string,        :limit       => 32,     :null        => true
        t.column :received_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:receipt_details, [:receipt_detail_id], :unique => true)

    end
  end
end
