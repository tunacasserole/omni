Ext.define('Omni.model.ShipmentDetail', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'shipment_id' },
    { type: 'presence', field: 'pick_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'shipment_detail_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'shipment_display', type: 'string' },
    { name: 'shipment_id', type: 'string' },
    { name: 'pick_display', type: 'string' },
    { name: 'pick_id', type: 'string' },
    { name: 'ship_units', type: 'float', defaultValue: 0 },
    { name: 'received_units', type: 'float', defaultValue: 0 },
    { name: 'container_display', type: 'string' },
    { name: 'container_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'shipment_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ShipmentDetail.create,
      read:     Omni.service.ShipmentDetail.read,
      update:   Omni.service.ShipmentDetail.update,
      destroy:  Omni.service.ShipmentDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

