Ext.define('Omni.model.Category', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'category_id',                 type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'category_code',               type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'category_type',               type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'category_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Category.create,
      read:    Omni.service.Category.read,
      update:  Omni.service.Category.update,
      destroy: Omni.service.Category.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});