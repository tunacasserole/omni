Ext.define('Omni.model.Company', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'line_1' },
    { type: 'presence', field: 'city' },
    { type: 'presence', field: 'zip' },
    { type: 'presence', field: 'phone' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'company_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'company_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'company_url', type: 'string' },
    { name: 'line_1', type: 'string' },
    { name: 'line_2', type: 'string' },
    { name: 'line_3', type: 'string' },
    { name: 'line_4', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'state_code', type: 'string' },
    { name: 'zip', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'latitude', type: 'string' },
    { name: 'longitude', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'fax', type: 'string' },
    { name: 'beta_factor', type: 'float', defaultValue: 0 },
    { name: 'demand_filter', type: 'float', defaultValue: 0 },
    { name: 'tracking_signal', type: 'float', defaultValue: 0 },
    { name: 'purchase_order_header_cost', type: 'float', defaultValue: 0 },
    { name: 'carrying_cost_percent', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'company_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Company.create,
      read:     Omni.service.Company.read,
      update:   Omni.service.Company.update,
      destroy:  Omni.service.Company.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

