Ext.define('Omni.model.Product', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'category_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'product_id',                           type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'product_nbr',                          type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'category_display',                     type: 'string'      },
    { name: 'category_id',                          type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'product_id',

  proxy: {
    type: 'direct',
    api: {
      // create:   Mark.service.Product.create,
      // read:     Mark.service.Product.read,
      // update:   Mark.service.Product.update,
      // destroy:  Mark.service.Product.destroy
      // create:   Omni.service.Product.create,
      // read:     Omni.service.Product.read,
      // update:   Omni.service.Product.update,
      // destroy:  Omni.service.Product.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

