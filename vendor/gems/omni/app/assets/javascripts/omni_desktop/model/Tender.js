Ext.define('Omni.model.Tender', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'description' },
    { type: 'presence', field: 'short_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'tender_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'tender_type', type: 'string' },
    { name: 'is_allow_over_tendering', type: 'boolean', defaultValue: false },
    { name: 'is_open_cash_drawer', type: 'boolean', defaultValue: false },
    { name: 'is_required_signature', type: 'boolean', defaultValue: false },
    { name: 'is_allow_multiple_entry', type: 'boolean', defaultValue: false },
    { name: 'is_print_duplicate_receipt', type: 'boolean', defaultValue: false },
    { name: 'is_allow_cash_back', type: 'boolean', defaultValue: false },
    { name: 'maximum_tender_amount', type: 'float', defaultValue: 0 },
    { name: 'display_order', type: 'string' },
    { name: 'is_verify_via_edc', type: 'boolean', defaultValue: false },
    { name: 'cash_back_limit', type: 'float', defaultValue: 0 },
    { name: 'cash_back_fee', type: 'float', defaultValue: 0 },
    { name: 'gl_account_display', type: 'string' },
    { name: 'gl_account_id', type: 'string' },
    { name: 'validation_mask', type: 'integer', defaultValue: 0 },
    { name: 'is_credit_card', type: 'boolean', defaultValue: false },
    { name: 'is_required_account_holder', type: 'boolean', defaultValue: false },
    { name: 'is_required_account_number', type: 'boolean', defaultValue: false },
    { name: 'is_required_expiration_date', type: 'boolean', defaultValue: false },
    { name: 'is_required_ccv_code', type: 'boolean', defaultValue: false },
    { name: 'is_required_postal_code', type: 'boolean', defaultValue: false },
    { name: 'is_required_serial_number', type: 'boolean', defaultValue: false },
    { name: 'is_required_routing_number', type: 'boolean', defaultValue: false },
    { name: 'is_required_state', type: 'boolean', defaultValue: false },
    { name: 'is_required_license_number', type: 'boolean', defaultValue: false },
    { name: 'is_required_birth_date', type: 'boolean', defaultValue: false },
    { name: 'is_required_avs_response', type: 'boolean', defaultValue: false },
    { name: 'is_update_till', type: 'boolean', defaultValue: false },
    { name: 'is_accept_business_credit_card', type: 'boolean', defaultValue: false },
    { name: 'is_enabled_for_web', type: 'boolean', defaultValue: false },
    { name: 'is_enabled_for_pos', type: 'boolean', defaultValue: false },
    { name: 'is_enabled_for_phone', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'tender_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Tender.create,
      read:     Omni.service.Tender.read,
      update:   Omni.service.Tender.update,
      destroy:  Omni.service.Tender.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

