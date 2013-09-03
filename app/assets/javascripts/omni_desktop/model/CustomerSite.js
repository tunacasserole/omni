Ext.define('Omni.model.CustomerSite', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'customer_id' },
    { type: 'presence', field: 'site_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'customer_site_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'customer_display', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'comment', type: 'string' },
    { name: 'is_site_contact', type: 'boolean', defaultValue: false },
    { name: 'is_teacher', type: 'boolean', defaultValue: false },
    { name: 'is_administrator', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'customer_site_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.CustomerSite.create,
      read:     Omni.service.CustomerSite.read,
      update:   Omni.service.CustomerSite.update,
      destroy:  Omni.service.CustomerSite.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

