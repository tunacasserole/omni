Ext.define('Omni.model.SiteEnrollment', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'site_id' },
    { type: 'presence', field: 'school_year' },
    { type: 'presence', field: 'grade_id' },
    { type: 'presence', field: 'gender' },
    { type: 'presence', field: 'enrollment' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'site_enrollment_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'site_display', type: 'string' },
    { name: 'site_id', type: 'string' },
    { name: 'school_year', type: 'string' },
    { name: 'grade_display', type: 'string' },
    { name: 'grade_id', type: 'string' },
    { name: 'gender', type: 'string' },
    { name: 'school_year_start_date', type: 'date' },
    { name: 'school_year_end_date', type: 'date' },
    { name: 'enrollment', type: 'float', defaultValue: 0 },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'site_enrollment_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SiteEnrollment.create,
      read:     Omni.service.SiteEnrollment.read,
      update:   Omni.service.SiteEnrollment.update,
      destroy:  Omni.service.SiteEnrollment.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

