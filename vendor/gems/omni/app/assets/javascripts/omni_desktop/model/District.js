Ext.define('Omni.model.District', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'region_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'district_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'district_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'region_display', type: 'string' },
    { name: 'region_id', type: 'string' },
    { name: 'user_display', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'district_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.District.create,
      read:     Omni.service.District.read,
      update:   Omni.service.District.update,
      destroy:  Omni.service.District.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

