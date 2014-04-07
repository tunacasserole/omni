Ext.define('Omni.model.MarkInventory', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'id',
      type       : 'integer'
    },
    {
      name       : 'outlet_nbr',
      type       : 'integer'
    },
    {
      name       : 'stock_nbr',
      type       : 'integer'
    },
    {
      name       : 'size',
      type       : 'string'
    },
    {
      name       : 'qoh',
      type       : 'integer'
    },
    {
      name       : 'drop_ship',
      type       : 'integer'
    }

  ],

  idProperty : 'id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.MarkInventory.create,
      read       : Omni.service.MarkInventory.read,
      update     : Omni.service.MarkInventory.update,
      destroy    : Omni.service.MarkInventory.destroy
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

}); // Ext.define('Omni.model.MarkInventory'