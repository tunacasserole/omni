Ext.define('Desk.model.Case', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'case_id',
      type       : 'string'
    },
    {
      name       : 'case_nbr',
      type       : 'string'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    // {
    //   name       : 'agent_id',
    //   type       : 'string'
    // },
    {
      name       : 'state',
      type       : 'string',
      defaultValue: 'new'
    },
    {
      name       : 'case_type',
      type       : 'string',
    },
    {
      name       : 'summary',
      type       : 'string'
    },
    {
      name       : 'tags',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
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
