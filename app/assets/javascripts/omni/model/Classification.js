Ext.define('Omni.model.Classification', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'department_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'classification_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'classification_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'planner_user_display', type: 'string' },
    { name: 'planner_user_id', type: 'string' },
    { name: 'department_display', type: 'string' },
    { name: 'department_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'classification_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Classification.create,
      read:     Omni.service.Classification.read,
      update:   Omni.service.Classification.update,
      destroy:  Omni.service.Classification.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

