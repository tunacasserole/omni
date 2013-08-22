Ext.define('Omni.model.Rater', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'rater_id',                    type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'points',                      type: 'integer'  },
      { name: 'creator_id',                  type: 'string'   },
      { name: 'target_release',              type: 'date'     },
      { name: 'actual_release',              type: 'date'     },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'rater_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Rater.create,
      read:    Omni.service.Rater.read,
      update:  Omni.service.Rater.update,
      destroy: Omni.service.Rater.destroy
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