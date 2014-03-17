Ext.define('Omni.model.SizeGroup', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'concatenated_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'size_group_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'size_group_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'concatenated_name', type: 'string' },
    { name: 'is_enabled', type: 'boolean',    defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'size_group_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SizeGroup.create,
      read:     Omni.service.SizeGroup.read,
      update:   Omni.service.SizeGroup.update,
      destroy:  Omni.service.SizeGroup.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

