Ext.define('Omni.model.ProgramStyle', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'program_product_id' },
    { type: 'presence', field: 'style_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'program_style_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'program_product_display', type: 'string' },
    { name: 'program_product_id', type: 'string' },
    { name: 'style_display', type: 'string' },
    { name: 'style_id', type: 'string' },
    { name: 'retail_price', type: 'float', defaultValue: 0 },
    { name: 'price_units', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'program_style_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ProgramStyle.create,
      read:     Omni.service.ProgramStyle.read,
      update:   Omni.service.ProgramStyle.update,
      destroy:  Omni.service.ProgramStyle.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

