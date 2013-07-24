Ext.define('Omni.model.Container', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'container_nbr' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'container_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'container_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'container_type', type: 'string' },
    { name: 'parent_container_display', type: 'string' },
    { name: 'parent_container_id', type: 'string' },
    { name: 'is_labeled', type: 'boolean', defaultValue: false },
    { name: 'barcode_nbr', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'state', type: 'string' },
    { name: 'create_date', type: 'date' },
    { name: 'last_update_date', type: 'date' },
    { name: 'is_located', type: 'boolean', defaultValue: false },
    { name: 'is_moving', type: 'boolean', defaultValue: false },
    { name: 'is_in_transit', type: 'boolean', defaultValue: false },
    { name: 'bin_display', type: 'string' },
    { name: 'bin_id', type: 'string' },
    { name: 'is_container_lost', type: 'boolean', defaultValue: false },
    { name: 'last_verify_date', type: 'date' },
    { name: 'capacity', type: 'float', defaultValue: 0 },
    { name: 'capacity_weight', type: 'float', defaultValue: 0 },
    { name: 'inside_length', type: 'float', defaultValue: 0 },
    { name: 'inside_height', type: 'float', defaultValue: 0 },
    { name: 'inside_width', type: 'float', defaultValue: 0 },
    { name: 'is_outside_dimensions', type: 'boolean', defaultValue: false },
    { name: 'outside_length', type: 'float', defaultValue: 0 },
    { name: 'outside_height', type: 'float', defaultValue: 0 },
    { name: 'outside_width', type: 'float', defaultValue: 0 },
    { name: 'tare_weight', type: 'float', defaultValue: 0 },
    { name: 'fill_percent', type: 'float', defaultValue: 0 },
    { name: 'carton_count', type: 'float', defaultValue: 0 },
    { name: 'actual_weight', type: 'float', defaultValue: 0 },
    { name: 'actual_cube', type: 'float', defaultValue: 0 },
    { name: 'filled_percent', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'container_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Container.create,
      read:     Omni.service.Container.read,
      update:   Omni.service.Container.update,
      destroy:  Omni.service.Container.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

