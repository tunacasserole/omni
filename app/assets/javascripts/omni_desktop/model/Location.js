Ext.define('Omni.model.Location', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'line_1' },
    { type: 'presence', field: 'city' },
    { type: 'presence', field: 'zip' },
    { type: 'presence', field: 'phone' },
    { type: 'presence', field: 'district_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'location_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'location_nbr', type: 'string' },
    { name: 'location_brand', type: 'string' },
    { name: 'line_1', type: 'string' },
    { name: 'line_2', type: 'string' },
    { name: 'line_3', type: 'string' },
    { name: 'line_4', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'state_code', type: 'string' },
    { name: 'zip', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'latitude', type: 'string' },
    { name: 'longitude', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'fax', type: 'string' },
    { name: 'is_owned', type: 'boolean', defaultValue: false },
    { name: 'is_store', type: 'boolean', defaultValue: false },
    { name: 'is_temporary_store', type: 'boolean', defaultValue: false },
    { name: 'is_webstore', type: 'boolean', defaultValue: false },
    { name: 'is_factory', type: 'boolean', defaultValue: false },
    { name: 'is_warehouse', type: 'boolean', defaultValue: false },
    { name: 'is_enabled', type: 'boolean', defaultValue: false },
    { name: 'open_date', type: 'date' },
    { name: 'close_date', type: 'date' },
    { name: 'parent_location_display', type: 'string' },
    { name: 'parent_location_id', type: 'string' },
    { name: 'district_display', type: 'string' },
    { name: 'district_id', type: 'string' },
    { name: 'price_book_display', type: 'string' },
    { name: 'price_book_id', type: 'string' },
    { name: 'promo_price_book_display', type: 'string' },
    { name: 'promo_price_book_id', type: 'string' },
    { name: 'selling_square_feet', type: 'float', defaultValue: 0 },
    { name: 'storage_square_feet', type: 'float', defaultValue: 0 },
    { name: 'location_url', type: 'string' },
    { name: 'time_zone', type: 'string' },
    { name: 'sunday_open_time', type: 'string' },
    { name: 'sunday_close_time', type: 'string' },
    { name: 'monday_open_time', type: 'string' },
    { name: 'monday_close_time', type: 'string' },
    { name: 'tuesday_open_time', type: 'string' },
    { name: 'tuesday_close_time', type: 'string' },
    { name: 'wednesday_open_time', type: 'string' },
    { name: 'wednesday_close_time', type: 'string' },
    { name: 'thursday_open_time', type: 'string' },
    { name: 'thursday_close_time', type: 'string' },
    { name: 'friday_open_time', type: 'string' },
    { name: 'friday_close_time', type: 'string' },
    { name: 'saturday_open_time', type: 'string' },
    { name: 'saturday_close_time', type: 'string' },
    { name: 'merchant_identifier', type: 'string' },
    { name: 'merchant_name', type: 'string' },
    { name: 'merchant_time_zone', type: 'string' },
    { name: 'merchant_location', type: 'string' },
    { name: 'merchant_sic', type: 'string' },
    { name: 'merchant_industry', type: 'string' },
    { name: 'merchant_acquirer_bin', type: 'string' },
    { name: 'merchant_agent', type: 'string' },
    { name: 'merchant_chain', type: 'string' },
    { name: 'merchant_store', type: 'string' },
    { name: 'merchant_terminal', type: 'string' },
    { name: 'merchant_v_number', type: 'string' },
    { name: 'merchant_pri_auth_phone', type: 'string' },
    { name: 'merchant_sec_auth_phone', type: 'string' },
    { name: 'merchant_pri_settle_phone', type: 'string' },
    { name: 'merchant_sec_settle_phone', type: 'string' },
    { name: 'merchant_amex_identifier', type: 'string' },
    { name: 'merchant_discover_identifier', type: 'string' },
    { name: 'merchant_diners_identifier', type: 'string' },
    { name: 'merchant_sharing_groups', type: 'string' },
    { name: 'merchant_reimbursement', type: 'string' },
    { name: 'merchant_settle_agent', type: 'string' },
    { name: 'merchant_bank_aba', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'location_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Location.create,
      read:     Omni.service.Location.read,
      update:   Omni.service.Location.update,
      destroy:  Omni.service.Location.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

