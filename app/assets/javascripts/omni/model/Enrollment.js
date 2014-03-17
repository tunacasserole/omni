Ext.define('Omni.model.Enrollment', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'enrollment_id',
      type       : 'string'
    },
    {
      name       : 'account_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'school_year',
      type       : 'string'
    },
    {
      name       : 'grade_id',
      type       : 'string'
    },
    {
      name       : 'grade_display',
      type       : 'string'
    },
    {
      name       : 'gender',
      type       : 'string'
    },
    {
      name       : 'enrollment',
      type       : 'string'
    },
    {
      name       : 'school_year_start_date',
      type       : 'datetime'
    },
    {
      name       : 'school_year_end_date',
      type       : 'datetime'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'enrollment_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Enrollment.create,
      read       : Omni.service.Enrollment.read,
      update     : Omni.service.Enrollment.update,
      destroy    : Omni.service.Enrollment.destroy
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

}); // Ext.define('Omni.model.Enrollment'
