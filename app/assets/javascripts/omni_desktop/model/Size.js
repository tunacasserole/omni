Ext.define('Omni.model.Size', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'size_type' },
    { type: 'presence', field: 'concatenated_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'size_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'size_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'size_type', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'concatenated_name', type: 'string' },
    { name: 'dimension_1', type: 'string' },
    { name: 'dimension_2', type: 'string' },
    { name: 'is_enabled', type: 'boolean',    defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'size_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Size.create,
      read:     Omni.service.Size.read,
      update:   Omni.service.Size.update,
      destroy:  Omni.service.Size.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

