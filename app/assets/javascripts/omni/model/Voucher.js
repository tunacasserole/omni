Ext.define('Omni.model.Voucher', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'voucher_id',
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
      name       : 'customer_display',
      type       : 'string'
    },
    {
      name       : 'voucher_nbr',
      type       : 'string'
    },
    {
      name       : 'voucher_type',
      type       : 'string'
    },
    {
      name       : 'initial_balance',
      type       : 'decimal'
    },
    {
      name       : 'current_balance',
      type       : 'decimal'
    },
    {
      name       : 'issue_date',
      type       : 'datetime'
    },
    {
      name       : 'expiration_date',
      type       : 'datetime'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'voucher_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Voucher.create,
      read       : Omni.service.Voucher.read,
      update     : Omni.service.Voucher.update,
      destroy    : Omni.service.Voucher.destroy
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

}); // Ext.define('Omni.model.Voucher'
