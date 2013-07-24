Ext.define('Omni.model.LocationUser', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'user_id' },
    { type: 'presence', field: 'location_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'location_user_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'user_display', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'is_manager', type: 'boolean', defaultValue: false },
    { name: 'is_cashier', type: 'boolean', defaultValue: false },
    { name: 'is_sales', type: 'boolean', defaultValue: false },
    { name: 'is_back_office', type: 'boolean', defaultValue: false },
    { name: 'short_password', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'location_user_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.LocationUser.create,
      read:     Omni.service.LocationUser.read,
      update:   Omni.service.LocationUser.update,
      destroy:  Omni.service.LocationUser.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

