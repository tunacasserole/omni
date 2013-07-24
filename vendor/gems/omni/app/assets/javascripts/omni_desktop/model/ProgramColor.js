Ext.define('Omni.model.ProgramColor', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'program_style_id' },
    { type: 'presence', field: 'style_color_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'program_color_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'program_style_display', type: 'string' },
    { name: 'program_style_id', type: 'string' },
    { name: 'style_color_display', type: 'string' },
    { name: 'style_color_id', type: 'string' },
    { name: 'is_active', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false },
    { name: 'style_display', type: 'string' },
    { name: 'style_id', type: 'string' },
    { name: 'color_display', type: 'string' },
    { name: 'color_id', type: 'string' }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'program_color_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ProgramColor.create,
      read:     Omni.service.ProgramColor.read,
      update:   Omni.service.ProgramColor.update,
      destroy:  Omni.service.ProgramColor.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

