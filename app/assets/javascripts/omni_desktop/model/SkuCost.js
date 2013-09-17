Ext.define('Omni.model.SkuCost', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'sku_cost_id',                 type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'sku_display',                 type: 'string'   },
      { name: 'sku_id',                      type: 'string'   },
      { name: 'first_cost',                  type: 'decimal'  },
      { name: 'last_cost',                   type: 'decimal'  },
      { name: 'average_cost',                type: 'decimal'  },
      { name: 'on_hand_units',               type: 'decimal'  },
      { name: 'cost_pool',                   type: 'decimal'  },
      { name: 'retail_pool',                 type: 'decimal'  },
      { name: 'is_updated_average_cost',     type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'sku_cost_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.SkuCost.create,
      read:    Omni.service.SkuCost.read,
      update:  Omni.service.SkuCost.update,
      destroy: Omni.service.SkuCost.destroy
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