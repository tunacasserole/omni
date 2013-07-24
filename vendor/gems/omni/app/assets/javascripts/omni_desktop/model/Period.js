Ext.define('Omni.model.Period', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'start_date' },
    { type: 'presence', field: 'end_date' },
    { type: 'presence', field: 'year_number' },
    { type: 'presence', field: 'period_number' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'period_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'start_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'year_number', type: 'string' },
    { name: 'period_number', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'period_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Period.create,
      read:     Omni.service.Period.read,
      update:   Omni.service.Period.update,
      destroy:  Omni.service.Period.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

