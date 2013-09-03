Ext.define('Omni.model.PurchaseCost', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'purchase_cost_id',            type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'purchase_detail_id',          type: 'string'   },
      { name: 'cost_detail_id',              type: 'string'   },
      { name: 'cost_type',                   type: 'string'   },
      { name: 'cost_amount',                 type: 'decimal'  },
      { name: 'cost_percent',                type: 'decimal'  },
      { name: 'estimated_cost',              type: 'decimal'  },
      { name: 'actual_cost',                 type: 'decimal'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'purchase_cost_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.PurchaseCost.create,
      read:    Omni.service.PurchaseCost.read,
      update:  Omni.service.PurchaseCost.update,
      destroy: Omni.service.PurchaseCost.destroy
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