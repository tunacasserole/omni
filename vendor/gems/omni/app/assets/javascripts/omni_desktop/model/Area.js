Ext.define('Omni.model.Area', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'area_nbr' },
    { type: 'presence', field: 'short_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'area_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'area_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'is_receiving', type: 'boolean', defaultValue: false },
    { name: 'is_picking', type: 'boolean', defaultValue: false },
    { name: 'is_reserve', type: 'boolean', defaultValue: false },
    { name: 'is_putaway', type: 'boolean', defaultValue: false },
    { name: 'is_supplier_return', type: 'boolean', defaultValue: false },
    { name: 'is_processing', type: 'boolean', defaultValue: false },
    { name: 'is_shipping', type: 'boolean', defaultValue: false },
    { name: 'is_put_location', type: 'boolean', defaultValue: false },
    { name: 'is_special_handling', type: 'boolean', defaultValue: false },
    { name: 'is_quality_control', type: 'boolean', defaultValue: false },
    { name: 'is_quick_case', type: 'boolean', defaultValue: false },
    { name: 'is_many_sku_per_bin', type: 'boolean', defaultValue: false },
    { name: 'default_cube_capacity', type: 'float', defaultValue: 0 },
    { name: 'is_request_cube_calculation', type: 'boolean', defaultValue: false },
    { name: 'last_utilization_calc_date', type: 'date' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'area_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Area.create,
      read:     Omni.service.Area.read,
      update:   Omni.service.Area.update,
      destroy:  Omni.service.Area.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

