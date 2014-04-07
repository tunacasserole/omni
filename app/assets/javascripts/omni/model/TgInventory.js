Ext.define('Omni.model.TgInventory', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'ITEM',
      type       : 'integer'
    },
    {
      name       : 'OH_60',
      type       : 'integer'
    },
    {
      name       : 'OH_61',
      type       : 'integer'
    },
    {
      name       : 'OH_62',
      type       : 'integer'
    },
    {
      name       : 'OH_63',
      type       : 'integer'
    },
    {
      name       : 'OH_64',
      type       : 'integer'
    },
    {
      name       : 'OH_65',
      type       : 'integer'
    },
    {
      name       : 'OH_66',
      type       : 'integer'
    },
    {
      name       : 'OO_60',
      type       : 'integer'
    },
    {
      name       : 'OO_61',
      type       : 'integer'
    },
    {
      name       : 'OO_62',
      type       : 'integer'
    },
    {
      name       : 'OO_63',
      type       : 'integer'
    },
    {
      name       : 'OO_64',
      type       : 'integer'
    },
    {
      name       : 'OO_65',
      type       : 'integer'
    },
    {
      name       : 'OO_66',
      type       : 'integer'
    },
    {
      name       : 'SOLD_60',
      type       : 'integer'
    },
    {
      name       : 'SOLD_61',
      type       : 'integer'
    },
    {
      name       : 'SOLD_62',
      type       : 'integer'
    },
    {
      name       : 'SOLD_63',
      type       : 'integer'
    },
    {
      name       : 'SOLD_64',
      type       : 'integer'
    },
    {
      name       : 'SOLD_65',
      type       : 'integer'
    },
    {
      name       : 'SOLD_66',
      type       : 'integer'
    },
    {
      name       : 'PROJ_60',
      type       : 'integer'
    },
    {
      name       : 'PROJ_61',
      type       : 'integer'
    },
    {
      name       : 'PROJ_62',
      type       : 'integer'
    },
    {
      name       : 'PROJ_63',
      type       : 'integer'
    },
    {
      name       : 'PROJ_64',
      type       : 'integer'
    },
    {
      name       : 'PROJ_65',
      type       : 'integer'
    },
    {
      name       : 'PROJ_66',
      type       : 'integer'
    },
    {
      name       : 'value',
      type       : 'integer'
    }

  ],

  idProperty : 'ITEM',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.TgInventory.create,
      read       : Omni.service.TgInventory.read,
      update     : Omni.service.TgInventory.update,
      destroy    : Omni.service.TgInventory.destroy
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

}); // Ext.define('Omni.model.TgInventory'