Ext.define('Omni.model.Terminal', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'terminal_nbr' },
    { type: 'presence', field: 'mac_address' },
    { type: 'presence', field: 'local_server_ip' },
    { type: 'presence', field: 'hq_server_url' },
    { type: 'presence', field: 'receipt_printer_url' },
    { type: 'presence', field: 'receipt_printer_ip' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'terminal_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'till_display', type: 'string' },
    { name: 'till_id', type: 'string' },
    { name: 'terminal_nbr', type: 'string' },
    { name: 'mac_address', type: 'string' },
    { name: 'local_server_ip', type: 'string' },
    { name: 'hq_server_url', type: 'string' },
    { name: 'override_sale_date', type: 'date' },
    { name: 'receipt_printer_url', type: 'string' },
    { name: 'receipt_printer_ip', type: 'string' },
    { name: 'receipt_format_display', type: 'string' },
    { name: 'receipt_format_id', type: 'string' },
    { name: 'tag_printer_url', type: 'string' },
    { name: 'tag_printer_ip', type: 'string' },
    { name: 'pin_pad_port', type: 'string' },
    { name: 'is_net_display_enabled', type: 'boolean', defaultValue: false },
    { name: 'is_login_per_transaction', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'terminal_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Terminal.create,
      read:     Omni.service.Terminal.read,
      update:   Omni.service.Terminal.update,
      destroy:  Omni.service.Terminal.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

