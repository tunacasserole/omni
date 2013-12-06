Ext.define('Omni.model.StockLedgerActivity', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    // { type: 'presence', field: 'display' },
    // { type: 'presence', field: 'stockable_type' },
    // { type: 'presence', field: 'stockable_id' },
    // { type: 'presence', field: 'ruleset_id' },
    // { type: 'presence', field: 'sku_id' },
    // { type: 'presence', field: 'location_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'stock_ledger_activity_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'stockable_type', type: 'string' },
    { name: 'stockable_id', type: 'string' },
    { name: 'ruleset_display', type: 'string' },
    { name: 'ruleset_id', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'customer_display', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'units', type: 'float', defaultValue: 0 },
    { name: 'cost', type: 'float', defaultValue: 0 },
    { name: 'retail', type: 'float', defaultValue: 0 },
    { name: 'create_date', type: 'date' },
    { name: 'activity_date', type: 'datetime' },
    { name: 'posted_date', type: 'date' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'stock_ledger_activity_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StockLedgerActivity.create,
      read:     Omni.service.StockLedgerActivity.read,
      update:   Omni.service.StockLedgerActivity.update,
      destroy:  Omni.service.StockLedgerActivity.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

