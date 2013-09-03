Ext.define('Omni.model.SizeGroupDetail', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'size_group_detail_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'size_group_display', type: 'string' },
    { name: 'size_group_id', type: 'string' },
    { name: 'size_display', type: 'string' },
    { name: 'size_id', type: 'string' },
    { name: 'display_order', type: 'integer', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'size_group_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SizeGroupDetail.create,
      read:     Omni.service.SizeGroupDetail.read,
      update:   Omni.service.SizeGroupDetail.update,
      destroy:  Omni.service.SizeGroupDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

