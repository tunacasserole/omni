Ext.define('Omni.model.Region', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'company_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'region_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'region_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'company_display', type: 'string' },
    { name: 'company_id', type: 'string' },
    { name: 'user_display', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'region_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Region.create,
      read:     Omni.service.Region.read,
      update:   Omni.service.Region.update,
      destroy:  Omni.service.Region.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

