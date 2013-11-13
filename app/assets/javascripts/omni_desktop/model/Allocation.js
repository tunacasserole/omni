Ext.define('Omni.model.Allocation', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'allocation_id',
      type       : 'string'
    },
    {
      name       : 'allocatable_id',
      type       : 'string'
    },
    {
      name       : 'allocatable_type',
      type       : 'string'
    },
    {
      name       : 'sku_id',
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
      name       : 'allocation_profile_id',
      type       : 'string'
    },
    {
      name       : 'allocation_profile_display',
      type       : 'string'
    },
    {
      name       : 'allocation_nbr',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'units_to_allocate',
      type       : 'decimal'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'allocation_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Allocation.create,
      read       : Omni.service.Allocation.read,
      update     : Omni.service.Allocation.update,
      destroy    : Omni.service.Allocation.destroy
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

}); // Ext.define('Omni.model.Allocation'
