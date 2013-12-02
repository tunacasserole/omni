Ext.define('Omni.model.AllocationDetail', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'allocation_detail_id',
      type       : 'string'
    },
    {
      name       : 'sku_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'transfer_id',
      type       : 'string'
    },
    {
      name       : 'transfer_display',
      type       : 'string'
    },
    {
      name       : 'sku_display',
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
      name       : 'allocation_id',
      type       : 'string'
    },
    {
      name       : 'allocation_detail_nbr',
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

  idProperty : 'allocation_detail_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.AllocationDetail.create,
      read       : Omni.service.AllocationDetail.read,
      update     : Omni.service.AllocationDetail.update,
      destroy    : Omni.service.AllocationDetail.destroy
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

}); // Ext.define('Omni.model.AllocationDetail'
