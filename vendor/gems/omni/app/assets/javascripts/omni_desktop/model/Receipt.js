Ext.define('Omni.model.Receipt', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'receipt_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'receipt_nbr', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'carrier_supplier_display', type: 'string' },
    { name: 'carrier_supplier_id', type: 'string' },
    { name: 'trailer_identifier', type: 'string' },
    { name: 'create_date', type: 'date' },
    { name: 'ship_date', type: 'date' },
    { name: 'appointment_date', type: 'date' },
    { name: 'appointment_duration', type: 'float', defaultValue: 0 },
    { name: 'start_date', type: 'date' },
    { name: 'complete_date', type: 'date' },
    { name: 'completed_by_user_display', type: 'string' },
    { name: 'completed_by_user_id', type: 'string' },
    { name: 'pro_number', type: 'string' },
    { name: 'bill_of_lading_number', type: 'string' },
    { name: 'packing_slip_number', type: 'string' },
    { name: 'seal_1_number', type: 'string' },
    { name: 'seal_2_number', type: 'string' },
    { name: 'seal_3_number', type: 'string' },
    { name: 'asn_number', type: 'string' },
    { name: 'is_expected_asn', type: 'boolean', defaultValue: false },
    { name: 'standard_carrier_alpha_code', type: 'string' },
    { name: 'ship_point', type: 'string' },
    { name: 'ship_via', type: 'string' },
    { name: 'freight_terms', type: 'string' },
    { name: 'invoice_number', type: 'string' },
    { name: 'state', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'receipt_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Receipt.create,
      read:     Omni.service.Receipt.read,
      update:   Omni.service.Receipt.update,
      destroy:  Omni.service.Receipt.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

