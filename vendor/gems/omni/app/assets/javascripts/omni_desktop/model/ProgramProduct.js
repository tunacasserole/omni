Ext.define('Omni.model.ProgramProduct', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'program_id' },
    { type: 'presence', field: 'product_id' },
    { type: 'presence', field: 'from_grade_id' },
    { type: 'presence', field: 'thru_grade_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'program_product_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'program_display', type: 'string' },
    { name: 'program_id', type: 'string' },
    { name: 'product_display', type: 'string' },
    { name: 'product_id', type: 'string' },
    { name: 'from_grade_display', type: 'string' },
    { name: 'from_grade_id', type: 'string' },
    { name: 'thru_grade_display', type: 'string' },
    { name: 'thru_grade_id', type: 'string' },
    { name: 'uniform_source', type: 'string' },
    { name: 'is_required_male', type: 'boolean', defaultValue: false },
    { name: 'is_required_female', type: 'boolean', defaultValue: false },
    { name: 'is_optional_male', type: 'boolean', defaultValue: false },
    { name: 'is_optional_female', type: 'boolean', defaultValue: false },
    { name: 'is_includes_logo', type: 'boolean', defaultValue: false },
    { name: 'discount_percent', type: 'float', defaultValue: 0 },
    { name: 'is_active', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false },
    { name: 'category_id', type: 'string' }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'program_product_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ProgramProduct.create,
      read:     Omni.service.ProgramProduct.read,
      update:   Omni.service.ProgramProduct.update,
      destroy:  Omni.service.ProgramProduct.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

