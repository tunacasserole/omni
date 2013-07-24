Ext.define('Omni.model.TillAudit', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'till_audit_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'till_display', type: 'string' },
    { name: 'till_id', type: 'string' },
    { name: 'audit_date', type: 'date' },
    { name: 'tender_display', type: 'string' },
    { name: 'tender_id', type: 'string' },
    { name: 'system_count', type: 'float', defaultValue: 0 },
    { name: 'system_amount', type: 'float', defaultValue: 0 },
    { name: 'audit_count', type: 'float', defaultValue: 0 },
    { name: 'audit_amount', type: 'float', defaultValue: 0 },
    { name: 'gl_interface_date', type: 'date' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'till_audit_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.TillAudit.create,
      read:     Omni.service.TillAudit.read,
      update:   Omni.service.TillAudit.update,
      destroy:  Omni.service.TillAudit.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

