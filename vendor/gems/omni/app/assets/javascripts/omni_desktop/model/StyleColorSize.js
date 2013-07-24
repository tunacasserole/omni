Ext.define('Omni.model.StyleColorSize', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'style_color_size_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'style_color_display', type: 'string' },
    { name: 'style_color_id', type: 'string' },
    { name: 'size_display', type: 'string' },
    { name: 'size_id', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'sku_name', type: 'string' },
    { name: 'pos_name', type: 'string' },
    { name: 'is_special_order', type: 'boolean', defaultValue: false },
    { name: 'is_not_available', type: 'boolean', defaultValue: false },
    { name: 'fabric_bom_adjust_percent', type: 'float', defaultValue: 0 },
    { name: 'state', type: 'string' },    
    { name: 'is_destroyed', type: 'boolean', defaultValue: false },
    { name: 'style_id', type: 'string' },
    { name: 'color_id', type: 'string' }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'style_color_size_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StyleColorSize.create,
      read:     Omni.service.StyleColorSize.read,
      update:   Omni.service.StyleColorSize.update,
      destroy:  Omni.service.StyleColorSize.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

