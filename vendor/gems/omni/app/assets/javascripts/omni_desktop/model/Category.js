Ext.define('Omni.model.Category', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'category_code' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'category_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'category_code', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'category_type', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'category_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Category.create,
      read:     Omni.service.Category.read,
      update:   Omni.service.Category.update,
      destroy:  Omni.service.Category.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

