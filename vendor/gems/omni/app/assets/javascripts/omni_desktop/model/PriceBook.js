Ext.define('Omni.model.PriceBook', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'price_book_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'price_book_type', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'price_book_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.PriceBook.create,
      read:     Omni.service.PriceBook.read,
      update:   Omni.service.PriceBook.update,
      destroy:  Omni.service.PriceBook.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

