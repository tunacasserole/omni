Ext.define('Omni.model.SkuSubstitute', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_substitute_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'substitute_sku_display', type: 'string' },
    { name: 'substitute_sku_id', type: 'string' },
    { name: 'sku_substitute_type', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'priority', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_substitute_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuSubstitute.create,
      read:     Omni.service.SkuSubstitute.read,
      update:   Omni.service.SkuSubstitute.update,
      destroy:  Omni.service.SkuSubstitute.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

