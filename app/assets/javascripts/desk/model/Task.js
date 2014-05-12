Ext.define('Desk.model.Task', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'task_id',
      type       : 'string'
    },
    {
      name       : 'taskable_id',
      type       : 'string'
    },
    {
      name       : 'taskable_type',
      type       : 'string'
    },
    {
      name       : 'checklist_id',
      type       : 'string'
    },
    {
      name       : 'task_nbr',
      type       : 'string'
    },
    {
      name       : 'task_type',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'task_due',
      type       : 'date'
    },
    {
      name       : 'task_start',
      type       : 'date'
    },
    {
      name       : 'task_end',
      type       : 'date'
    },
    {
      name       : 'owner_id',
      type       : 'string'
    },
    {
      name       : 'audit_created_by',
      type       : 'string'
    },
    {
      name       : 'audit_updated_by',
      type       : 'string'
    },
    {
      name       : 'audit_created_at',
      type       : 'datetime'
    },
    {
      name       : 'audit_updated_at',
      type       : 'datetime'
    }

  ],

  idProperty : 'task_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Task.create,
      read       : Desk.service.Task.read,
      update     : Desk.service.Task.update,
      destroy    : Desk.service.Task.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Desk.model.Task'
