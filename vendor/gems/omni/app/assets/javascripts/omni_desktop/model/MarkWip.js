Ext.define('Omni.model.MarkWip', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'outlet_nbr',                  type: 'integer'  },
      { name: 'stock_nbr',                   type: 'string'   },
      { name: 'size',                        type: 'string'   },
      { name: 'cut_wip',                     type: 'integer'  },
      { name: 'plant_wip',                   type: 'integer'  },
      { name: 'cont_wip',                    type: 'integer'  },
      { name: 'status_id',                   type: 'integer'  }
    ],

  idProperty: 'stock_nbr',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.MarkWip.create,
      read:    Omni.service.MarkWip.read,
      update:  Omni.service.MarkWip.update,
      destroy: Omni.service.MarkWip.destroy
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