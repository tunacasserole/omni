Ext.define('Omni.model.Program', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'program_nbr' },
    { type: 'presence', field: 'site_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'program_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'program_nbr', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'program_name', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'contract_sent_date', type: 'date' },
    { name: 'contract_received_date', type: 'date' },
    { name: 'order_form_sent_date', type: 'date' },
    { name: 'contract_won_date', type: 'date' },
    { name: 'contract_lost_date', type: 'date' },
    { name: 'is_exclusive', type: 'boolean', defaultValue: false },
    { name: 'teacher_discount_percent', type: 'float', defaultValue: 0 },
    { name: 'administrator_discount_percent', type: 'float', defaultValue: 0 },
    { name: 'is_discount_in_store', type: 'boolean', defaultValue: false },
    { name: 'is_discount_on_web', type: 'boolean', defaultValue: false },
    { name: 'is_active', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'program_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Program.create,
      read:     Omni.service.Program.read,
      update:   Omni.service.Program.update,
      destroy:  Omni.service.Program.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

