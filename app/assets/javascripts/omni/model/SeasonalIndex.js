Ext.define('Omni.model.SeasonalIndex', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'seasonal_index_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'seasonal_index_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'seasonal_index_name', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'seasonal_index_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SeasonalIndex.create,
      read:     Omni.service.SeasonalIndex.read,
      update:   Omni.service.SeasonalIndex.update,
      destroy:  Omni.service.SeasonalIndex.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

