Ext.define('Omni.model.Issue', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'issue_id',                    type: 'string'   },
      { name: 'issue_nbr',                   type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'severity',                    type: 'string'   },
      { name: 'assignee_id',                 type: 'string'   },
      { name: 'creator_id',                  type: 'string'   },
      { name: 'assignee_display',                 type: 'string'   },
      { name: 'creator_display',                  type: 'string'   },            
      { name: 'issue_type',                  type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'issue_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Issue.create,
      read:    Omni.service.Issue.read,
      update:  Omni.service.Issue.update,
      destroy: Omni.service.Issue.destroy
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