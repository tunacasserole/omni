Ext.define('Omni.model.SupplierContact', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    // { type: 'presence', field: 'display' },
    // { type: 'presence', field: 'supplier_id' },
    // { type: 'presence', field: 'first_name' },
    // { type: 'presence', field: 'last_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'supplier_contact_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'first_name', type: 'string' },
    { name: 'last_name', type: 'string' },
    { name: 'name_prefix', type: 'string' },
    { name: 'name_suffix', type: 'string' },
    { name: 'department', type: 'string' },
    { name: 'job_title', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'fax', type: 'string' },
    { name: 'email_address', type: 'string' },
    { name: 'is_order_contact', type: 'boolean', defaultValue: false },
    { name: 'is_return_contact', type: 'boolean', defaultValue: false },
    { name: 'is_payment_contact', type: 'boolean', defaultValue: false },
    { name: 'is_executive_contact', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'supplier_contact_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SupplierContact.create,
      read:     Omni.service.SupplierContact.read,
      update:   Omni.service.SupplierContact.update,
      destroy:  Omni.service.SupplierContact.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

