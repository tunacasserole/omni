Ext.define('Omni.model.BinSku', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'bin_id' },
    { type: 'presence', field: 'sku_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'bin_sku_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'bin_display', type: 'string' },
    { name: 'bin_id', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'sku_alias_display', type: 'string' },
    { name: 'sku_alias_id', type: 'string' },
    { name: 'last_activity_date', type: 'date' },
    { name: 'being_received_units', type: 'float', defaultValue: 0 },
    { name: 'on_hand_units', type: 'float', defaultValue: 0 },
    { name: 'pack_type', type: 'string' },
    { name: 'due_in_units', type: 'float', defaultValue: 0 },
    { name: 'due_out_units', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'bin_sku_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.BinSku.create,
      read:     Omni.service.BinSku.read,
      update:   Omni.service.BinSku.update,
      destroy:  Omni.service.BinSku.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

