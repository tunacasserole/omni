Ext.define('Omni.model.StockLedgerActivityLog', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'stock_ledger_activity_id' },
    { type: 'presence', field: 'activity_log_nbr' },
    { type: 'presence', field: 'model_meta_id' },
    { type: 'presence', field: 'attribute_meta_id' },
    { type: 'presence', field: 'row_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'stock_ledger_activity_log_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'stock_ledger_activity_display', type: 'string' },
    { name: 'stock_ledger_activity_id', type: 'string' },
    { name: 'activity_log_nbr', type: 'string' },
    { name: 'model_meta_display', type: 'string' },
    { name: 'model_meta_id', type: 'string' },
    { name: 'attribute_meta_display', type: 'string' },
    { name: 'attribute_meta_id', type: 'string' },
    { name: 'row_display', type: 'string' },
    { name: 'row_id', type: 'string' },
    { name: 'rule_action', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'stock_ledger_activity_log_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StockLedgerActivityLog.create,
      read:     Omni.service.StockLedgerActivityLog.read,
      update:   Omni.service.StockLedgerActivityLog.update,
      destroy:  Omni.service.StockLedgerActivityLog.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

