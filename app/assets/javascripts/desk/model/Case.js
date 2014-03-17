Ext.define('Desk.model.Case', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'case_id',
      type       : 'string'
    },
    {
      name       : 'requestor_id',
      type       : 'string'
    },
    {
      name       : 'requestor_display',
      type       : 'string'
    },
    {
      name       : 'project_id',
      type       : 'string'
    },
    {
      name       : 'project_display',
      type       : 'string'
    },
    {
      name       : 'case_nbr',
      type       : 'string'
    },
    {
      name       : 'case_type',
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
      name       : 'tags',
      type       : 'string'
    },
    {
      name       : 'estimated_hours',
      type       : 'decimal'
    },
    {
      name       : 'actual_hours',
      type       : 'decimal'
    },
    {
      name       : 'is_billable',
      type       : 'boolean'
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

  idProperty : 'case_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Case.create,
      read       : Desk.service.Case.read,
      update     : Desk.service.Case.update,
      destroy    : Desk.service.Case.destroy
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

}); // Ext.define('Desk.model.Case'
