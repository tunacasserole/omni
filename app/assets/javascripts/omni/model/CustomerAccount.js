Ext.define('Omni.model.CustomerAccount', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'customer_account_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'customer_id',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'comment',
      type       : 'string'
    },
    {
      name       : 'is_contact',
      type       : 'boolean'
    },
    {
      name       : 'is_teacher',
      type       : 'boolean'
    },
    {
      name       : 'is_administrator',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'customer_account_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.CustomerAccount.create,
      read       : Omni.service.CustomerAccount.read,
      update     : Omni.service.CustomerAccount.update,
      destroy    : Omni.service.CustomerAccount.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Omni.model.CustomerAccount'