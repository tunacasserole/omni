Ext.define('Omni.model.Contact', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'contact_id',                  type: 'string'   },
      { name: 'IsDeleted',                   type: 'integer'  },
      { name: 'MasterRecordId',              type: 'string'   },
      { name: 'AccountId',                   type: 'string'   },
      { name: 'Salutation',                  type: 'string'   },
      { name: 'FirstName',                   type: 'string'   },
      { name: 'LastName',                    type: 'string'   },
      { name: 'OtherStreet',                 type: 'string'   },
      { name: 'OtherCity',                   type: 'string'   },
      { name: 'OtherState',                  type: 'string'   },
      { name: 'OtherPostalCode',             type: 'string'   },
      { name: 'OtherCountry',                type: 'string'   },
      { name: 'OtherLatitude',               type: 'string'   },
      { name: 'OtherLongitude',              type: 'string'   },
      { name: 'MailingStreet',               type: 'string'   },
      { name: 'MailingCity',                 type: 'string'   },
      { name: 'MailingState',                type: 'string'   },
      { name: 'MailingPostalCode',           type: 'string'   },
      { name: 'MailingCountry',              type: 'string'   },
      { name: 'MailingLatitude',             type: 'string'   },
      { name: 'MailingLongitude',            type: 'string'   },
      { name: 'Phone',                       type: 'string'   },
      { name: 'Fax',                         type: 'string'   },
      { name: 'MobilePhone',                 type: 'string'   },
      { name: 'HomePhone',                   type: 'string'   },
      { name: 'OtherPhone',                  type: 'string'   },
      { name: 'AssistantPhone',              type: 'string'   },
      { name: 'ReportsToId',                 type: 'string'   },
      { name: 'Email',                       type: 'string'   },
      { name: 'Title',                       type: 'string'   },
      { name: 'Department',                  type: 'string'   },
      { name: 'AssistantName',               type: 'string'   },
      { name: 'LeadSource',                  type: 'string'   },
      { name: 'Birthdate',                   type: 'string'   },
      { name: 'Description',                 type: 'string'   },
      { name: 'OwnerId',                     type: 'string'   },
      { name: 'HasOptedOutOfEmail',          type: 'integer'  },
      { name: 'HasOptedOutOfFax',            type: 'integer'  },
      { name: 'DoNotCall',                   type: 'integer'  },
      { name: 'CreatedDate',                 type: 'string'   },
      { name: 'CreatedById',                 type: 'string'   },
      { name: 'LastModifiedDate',            type: 'string'   },
      { name: 'LastModifiedById',            type: 'string'   },
      { name: 'SystemModstamp',              type: 'string'   },
      { name: 'LastActivityDate',            type: 'string'   },
      { name: 'LastCURequestDate',           type: 'string'   },
      { name: 'LastCUUpdateDate',            type: 'string'   },
      { name: 'EmailBouncedReason',          type: 'string'   },
      { name: 'EmailBouncedDate',            type: 'string'   },
      { name: 'Jigsaw',                      type: 'string'   },
      { name: 'JigsawContactId',             type: 'string'   }
    ],

  idProperty: 'contact_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Contact.create,
      read:    Omni.service.Contact.read,
      update:  Omni.service.Contact.update,
      destroy: Omni.service.Contact.destroy
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