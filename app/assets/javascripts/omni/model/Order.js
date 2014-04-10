Ext.define('Omni.model.Order', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'order_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'location_id',
      type       : 'string'
    },
    {
      name       : 'terminal_id',
      type       : 'string'
    },
    {
      name       : 'location_display',
      type       : 'string'
    },
    {
      name       : 'terminal_display',
      type       : 'string'
    },
    {
      name       : 'order_nbr',
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
      name       : 'order_start_date',
      type       : 'datetime'
    },
    {
      name       : 'order_date',
      type       : 'datetime'
    },
    {
      name       : 'price_lookup_date',
      type       : 'datetime'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    {
      name       : 'order_source',
      type       : 'string'
    },
    {
      name       : 'is_tax_exempt_date',
      type       : 'boolean'
    },
    {
      name       : 'is_tax_exempt_customer',
      type       : 'boolean'
    },
    {
      name       : 'is_trade_discount_order',
      type       : 'boolean'
    },
    {
      name       : 'order_total',
      type       : 'decimal'
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

  idProperty : 'order_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Order.create,
      read       : Omni.service.Order.read,
      update     : Omni.service.Order.update,
      destroy    : Omni.service.Order.destroy
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

}); // Ext.define('Omni.model.Order'
