Ext.define('Desk.model.Approval', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'approval_id',
      type       : 'string'
    },
    {
      name       : 'approver_id',
      type       : 'string'
    },
    {
      name       : 'approver_display',
      type       : 'string'
    },
    {
      name       : 'approvable_id',
      type       : 'string'
    },
    {
      name       : 'approvable_type',
      type       : 'string'
    },
    {
      name       : 'approval_nbr',
      type       : 'string'
    },
    {
      name       : 'approval_type',
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
      name       : 'approval_date',
      type       : 'date'
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

  idProperty : 'approval_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Approval.create,
      read       : Desk.service.Approval.read,
      update     : Desk.service.Approval.update,
      destroy    : Desk.service.Approval.destroy
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

}); // Ext.define('Desk.model.Approval'
