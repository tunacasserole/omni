Ext.define('Omni.model.AdjustmentReason', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'ruleset_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'adjustment_reason_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'ruleset_display', type: 'string' },
    { name: 'ruleset_id', type: 'string' },
    { name: 'is_allowed_cost_entry', type: 'boolean', defaultValue: false },
    { name: 'is_cost_adjustment', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'adjustment_reason_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.AdjustmentReason.create,
      read:     Omni.service.AdjustmentReason.read,
      update:   Omni.service.AdjustmentReason.update,
      destroy:  Omni.service.AdjustmentReason.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

