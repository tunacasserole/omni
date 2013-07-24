Ext.define('Omni.model.TaxAuthorityRate', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'tax_authority_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'tax_authority_rate_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'tax_authority_display', type: 'string' },
    { name: 'tax_authority_id', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'tax_percent', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'tax_authority_rate_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.TaxAuthorityRate.create,
      read:     Omni.service.TaxAuthorityRate.read,
      update:   Omni.service.TaxAuthorityRate.update,
      destroy:  Omni.service.TaxAuthorityRate.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

