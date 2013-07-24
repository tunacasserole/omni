Ext.define('Omni.model.ProductType', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'product_type_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'is_fabric', type: 'boolean', defaultValue: false },
    { name: 'is_trim', type: 'boolean', defaultValue: false },
    { name: 'is_converted', type: 'boolean', defaultValue: false },
    { name: 'is_labor', type: 'boolean', defaultValue: false },
    { name: 'is_shipping', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'product_type_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ProductType.create,
      read:     Omni.service.ProductType.read,
      update:   Omni.service.ProductType.update,
      destroy:  Omni.service.ProductType.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

