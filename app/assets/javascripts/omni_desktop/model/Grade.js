Ext.define('Omni.model.Grade', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'grade_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'gradeset', type: 'string' },
    { name: 'grade_name', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'grade_order', type: 'integer', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'grade_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Grade.create,
      read:     Omni.service.Grade.read,
      update:   Omni.service.Grade.update,
      destroy:  Omni.service.Grade.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

