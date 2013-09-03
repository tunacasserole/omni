Ext.define('Omni.model.SupplierRatingSubject', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'supplier_rating_subject_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'supplier_rating_subject_type', type: 'string' },
    { name: 'weighting_percent', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'supplier_rating_subject_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SupplierRatingSubject.create,
      read:     Omni.service.SupplierRatingSubject.read,
      update:   Omni.service.SupplierRatingSubject.update,
      destroy:  Omni.service.SupplierRatingSubject.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

