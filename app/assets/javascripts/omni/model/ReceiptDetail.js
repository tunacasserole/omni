Ext.define('Omni.model.ReceiptDetail', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'receipt_detail_id', type: 'string' },
    { name: 'receipt_id', type: 'string' },
    { name: 'receipt_line_nbr', type: 'string' },
    { name: 'purchase_id', type: 'string' },
    { name: 'purchase_detail_id', type: 'string' },
    { name: 'purchase_detail_display', type: 'string' },
    { name: 'allocation_profile_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'state', type: 'string' },
    { name: 'receipt_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_alias', type: 'string' },
    { name: 'received_units', type: 'float', defaultValue: 0 },
    { name: 'receipt_pack_size', type: 'float', defaultValue: 0 },
    { name: 'receipt_pack_type', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'receipt_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ReceiptDetail.create,
      read:     Omni.service.ReceiptDetail.read,
      update:   Omni.service.ReceiptDetail.update,
      destroy:  Omni.service.ReceiptDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

