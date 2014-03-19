Ext.define('Omni.model.Grade', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'grade_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'grade_name',
      type       : 'string'
    },
    {
      name       : 'short_name',
      type       : 'string'
    },
    {
      name       : 'grade_order',
      type       : 'integer'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'grade_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.Grade.create,
      read       : Omni.service.Grade.read,
      update     : Omni.service.Grade.update,
      destroy    : Omni.service.Grade.destroy
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

}); // Ext.define('Omni.model.Grade'