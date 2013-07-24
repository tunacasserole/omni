Ext.define('Omni.model.Log', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'log_id',                      type: 'string'   },
      { name: 'logable_id',                  type: 'string'   },
      { name: 'logable_type',                type: 'string'   },
      { name: 'log_nbr',                     type: 'string'   },
      { name: 'log_type',                    type: 'string'   },
      { name: 'log_title',                   type: 'string'   },
      { name: 'log_message',                 type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'log_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Log.create,
      read:    Omni.service.Log.read,
      update:  Omni.service.Log.update,
      destroy: Omni.service.Log.destroy
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