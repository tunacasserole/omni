Ext.define('Omni.model.Cost', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'cost_id',                     type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'first_cost',                  type: 'decimal'  },
      { name: 'last_cost',                   type: 'decimal'  },
      { name: 'average_cost',                type: 'decimal'  },
      { name: 'on_hand_units',               type: 'decimal'  },
      { name: 'cost_pool',                   type: 'decimal'  },
      { name: 'retail_pool',                 type: 'decimal'  },
      { name: 'is_updated_average_cost',     type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'cost_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Cost.create,
      read:    Omni.service.Cost.read,
      update:  Omni.service.Cost.update,
      destroy: Omni.service.Cost.destroy
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