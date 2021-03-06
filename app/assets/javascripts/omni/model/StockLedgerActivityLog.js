Ext.define('Omni.model.StockLedgerActivityLog', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'stock_ledger_activity_log_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'stock_ledger_activity_display', type: 'string' },
    { name: 'stock_ledger_activity_id', type: 'string' },
    { name: 'stock_ledger_activity_log_nbr', type: 'string' },
    { name: 'model_name', type: 'string' },
    { name: 'attribute_name', type: 'string' },
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

