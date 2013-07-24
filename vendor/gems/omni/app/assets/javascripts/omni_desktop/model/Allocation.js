Ext.define('Omni.model.Allocation', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'allocation_id',               type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'allocation_nbr',              type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'allocation_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Allocation.create,
      read:    Omni.service.Allocation.read,
      update:  Omni.service.Allocation.update,
      destroy: Omni.service.Allocation.destroy
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