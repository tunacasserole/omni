Ext.define('Omni.model.PeriodResult', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'sku_id' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'period_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'period_result_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'period_display', type: 'string' },
    { name: 'period_id', type: 'string' },
    { name: 'adjusted_cost', type: 'float', defaultValue: 0 },
    { name: 'adjusted_retail', type: 'float', defaultValue: 0 },
    { name: 'adjusted_units', type: 'float', defaultValue: 0 },
    { name: 'backorder_cost', type: 'float', defaultValue: 0 },
    { name: 'backorder_retail', type: 'float', defaultValue: 0 },
    { name: 'backorder_units', type: 'float', defaultValue: 0 },
    { name: 'clearance_sale_cost', type: 'float', defaultValue: 0 },
    { name: 'clearance_sale_retail', type: 'float', defaultValue: 0 },
    { name: 'clearance_sale_units', type: 'float', defaultValue: 0 },
    { name: 'consumed_cost', type: 'float', defaultValue: 0 },
    { name: 'consumed_retail', type: 'float', defaultValue: 0 },
    { name: 'consumed_units', type: 'float', defaultValue: 0 },
    { name: 'net_inventory_cost', type: 'float', defaultValue: 0 },
    { name: 'net_inventory_retail', type: 'float', defaultValue: 0 },
    { name: 'net_inventory_units', type: 'float', defaultValue: 0 },
    { name: 'net_sale_cost', type: 'float', defaultValue: 0 },
    { name: 'net_sale_retail', type: 'float', defaultValue: 0 },
    { name: 'net_sale_units', type: 'float', defaultValue: 0 },
    { name: 'produced_cost', type: 'float', defaultValue: 0 },
    { name: 'produced_retail', type: 'float', defaultValue: 0 },
    { name: 'produced_units', type: 'float', defaultValue: 0 },
    { name: 'promo_sale_cost', type: 'float', defaultValue: 0 },
    { name: 'promo_sale_retail', type: 'float', defaultValue: 0 },
    { name: 'promo_sale_units', type: 'float', defaultValue: 0 },
    { name: 'purchased_cost', type: 'float', defaultValue: 0 },
    { name: 'purchased_retail', type: 'float', defaultValue: 0 },
    { name: 'purchased_units', type: 'float', defaultValue: 0 },
    { name: 'received_cost', type: 'float', defaultValue: 0 },
    { name: 'received_retail', type: 'float', defaultValue: 0 },
    { name: 'received_units', type: 'float', defaultValue: 0 },
    { name: 'requested_cost', type: 'float', defaultValue: 0 },
    { name: 'requested_retail', type: 'float', defaultValue: 0 },
    { name: 'requested_units', type: 'float', defaultValue: 0 },
    { name: 'return_sale_cost', type: 'float', defaultValue: 0 },
    { name: 'return_sale_retail', type: 'float', defaultValue: 0 },
    { name: 'return_sale_units', type: 'float', defaultValue: 0 },
    { name: 'shipped_cost', type: 'float', defaultValue: 0 },
    { name: 'shipped_retail', type: 'float', defaultValue: 0 },
    { name: 'shipped_units', type: 'float', defaultValue: 0 },
    { name: 'work_in_process_cost', type: 'float', defaultValue: 0 },
    { name: 'work_in_process_retail', type: 'float', defaultValue: 0 },
    { name: 'work_in_process_units', type: 'float', defaultValue: 0 },
    { name: 'professional_discount_cost', type: 'float', defaultValue: 0 },
    { name: 'employee_discount_cost', type: 'float', defaultValue: 0 },
    { name: 'manager_discount_cost', type: 'float', defaultValue: 0 },
    { name: 'ending_inventory_cost', type: 'float', defaultValue: 0 },
    { name: 'ending_inventory_retail', type: 'float', defaultValue: 0 },
    { name: 'ending_inventory_units', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'period_result_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.PeriodResult.create,
      read:     Omni.service.PeriodResult.read,
      update:   Omni.service.PeriodResult.update,
      destroy:  Omni.service.PeriodResult.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

