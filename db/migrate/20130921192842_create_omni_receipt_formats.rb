class CreateOmniReceiptFormats < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('receipt_formats')
      create_table(:receipt_formats, :id => false) do |t|
        t.column   :receipt_format_id,               :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :icon_url,                        :string,            :null  =>  true,    :limit   => 200
        t.column   :icon_width,                      :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :paper_width,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :top_name,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :feedback_message,                :text,              :null  =>  true
        t.column   :return_policy,                   :text,              :null  =>  true
        t.column   :website_message,                 :string,            :null  =>  true,    :limit   => 200
        t.column   :promotional_message,             :text,              :null  =>  true
        t.column   :message_separator,               :string,            :null  =>  true,    :limit   => 100
        t.column   :is_date_in_header,               :boolean,           :null  =>  true
        t.column   :is_time_in_header,               :boolean,           :null  =>  true
        t.column   :is_location_name_in_header,      :boolean,           :null  =>  true
        t.column   :is_location_number_in_header,    :boolean,           :null  =>  true
        t.column   :is_order_number_in_header,       :boolean,           :null  =>  true
        t.column   :is_cashier_name_in_header,       :boolean,           :null  =>  true
        t.column   :is_cashier_number_in_header,     :boolean,           :null  =>  true
        t.column   :is_salesperson_name_in_header,   :boolean,           :null  =>  true
        t.column   :is_salesperson_number_in_header, :boolean,           :null  =>  true
        t.column   :is_customer_name_in_header,      :boolean,           :null  =>  true
        t.column   :is_date_in_footer,               :boolean,           :null  =>  true
        t.column   :is_time_in_footer,               :boolean,           :null  =>  true
        t.column   :is_location_name_in_footer,      :boolean,           :null  =>  true
        t.column   :is_location_number_in_footer,    :boolean,           :null  =>  true
        t.column   :is_order_number_in_footer,       :boolean,           :null  =>  true
        t.column   :is_cashier_name_in_footer,       :boolean,           :null  =>  true
        t.column   :is_cashier_number_in_footer,     :boolean,           :null  =>  true
        t.column   :is_salesperson_name_in_footer,   :boolean,           :null  =>  true
        t.column   :is_salesperson_number_in_footer, :boolean,           :null  =>  true
        t.column   :is_customer_name_in_footer,      :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
