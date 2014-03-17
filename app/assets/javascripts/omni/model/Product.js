Ext.define('Omni.model.Product', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display',                     type: 'string'   },
      { name: 'product_nbr',                 type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'category_id',                 type: 'string'   },
      { name: 'category_display',                 type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'product_id',                  type: 'string'   }
    ],

  idProperty: 'product_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Product.create,
      read:    Omni.service.Product.read,
      update:  Omni.service.Product.update,
      destroy: Omni.service.Product.destroy
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