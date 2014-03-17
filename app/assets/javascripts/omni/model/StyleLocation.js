Ext.define('Omni.model.StyleLocation', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'style_location_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'style_display', type: 'string' },
    { name: 'style_id', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'is_authorized', type: 'boolean', defaultValue: false },
    { name: 'is_taxable', type: 'boolean', defaultValue: false },
    { name: 'is_special_order', type: 'boolean', defaultValue: false },
    { name: 'is_discontinued', type: 'boolean', defaultValue: false },
    { name: 'replenishment_method', type: 'string' },
    { name: 'replenishment_source', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'safety_stock_units', type: 'float', defaultValue: 0 },
    { name: 'safety_stock_days', type: 'float', defaultValue: 0 },
    { name: 'is_override_demand_exception', type: 'boolean', defaultValue: false },
    { name: 'smoothing_factor', type: 'float', defaultValue: 0 },
    { name: 'forecast_profile_display', type: 'string' },
    { name: 'forecast_profile_id', type: 'string' },
    { name: 'is_soq_override', type: 'boolean', defaultValue: false },
    { name: 'minimum_units', type: 'float', defaultValue: 0 },
    { name: 'maximum_units', type: 'float', defaultValue: 0 },
    { name: 'seasonal_index_display', type: 'string' },
    { name: 'seasonal_index_id', type: 'string' },
    { name: 'state', type: 'string' },        
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'style_location_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StyleLocation.create,
      read:     Omni.service.StyleLocation.read,
      update:   Omni.service.StyleLocation.update,
      destroy:  Omni.service.StyleLocation.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

