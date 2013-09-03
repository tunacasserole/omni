Ext.define('Omni.model.Contract', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'contract_id',                 type: 'string'   },
      { name: 'AccountId',                   type: 'string'   },
      { name: 'OwnerExpirationNotice',       type: 'integer'  },
      { name: 'StartDate',                   type: 'string'   },
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
      { name: 'ContractTerm',                type: 'integer'  },
      { name: 'OwnerId',                     type: 'string'   },
      { name: 'Status',                      type: 'string'   },
      { name: 'CompanySignedId',             type: 'string'   },
      { name: 'CompanySignedDate',           type: 'string'   },
      { name: 'CustomerSignedId',            type: 'string'   },
      { name: 'CustomerSignedTitle',         type: 'string'   },
      { name: 'CustomerSignedDate',          type: 'string'   },
      { name: 'SpecialTerms',                type: 'string'   },
      { name: 'ActivatedById',               type: 'string'   },
      { name: 'ActivatedDate',               type: 'string'   },
      { name: 'StatusCode',                  type: 'string'   },
      { name: 'Description',                 type: 'string'   },
      { name: 'Name',                        type: 'string'   },
      { name: 'IsDeleted',                   type: 'integer'  },
      { name: 'ContractNumber',              type: 'string'   },
      { name: 'LastApprovedDate',            type: 'string'   },
      { name: 'CreatedDate',                 type: 'string'   },
      { name: 'CreatedById',                 type: 'string'   },
      { name: 'LastModifiedDate',            type: 'string'   },
      { name: 'LastModifiedById',            type: 'string'   },
      { name: 'SystemModstamp',              type: 'string'   },
      { name: 'LastActivityDate',            type: 'string'   }
    ],

  idProperty: 'contract_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Contract.create,
      read:    Omni.service.Contract.read,
      update:  Omni.service.Contract.update,
      destroy: Omni.service.Contract.destroy
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