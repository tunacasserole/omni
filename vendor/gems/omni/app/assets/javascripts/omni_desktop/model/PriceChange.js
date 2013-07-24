Ext.define('Omni.model.PriceChange', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'display', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false },
    { name: 'price_change_display', type: 'string' },
    { name: 'price_change_id', type: 'string' }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'price_change_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.PriceChange.create,
      read:     Omni.service.PriceChange.read,
      update:   Omni.service.PriceChange.update,
      destroy:  Omni.service.PriceChange.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

