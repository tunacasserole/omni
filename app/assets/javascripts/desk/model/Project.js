Ext.define('Desk.model.Project', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'project_id',
      type       : 'string'
    },
    {
      name       : 'project_nbr',
      type       : 'string'
    },
    {
      name       : 'project_type',
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
      name       : 'estimated_days',
      type       : 'decimal'
    },
    {
      name       : 'actual_days',
      type       : 'decimal'
    }

  ],

  idProperty : 'project_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Project.create,
      read       : Desk.service.Project.read,
      update     : Desk.service.Project.update,
      destroy    : Desk.service.Project.destroy
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

}); // Ext.define('Desk.model.Project'
