Ext.define('Omni.model.Bom', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'bom_type' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'bom_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'bomable_type', type: 'string' },
    { name: 'bomable_id', type: 'string' },
    { name: 'bom_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'bom_type', type: 'string' },
    { name: 'version', type: 'float', defaultValue: 0 },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'is_primary_bom', type: 'boolean', defaultValue: false },
    { name: 'labor_hours', type: 'float', defaultValue: 0 },
    { name: 'machine_hours', type: 'float', defaultValue: 0 },
    { name: 'construction_hours', type: 'float', defaultValue: 0 },
    { name: 'is_enabled', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'bom_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Bom.create,
      read:     Omni.service.Bom.read,
      update:   Omni.service.Bom.update,
      destroy:  Omni.service.Bom.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

