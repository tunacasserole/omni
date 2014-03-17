Ext.define('Omni.model.AccountGrade', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'account_grade_id',
      type       : 'string'
    },
    {
      name       : 'account_id',
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
      name       : 'grade_name',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'grade_order',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'account_grade_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.AccountGrade.create,
      read       : Omni.service.AccountGrade.read,
      update     : Omni.service.AccountGrade.update,
      destroy    : Omni.service.AccountGrade.destroy
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

}); // Ext.define('Omni.model.AccountGrade'
