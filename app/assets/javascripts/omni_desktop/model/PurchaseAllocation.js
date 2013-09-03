Ext.define('Omni.model.PurchaseAllocation', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'purchase_allocation_id',      type: 'string'   },
      { name: 'purchase_detail_id',          type: 'string'   },
      { name: 'allocation_id',               type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'purchase_allocation_nbr',     type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'units',                       type: 'decimal'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'purchase_allocation_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.PurchaseAllocation.create,
      read:    Omni.service.PurchaseAllocation.read,
      update:  Omni.service.PurchaseAllocation.update,
      destroy: Omni.service.PurchaseAllocation.destroy
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