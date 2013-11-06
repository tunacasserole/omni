Ext.define('Omni.model.ProjectionLocation', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'projection_location_id',
      type       : 'string'
    },
    {
      name       : 'projection_id',
      type       : 'string'
    },
    {
      name       : 'location_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'approval_date',
      type       : 'datetime'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'projection_location_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.ProjectionLocation.create,
      read       : Omni.service.ProjectionLocation.read,
      update     : Omni.service.ProjectionLocation.update,
      destroy    : Omni.service.ProjectionLocation.destroy
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

}); // Ext.define('Omni.model.ProjectionLocation'