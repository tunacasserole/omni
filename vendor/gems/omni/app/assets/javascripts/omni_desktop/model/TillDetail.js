Ext.define('Omni.model.TillDetail', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'till_detail_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'till_display', type: 'string' },
    { name: 'till_id', type: 'string' },
    { name: 'tender_display', type: 'string' },
    { name: 'tender_id', type: 'string' },
    { name: 'tender_count', type: 'float', defaultValue: 0 },
    { name: 'tender_amount', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'till_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.TillDetail.create,
      read:     Omni.service.TillDetail.read,
      update:   Omni.service.TillDetail.update,
      destroy:  Omni.service.TillDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

