Ext.define('Omni.model.ReceiptFormat', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'receipt_format_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'icon_url', type: 'string' },
    { name: 'icon_width', type: 'float', defaultValue: 0 },
    { name: 'paper_width', type: 'float', defaultValue: 0 },
    { name: 'top_name', type: 'string' },
    { name: 'feedback_message', type: 'string' },
    { name: 'return_policy', type: 'string' },
    { name: 'website_message', type: 'string' },
    { name: 'promotional_message', type: 'string' },
    { name: 'message_separator', type: 'string' },
    { name: 'is_date_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_time_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_location_name_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_location_number_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_order_number_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_cashier_name_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_cashier_number_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_salesperson_name_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_salesperson_number_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_customer_name_in_header', type: 'boolean', defaultValue: false },
    { name: 'is_date_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_time_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_location_name_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_location_number_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_order_number_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_cashier_name_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_cashier_number_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_salesperson_name_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_salesperson_number_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_customer_name_in_footer', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'receipt_format_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.ReceiptFormat.create,
      read:     Omni.service.ReceiptFormat.read,
      update:   Omni.service.ReceiptFormat.update,
      destroy:  Omni.service.ReceiptFormat.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

