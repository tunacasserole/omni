Ext.define('Desk.model.Feature', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'feature_id',
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
      name       : 'feature_nbr',
      type       : 'string'
    },
    {
      name       : 'feature_type',
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
      name       : 'release_date',
      type       : 'date'
    },
    {
      name       : 'estimated_hours',
      type       : 'decimal'
    },
    {
      name       : 'actual_hours',
      type       : 'decimal'
    }

  ],

  idProperty : 'feature_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Feature.create,
      read       : Desk.service.Feature.read,
      update     : Desk.service.Feature.update,
      destroy    : Desk.service.Feature.destroy
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

}); // Ext.define('Desk.model.Feature'
