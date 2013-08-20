Ext.define('Omni.model.Account', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'Id',                          type: 'string'   },
      { name: 'IsDeleted',                   type: 'integer'  },
      { name: 'MasterRecordId',              type: 'string'   },
      { name: 'Name',                        type: 'string'   },
      { name: 'Type',                        type: 'string'   },
      { name: 'ParentId',                    type: 'string'   },
      { name: 'BillingStreet',               type: 'string'   },
      { name: 'BillingCity',                 type: 'string'   },
      { name: 'BillingState',                type: 'string'   },
      { name: 'BillingPostalCode',           type: 'string'   },
      { name: 'BillingCountry',              type: 'string'   },
      { name: 'BillingLatitude',             type: 'string'   },
      { name: 'BillingLongitude',            type: 'string'   },
      { name: 'ShippingStreet',              type: 'string'   },
      { name: 'ShippingCity',                type: 'string'   },
      { name: 'ShippingState',               type: 'string'   },
      { name: 'ShippingPostalCode',          type: 'string'   },
      { name: 'ShippingCountry',             type: 'string'   },
      { name: 'ShippingLatitude',            type: 'string'   },
      { name: 'ShippingLongitude',           type: 'string'   },
      { name: 'Phone',                       type: 'string'   },
      { name: 'Fax',                         type: 'string'   },
      { name: 'AccountNumber',               type: 'string'   },
      { name: 'Website',                     type: 'string'   },
      { name: 'Sic',                         type: 'string'   },
      { name: 'Industry',                    type: 'string'   },
      { name: 'AnnualRevenue',               type: 'string'   },
      { name: 'NumberOfEmployees',           type: 'string'   },
      { name: 'Ownership',                   type: 'string'   },
      { name: 'TickerSymbol',                type: 'string'   },
      { name: 'Description',                 type: 'string'   },
      { name: 'Rating',                      type: 'string'   },
      { name: 'Site',                        type: 'string'   },
      { name: 'OwnerId',                     type: 'string'   },
      { name: 'CreatedDate',                 type: 'string'   },
      { name: 'CreatedById',                 type: 'string'   },
      { name: 'LastModifiedDate',            type: 'string'   },
      { name: 'LastModifiedById',            type: 'string'   },
      { name: 'SystemModstamp',              type: 'string'   },
      { name: 'LastActivityDate',            type: 'string'   },
      { name: 'Jigsaw',                      type: 'string'   },
      { name: 'JigsawCompanyId',             type: 'string'   },
      { name: 'AccountSource',               type: 'string'   },
      { name: 'SicDesc',                     type: 'string'   },
      { name: 'School_Type__c',              type: 'string'   },
      { name: 'Annual_Tuition__c',           type: 'string'   },
      { name: 'Existing_Provider_Contract_Expiration__c', type: 'string'   },
      { name: 'Fabric__c',                   type: 'string'   },
      { name: 'Grades__c',                   type: 'string'   },
      { name: 'Level_of_Income__c',          type: 'string'   },
      { name: 'Number_of_Students__c',       type: 'string'   },
      { name: 'Uniform_Policy__c',           type: 'string'   },
      { name: 'Revenue_Band__c',             type: 'string'   },
      { name: 'School_Potential__c',         type: 'string'   },
      { name: 'Account_Status__c',           type: 'string'   },
      { name: 'Existing_Customer_Subtype__c', type: 'string'   },
      { name: 'Prospective_Customer_Subtype__c', type: 'string'   },
      { name: 'Prospective_Revenue_Band__c', type: 'string'   },
      { name: 'Existing_Uniform_Provider__c', type: 'string'   },
      { name: 'Outlet_Number__c',            type: 'string'   },
      { name: 'Footwear_Program__c',         type: 'string'   }
    ],

  idProperty: 'id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Account.create,
      read:    Omni.service.Account.read,
      update:  Omni.service.Account.update,
      destroy: Omni.service.Account.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});