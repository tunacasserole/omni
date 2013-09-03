Ext.define('Omni.model.Till', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'till_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'till_nbr', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'till_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Till.create,
      read:     Omni.service.Till.read,
      update:   Omni.service.Till.update,
      destroy:  Omni.service.Till.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

