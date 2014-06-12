class CreateDeskEmailMessages < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :email_messages if ActiveRecord::Base.connection.tables.include?('email_messages')
    create_table(:email_messages, id: false) do |t|
      t.column  :email_message_id,          :string,        :null => false,         :limit => 32
      t.column  :to,                        :string,        :null => true,          :limit => 4000
      t.column  :cc,                        :string,        :null => true,         :limit => 4000
      t.column  :subject,                   :string,        :null => true,         :limit => 200
      t.column  :body,                      :string,        :null => true,         :limit => 4000
      t.column  :state,                     :string,        :null => true,          :limit => 200
      t.column  :sent_date,                 :datetime,      :null => true
    end
    add_index(:email_messages,            [:email_message_id],                              :unique => true)
  end
end
