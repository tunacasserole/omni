Ext.define('Omni.model.Task', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'task_id',                    type: 'string'   },
      { name: 'project_id',                  type: 'string'   },
      { name: 'task_nbr',                   type: 'string'   },
      { name: 'task_type',                  type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'importance',                  type: 'string'   },
      { name: 'points',                      type: 'integer'  },
      { name: 'assignee_id',                 type: 'string'   },
      { name: 'creator_id',                  type: 'string'   },
      { name: 'target_release',              type: 'date'     },
      { name: 'actual_release',              type: 'date'     },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'task_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Task.create,
      read:    Omni.service.Task.read,
      update:  Omni.service.Task.update,
      destroy: Omni.service.Task.destroy
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