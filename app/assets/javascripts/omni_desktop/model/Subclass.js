Ext.define('Omni.model.Subclass', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'classification_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'subclass_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'subclass_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'department_display', type: 'string' },
    { name: 'classification_display', type: 'string' },
    { name: 'classification_id', type: 'string' },
    { name: 'markup_percent_high_limit', type: 'float', defaultValue: 0 },
    { name: 'markup_percent_low_limit', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'subclass_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Subclass.create,
      read:     Omni.service.Subclass.read,
      update:   Omni.service.Subclass.update,
      destroy:  Omni.service.Subclass.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

