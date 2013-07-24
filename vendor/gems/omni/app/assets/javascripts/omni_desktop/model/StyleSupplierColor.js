Ext.define('Omni.model.StyleSupplierColor', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'style_supplier_color_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'style_supplier_display', type: 'string' },
    { name: 'style_supplier_id', type: 'string' },
    { name: 'style_color_display', type: 'string' },
    { name: 'style_color_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'style_supplier_color_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.StyleSupplierColor.create,
      read:     Omni.service.StyleSupplierColor.read,
      update:   Omni.service.StyleSupplierColor.update,
      destroy:  Omni.service.StyleSupplierColor.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

