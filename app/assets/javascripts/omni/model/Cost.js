Ext.define('Omni.model.Cost', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'cost_id',                     type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'short_name',                  type: 'string'   },
      { name: 'description',                 type: 'string'   },
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