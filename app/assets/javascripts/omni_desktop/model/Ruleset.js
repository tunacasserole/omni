Ext.define('Omni.model.Ruleset', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'ruleset_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'ruleset_code', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'is_active', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'ruleset_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Ruleset.create,
      read:     Omni.service.Ruleset.read,
      update:   Omni.service.Ruleset.update,
      destroy:  Omni.service.Ruleset.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

