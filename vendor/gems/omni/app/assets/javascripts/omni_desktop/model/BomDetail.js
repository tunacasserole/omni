Ext.define('Omni.model.BomDetail', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'bom_detail_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'bom_display', type: 'string' },
    { name: 'bom_id', type: 'string' },
    { name: 'color_display', type: 'string' },
    { name: 'color_id', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'quantity', type: 'float', defaultValue: 0 },
    { name: 'waste_percent', type: 'float', defaultValue: 0 },
    { name: 'uom_code', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'bom_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.BomDetail.create,
      read:     Omni.service.BomDetail.read,
      update:   Omni.service.BomDetail.update,
      destroy:  Omni.service.BomDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

