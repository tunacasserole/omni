Ext.define('Omni.model.LocationTaxAuthority', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'tax_authority_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'location_tax_authority_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'tax_authority_display', type: 'string' },
    { name: 'tax_authority_id', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'location_tax_authority_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.LocationTaxAuthority.create,
      read:     Omni.service.LocationTaxAuthority.read,
      update:   Omni.service.LocationTaxAuthority.update,
      destroy:  Omni.service.LocationTaxAuthority.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

