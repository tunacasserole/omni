Ext.define('Omni.model.Project', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'project_id',                  type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'release_date',                type: 'date'     },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'project_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Project.create,
      read:    Omni.service.Project.read,
      update:  Omni.service.Project.update,
      destroy: Omni.service.Project.destroy
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