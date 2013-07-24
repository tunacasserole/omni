Ext.define('Omni.model.Rule', {
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
    { name: 'rule_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'ruleset_display', type: 'string' },
    { name: 'ruleset_id', type: 'string' },
    { name: 'rule_type', type: 'string' },
    { name: 'input_attribute', type: 'string' },
    { name: 'model_name', type: 'string' },
    { name: 'attribute_name', type: 'string' },
    { name: 'rule_action', type: 'string' },
    { name: 'is_active', type: 'boolean', defaultValue: false },
    { name: 'rule_seq', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'rule_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Rule.create,
      read:     Omni.service.Rule.read,
      update:   Omni.service.Rule.update,
      destroy:  Omni.service.Rule.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

