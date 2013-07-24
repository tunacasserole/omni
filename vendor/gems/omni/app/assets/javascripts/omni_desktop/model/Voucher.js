Ext.define('Omni.model.Voucher', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'customer_id' },
    { type: 'presence', field: 'voucher_nbr' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'voucher_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'customer_display', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'voucher_nbr', type: 'string' },
    { name: 'voucher_type', type: 'string' },
    { name: 'initial_balance', type: 'float', defaultValue: 0 },
    { name: 'current_balance', type: 'float', defaultValue: 0 },
    { name: 'issue_date', type: 'date' },
    { name: 'expiration_date', type: 'date' },
    { name: 'state', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'voucher_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Voucher.create,
      read:     Omni.service.Voucher.read,
      update:   Omni.service.Voucher.update,
      destroy:  Omni.service.Voucher.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

