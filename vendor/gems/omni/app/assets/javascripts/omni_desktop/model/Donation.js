Ext.define('Omni.model.Donation', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'donation_id',                 type: 'string'   },
      { name: 'OwnerId',                     type: 'string'   },
      { name: 'IsDeleted',                   type: 'integer'  },
      { name: 'Name',                        type: 'string'   },
      { name: 'CreatedDate',                 type: 'string'   },
      { name: 'CreatedById',                 type: 'string'   },
      { name: 'LastModifiedDate',            type: 'string'   },
      { name: 'LastModifiedById',            type: 'string'   },
      { name: 'SystemModstamp',              type: 'string'   },
      { name: 'LastActivityDate',            type: 'string'   },
      { name: 'Account__c',                  type: 'string'   },
      { name: 'Date__c',                     type: 'string'   },
      { name: 'Benefit__c',                  type: 'string'   },
      { name: 'No_of_Cards__c',              type: 'string'   },
      { name: 'Amount__c',                   type: 'integer'  },
      { name: 'Recipient__c',                type: 'string'   },
      { name: 'Note__c',                     type: 'string'   }
    ],

  idProperty: 'donation_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Donation.create,
      read:    Omni.service.Donation.read,
      update:  Omni.service.Donation.update,
      destroy: Omni.service.Donation.destroy
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