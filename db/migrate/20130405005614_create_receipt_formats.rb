class CreateReceiptFormats < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'receipt_formats'
      create_table(:receipt_formats, :id => false) do |t|
        t.column :receipt_format_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :icon_url,                          :string,        :limit       => 200,    :null        => true
        t.column :icon_width,                        :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :paper_width,                       :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :top_name,                          :string,        :limit       => 100,    :null        => true
        t.column :feedback_message,                  :text,          :null        => true
        t.column :return_policy,                     :text,          :null        => true
        t.column :website_message,                   :string,        :limit       => 200,    :null        => true
        t.column :promotional_message,               :text,          :null        => true
        t.column :message_separator,                 :string,        :limit       => 100,    :null        => true
        t.column :is_date_in_header,                 :boolean,       :null        => true
        t.column :is_time_in_header,                 :boolean,       :null        => true
        t.column :is_location_name_in_header,        :boolean,       :null        => true
        t.column :is_location_number_in_header,      :boolean,       :null        => true
        t.column :is_order_number_in_header,         :boolean,       :null        => true
        t.column :is_cashier_name_in_header,         :boolean,       :null        => true
        t.column :is_cashier_number_in_header,       :boolean,       :null        => true
        t.column :is_salesperson_name_in_header,     :boolean,       :null        => true
        t.column :is_salesperson_number_in_header,   :boolean,       :null        => true
        t.column :is_customer_name_in_header,        :boolean,       :null        => true
        t.column :is_date_in_footer,                 :boolean,       :null        => true
        t.column :is_time_in_footer,                 :boolean,       :null        => true
        t.column :is_location_name_in_footer,        :boolean,       :null        => true
        t.column :is_location_number_in_footer,      :boolean,       :null        => true
        t.column :is_order_number_in_footer,         :boolean,       :null        => true
        t.column :is_cashier_name_in_footer,         :boolean,       :null        => true
        t.column :is_cashier_number_in_footer,       :boolean,       :null        => true
        t.column :is_salesperson_name_in_footer,     :boolean,       :null        => true
        t.column :is_salesperson_number_in_footer,   :boolean,       :null        => true
        t.column :is_customer_name_in_footer,        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:receipt_formats, [:receipt_format_id], :unique => true)

    end
  end
end
