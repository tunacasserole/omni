Ext.define('Omni.model.SupplierRating', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'supplier_id' },
    { type: 'presence', field: 'supplier_rating_subject_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'supplier_rating_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'supplier_rating_subject_display', type: 'string' },
    { name: 'supplier_rating_subject_id', type: 'string' },
    { name: 'rating_date', type: 'date' },
    { name: 'rating_value', type: 'integer', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'supplier_rating_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SupplierRating.create,
      read:     Omni.service.SupplierRating.read,
      update:   Omni.service.SupplierRating.update,
      destroy:  Omni.service.SupplierRating.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

