Ext.define('Desk.model.Checklist', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'checklist_id',
      type       : 'string'
    },
    {
      name       : 'checklist_nbr',
      type       : 'string'
    },
    {
      name       : 'checklist_type',
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
    }

  ],

  idProperty : 'checklist_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Checklist.create,
      read       : Desk.service.Checklist.read,
      update     : Desk.service.Checklist.update,
      destroy    : Desk.service.Checklist.destroy
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

}); // Ext.define('Desk.model.Checklist'