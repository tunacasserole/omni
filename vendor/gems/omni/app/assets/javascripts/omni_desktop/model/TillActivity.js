Ext.define('Omni.model.TillActivity', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'till_activity_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'till_display', type: 'string' },
    { name: 'till_id', type: 'string' },
    { name: 'till_activity_nbr', type: 'string' },
    { name: 'till_activity_date', type: 'date' },
    { name: 'till_activity_reason', type: 'string' },
    { name: 'tender_display', type: 'string' },
    { name: 'tender_id', type: 'string' },
    { name: 'activity_count', type: 'float', defaultValue: 0 },
    { name: 'activity_amount', type: 'float', defaultValue: 0 },
    { name: 'payment_display', type: 'string' },
    { name: 'payment_id', type: 'string' },
    { name: 'user_display', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'till_activity_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.TillActivity.create,
      read:     Omni.service.TillActivity.read,
      update:   Omni.service.TillActivity.update,
      destroy:  Omni.service.TillActivity.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

