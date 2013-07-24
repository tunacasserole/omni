Ext.define('Omni.model.SkuPromoPrice', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_promo_price_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'price_book_display', type: 'string' },
    { name: 'price_book_id', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'regular_units', type: 'float', defaultValue: 0 },
    { name: 'promo_units', type: 'float', defaultValue: 0 },
    { name: 'promo_percent', type: 'float', defaultValue: 0 },
    { name: 'promo_amount', type: 'float', defaultValue: 0 },
    { name: 'promo_price', type: 'float', defaultValue: 0 },
    { name: 'maximum_promo_units', type: 'float', defaultValue: 0 },
    { name: 'sales_category', type: 'string' },
    { name: 'promotion_display', type: 'string' },
    { name: 'promotion_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_promo_price_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuPromoPrice.create,
      read:     Omni.service.SkuPromoPrice.read,
      update:   Omni.service.SkuPromoPrice.update,
      destroy:  Omni.service.SkuPromoPrice.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

