Ext.define('Omni.model.Label', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'label_type' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'label_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'label_type', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'label_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Label.create,
      read:     Omni.service.Label.read,
      update:   Omni.service.Label.update,
      destroy:  Omni.service.Label.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

