Ext.define('Omni.model.StyleColor', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'style_color_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'style_display', type: 'string' },
    { name: 'style_id', type: 'string' },
    { name: 'color_display', type: 'string' },
    { name: 'color_id', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'initial_retail_price', type: 'float', defaultValue: 0 },
    { name: 'fabric_content', type: 'string' },
    { name: 'concatenated_name', type: 'string' },
    { name: 'state', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'style_color_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StyleColor.create,
      read:     Omni.service.StyleColor.read,
      update:   Omni.service.StyleColor.update,
      destroy:  Omni.service.StyleColor.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

