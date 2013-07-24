Ext.define('Omni.model.CostDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'cost_detail_id',              type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'cost_id',                     type: 'string'   },
      { name: 'cost_detail_name',            type: 'string'   },
      { name: 'cost_source',                 type: 'string'   },
      { name: 'cost_type',                   type: 'string'   },
      { name: 'cost_amount',                 type: 'decimal'  },
      { name: 'cost_percent',                type: 'decimal'  },
      { name: 'is_update_inventory_cost',    type: 'boolean'  },
      { name: 'is_update_invoice_cost',      type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'cost_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.CostDetail.create,
      read:    Omni.service.CostDetail.read,
      update:  Omni.service.CostDetail.update,
      destroy: Omni.service.CostDetail.destroy
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