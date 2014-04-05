Ext.define('Omni.model.SkuAlias', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_alias_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'sku_alias', type: 'string' },
    { name: 'sku_alias_type', type: 'string' },
    { name: 'alias_source', type: 'string' },
    { name: 'is_primary', type: 'boolean', defaultValue: false },
    { name: 'pack_type', type: 'string' },
    { name: 'pack_size', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_alias_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuAlias.create,
      read:     Omni.service.SkuAlias.read,
      update:   Omni.service.SkuAlias.update,
      destroy:  Omni.service.SkuAlias.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

