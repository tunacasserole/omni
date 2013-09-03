Ext.define('Omni.model.SkuPrice', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_price_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'price_book_display', type: 'string' },
    { name: 'price_book_id', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'retail_price', type: 'float', defaultValue: 0 },
    { name: 'price_units', type: 'float', defaultValue: 0 },
    { name: 'sales_category', type: 'string' },
    { name: 'price_change_display', type: 'string' },
    { name: 'price_change_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_price_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuPrice.create,
      read:     Omni.service.SkuPrice.read,
      update:   Omni.service.SkuPrice.update,
      destroy:  Omni.service.SkuPrice.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

