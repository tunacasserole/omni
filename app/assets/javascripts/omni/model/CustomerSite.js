Ext.define('Omni.model.CustomerAccount', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'customer_id' },
    { type: 'presence', field: 'account_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'customer_account_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'customer_display', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'account_display', type: 'string' },
    { name: 'account_id', type: 'string' },
    { name: 'comment', type: 'string' },
    { name: 'is_contact', type: 'boolean', defaultValue: false },
    { name: 'is_teacher', type: 'boolean', defaultValue: false },
    { name: 'is_administrator', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'customer_account_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.CustomerAccount.create,
      read:     Omni.service.CustomerAccount.read,
      update:   Omni.service.CustomerAccount.update,
      destroy:  Omni.service.CustomerAccount.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

