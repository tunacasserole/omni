Ext.define('Omni.model.LocationTaxHoliday', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'short_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'location_tax_holiday_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'effective_date', type: 'date' },
    { name: 'end_date', type: 'date' },
    { name: 'description', type: 'string' },
    { name: 'is_tax_holiday', type: 'boolean', defaultValue: false },
    { name: 'price_cutoff', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'location_tax_holiday_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.LocationTaxHoliday.create,
      read:     Omni.service.LocationTaxHoliday.read,
      update:   Omni.service.LocationTaxHoliday.update,
      destroy:  Omni.service.LocationTaxHoliday.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

