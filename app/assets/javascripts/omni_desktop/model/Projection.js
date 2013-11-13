Ext.define('Omni.model.Projection', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'projection_id',
      type       : 'string'
    },
    {
      name       : 'forecast_profile_id',
      type       : 'string'
    },
    {
      name       : 'forecast_profile_display',
      type       : 'string'
    },
    {
      name       : 'department_id',
      type       : 'string'
    },
    {
      name       : 'department_display',
      type       : 'string'
    },
    {
      name       : 'projection_closer_id',
      type       : 'string'
    },
    {
      name       : 'projection_closer_display',
      type       : 'string'
    },
    {
      name       : 'projection_approver_id',
      type       : 'string'
    },
    {
      name       : 'projection_approver_display',
      type       : 'string'
    },
    {
      name       : 'projection_type',
      type       : 'string'
    },
    {
      name       : 'plan_year',
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
      name       : 'approval_3_date',
      type       : 'string'
    },
    {
      name       : 'approval_4_date',
      type       : 'string'
    },
    {
      name       : 'version',
      type       : 'string'
    },
    {
      name       : 'audit_updated_at',
      type       : 'string'
    },
    {
      name       : 'audit_created_at',
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
      name       : 'is_destroyed',
      type       : 'string'
    }

  ],

  idProperty : 'projection_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Projection.create,
      read       : Omni.service.Projection.read,
      update     : Omni.service.Projection.update,
      destroy    : Omni.service.Projection.destroy
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

}); // Ext.define('Omni.model.Projection'
