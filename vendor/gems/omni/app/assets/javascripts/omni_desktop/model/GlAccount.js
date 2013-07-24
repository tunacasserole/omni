Ext.define('Omni.model.GlAccount', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'gl_main_account' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'gl_account_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'gl_main_account', type: 'string' },
    { name: 'gl_sub_account', type: 'string' },
    { name: 'is_location_fill', type: 'boolean', defaultValue: false },
    { name: 'gl_account_type', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'gl_account_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.GlAccount.create,
      read:     Omni.service.GlAccount.read,
      update:   Omni.service.GlAccount.update,
      destroy:  Omni.service.GlAccount.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

