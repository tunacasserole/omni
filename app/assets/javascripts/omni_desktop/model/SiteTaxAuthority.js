Ext.define('Omni.model.SiteTaxAuthority', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'site_id' },
    { type: 'presence', field: 'tax_authority_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'site_tax_authority_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'tax_authority_display', type: 'string' },
    { name: 'tax_authority_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'site_tax_authority_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SiteTaxAuthority.create,
      read:     Omni.service.SiteTaxAuthority.read,
      update:   Omni.service.SiteTaxAuthority.update,
      destroy:  Omni.service.SiteTaxAuthority.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

