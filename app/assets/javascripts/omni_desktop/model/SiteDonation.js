Ext.define('Omni.model.SiteDonation', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'site_id' },
    { type: 'presence', field: 'donation_date' },
    { type: 'presence', field: 'donation_amount' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'site_donation_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'donation_date', type: 'date' },
    { name: 'donation_amount', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'site_donation_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SiteDonation.create,
      read:     Omni.service.SiteDonation.read,
      update:   Omni.service.SiteDonation.update,
      destroy:  Omni.service.SiteDonation.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

