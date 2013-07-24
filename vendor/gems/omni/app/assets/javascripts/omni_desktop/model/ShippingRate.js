Ext.define('Omni.model.ShippingRate', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'supplier_id' },
    { type: 'presence', field: 'shipping_rate_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'shipping_rate_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'shipping_rate_name', type: 'string' },
    { name: 'shipping_charge', type: 'float', defaultValue: 0 },
    { name: 'minimum_sale', type: 'float', defaultValue: 0 },
    { name: 'maximum_sale', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'shipping_rate_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ShippingRate.create,
      read:     Omni.service.ShippingRate.read,
      update:   Omni.service.ShippingRate.update,
      destroy:  Omni.service.ShippingRate.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

