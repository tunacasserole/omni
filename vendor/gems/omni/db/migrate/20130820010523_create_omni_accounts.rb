class CreateOmniAccounts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('accounts')
      create_table(:accounts, :id => false) do |t|
        t.column   :Id,                              :string,            :null  =>  true,    :limit   => 255
        t.column   :IsDeleted,                       :integer,           :null  =>  true
        t.column   :MasterRecordId,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :Name,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :Type,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :ParentId,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingStreet,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingCity,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingState,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingPostalCode,               :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingCountry,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingLatitude,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :BillingLongitude,                :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingStreet,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingCity,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingState,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingPostalCode,              :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingCountry,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingLatitude,                :string,            :null  =>  true,    :limit   => 255
        t.column   :ShippingLongitude,               :string,            :null  =>  true,    :limit   => 255
        t.column   :Phone,                           :string,            :null  =>  true,    :limit   => 255
        t.column   :Fax,                             :string,            :null  =>  true,    :limit   => 255
        t.column   :AccountNumber,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :Website,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :Sic,                             :string,            :null  =>  true,    :limit   => 255
        t.column   :Industry,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :AnnualRevenue,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :NumberOfEmployees,               :string,            :null  =>  true,    :limit   => 255
        t.column   :Ownership,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :TickerSymbol,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :Description,                     :string,            :null  =>  true,    :limit   => 500
        t.column   :Rating,                          :string,            :null  =>  true,    :limit   => 255
        t.column   :Site,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :OwnerId,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :CreatedDate,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :CreatedById,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :LastModifiedDate,                :string,            :null  =>  true,    :limit   => 255
        t.column   :LastModifiedById,                :string,            :null  =>  true,    :limit   => 255
        t.column   :SystemModstamp,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :LastActivityDate,                :string,            :null  =>  true,    :limit   => 255
        t.column   :Jigsaw,                          :string,            :null  =>  true,    :limit   => 255
        t.column   :JigsawCompanyId,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :AccountSource,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :SicDesc,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :School_Type__c,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :Annual_Tuition__c,               :string,            :null  =>  true,    :limit   => 255
        t.column   :Existing_Provider_Contract_Expiration__c,:string,            :null  =>  true,    :limit   => 255
        t.column   :Fabric__c,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :Grades__c,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :Level_of_Income__c,              :string,            :null  =>  true,    :limit   => 255
        t.column   :Number_of_Students__c,           :string,            :null  =>  true,    :limit   => 255
        t.column   :Uniform_Policy__c,               :string,            :null  =>  true,    :limit   => 255
        t.column   :Revenue_Band__c,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :School_Potential__c,             :string,            :null  =>  true,    :limit   => 255
        t.column   :Account_Status__c,               :string,            :null  =>  true,    :limit   => 255
        t.column   :Existing_Customer_Subtype__c,    :string,            :null  =>  true,    :limit   => 255
        t.column   :Prospective_Customer_Subtype__c, :string,            :null  =>  true,    :limit   => 255
        t.column   :Prospective_Revenue_Band__c,     :string,            :null  =>  true,    :limit   => 255
        t.column   :Existing_Uniform_Provider__c,    :string,            :null  =>  true,    :limit   => 255
        t.column   :Outlet_Number__c,                :string,            :null  =>  true,    :limit   => 255
        t.column   :Footwear_Program__c,             :string,            :null  =>  true,    :limit   => 255
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
