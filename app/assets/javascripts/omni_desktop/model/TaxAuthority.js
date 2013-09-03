Ext.define('Omni.model.TaxAuthority', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'state_code' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'tax_authority_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'tax_authority_type', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'state_code', type: 'string' },
    { name: 'filing_frequency', type: 'string' },
    { name: 'is_tax_when_no_presence', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'tax_authority_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.TaxAuthority.create,
      read:     Omni.service.TaxAuthority.read,
      update:   Omni.service.TaxAuthority.update,
      destroy:  Omni.service.TaxAuthority.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

