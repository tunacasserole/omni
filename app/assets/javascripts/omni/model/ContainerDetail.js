Ext.define('Omni.model.ContainerDetail', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'container_detail_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'container_detail_nbr', type: 'string' },
    { name: 'container_display', type: 'string' },
    { name: 'container_id', type: 'string' },
    { name: 'state', type: 'string' },
    { name: 'sku_display', type: 'string' },
    { name: 'sku_id', type: 'string' },
    { name: 'selling_units', type: 'float', defaultValue: 0 },
    { name: 'commited_units', type: 'float', defaultValue: 0 },
    { name: 'pack_type', type: 'string' },
    { name: 'sell_units_per_pack', type: 'float', defaultValue: 0 },
    { name: 'container_inventory_source', type: 'string' },
    { name: 'container_detail_source', type: 'string' },
    { name: 'purchase_detail_display', type: 'string' },
    { name: 'purchase_detail_id', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'supplier_item_identifier', type: 'string' },
    { name: 'lot_identifier', type: 'string' },
    { name: 'job_display', type: 'string' },
    { name: 'job_id', type: 'string' },
    { name: 'receipt_detail_display', type: 'string' },
    { name: 'receipt_detail_id', type: 'string' },
    { name: 'pick_display', type: 'string' },
    { name: 'pick_id', type: 'string' },
    { name: 'origin_container_detail_display', type: 'string' },
    { name: 'origin_container_detail_id', type: 'string' },
    { name: 'is_quality_hold', type: 'boolean', defaultValue: false },
    { name: 'is_duty_paid', type: 'boolean', defaultValue: false },
    { name: 'last_activity_date', type: 'date' },
    { name: 'last_count_date', type: 'date' },
    { name: 'is_audited', type: 'boolean', defaultValue: false },
    { name: 'is_inspected', type: 'boolean', defaultValue: false },
    { name: 'Inspection_date', type: 'date' },
    { name: 'create_date', type: 'date' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'container_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ContainerDetail.create,
      read:     Omni.service.ContainerDetail.read,
      update:   Omni.service.ContainerDetail.update,
      destroy:  Omni.service.ContainerDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

