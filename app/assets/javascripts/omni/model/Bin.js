Ext.define('Omni.model.Bin', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'area_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'bin_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'area_display', type: 'string' },
    { name: 'area_id', type: 'string' },
    { name: 'area_short_name', type: 'string' },
    { name: 'aisle', type: 'string' },
    { name: 'section', type: 'string' },
    { name: 'level', type: 'string' },
    { name: 'position', type: 'string' },
    { name: 'bin_nbr', type: 'string' },
    { name: 'bin_code', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'bin_type', type: 'string' },
    { name: 'last_activity_date', type: 'date' },
    { name: 'is_many_sku_per_bin', type: 'boolean', defaultValue: false },
    { name: 'pick_sequence', type: 'float', defaultValue: 0 },
    { name: 'zone', type: 'string' },
    { name: 'pick_zone', type: 'string' },
    { name: 'cube_capacity', type: 'float', defaultValue: 0 },
    { name: 'is_area', type: 'boolean', defaultValue: false },
    { name: 'is_count_cartons', type: 'boolean', defaultValue: false },
    { name: 'is_empty', type: 'boolean', defaultValue: false },
    { name: 'carton_count', type: 'float', defaultValue: 0 },
    { name: 'on_hand_cube', type: 'float', defaultValue: 0 },
    { name: 'due_in_cube', type: 'float', defaultValue: 0 },
    { name: 'due_out_cube', type: 'float', defaultValue: 0 },
    { name: 'is_request_label_print', type: 'boolean', defaultValue: false },
    { name: 'bin_label_type', type: 'string' },
    { name: 'is_enabled', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'bin_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Bin.create,
      read:     Omni.service.Bin.read,
      update:   Omni.service.Bin.update,
      destroy:  Omni.service.Bin.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

