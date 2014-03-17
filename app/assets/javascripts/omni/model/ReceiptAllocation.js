Ext.define('Omni.model.ReceiptAllocation', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'receipt_allocation_id',
      type       : 'string'
    },
    {
      name       : 'receipt_allocation_nbr',
      type       : 'string'
    },
    {
      name       : 'receipt_detail_id',
      type       : 'string'
    },
    {
      name       : 'location_id',
      type       : 'string'
    },
    {
      name       : 'location_display',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'units_needed',
      type       : 'decimal'
    },
    {
      name       : 'units_allocated',
      type       : 'decimal'
    },
    {
      name       : 'units_shipped',
      type       : 'decimal'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'receipt_allocation_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.ReceiptAllocation.create,
      read       : Omni.service.ReceiptAllocation.read,
      update     : Omni.service.ReceiptAllocation.update,
      destroy    : Omni.service.ReceiptAllocation.destroy
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

}); // Ext.define('Omni.model.ReceiptAllocation'
