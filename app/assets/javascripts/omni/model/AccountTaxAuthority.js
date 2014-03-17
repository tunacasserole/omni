Ext.define('Omni.model.AccountTaxAuthority', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_tax_authority_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'tax_authority_id',
      type       : 'string'
    },
    {
      name       : 'account_display',
      type       : 'string'
    },
    {
      name       : 'tax_authority_display',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'account_tax_authority_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.AccountTaxAuthority.create,
      read       : Omni.service.AccountTaxAuthority.read,
      update     : Omni.service.AccountTaxAuthority.update,
      destroy    : Omni.service.AccountTaxAuthority.destroy
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

}); // Ext.define('Omni.model.AccountTaxAuthority'
