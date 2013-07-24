Ext.define('Omni.model.Site', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'site_name' },
    { type: 'presence', field: 'school_nbr' },
    { type: 'presence', field: 'site_type' },
    { type: 'presence', field: 'line_1' },
    { type: 'presence', field: 'city' },
    { type: 'presence', field: 'zip' },
    { type: 'presence', field: 'phone' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'site_id', type: 'string' },
    { name: 'display', type: 'string' },
    { name: 'site_name', type: 'string' },
    { name: 'parent_site_display', type: 'string' },
    { name: 'parent_site_id', type: 'string' },
    { name: 'school_nbr', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'short_name', type: 'string' },
    { name: 'concatenated_name', type: 'string' },
    { name: 'site_type', type: 'string' },
    { name: 'location_display', type: 'string' },
    { name: 'location_id', type: 'string' },
    { name: 'is_on_web', type: 'boolean', defaultValue: false },
    { name: 'gradeset', type: 'string' },
    { name: 'site_gender', type: 'string' },
    { name: 'line_1', type: 'string' },
    { name: 'line_2', type: 'string' },
    { name: 'line_3', type: 'string' },
    { name: 'line_4', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'state_code', type: 'string' },
    { name: 'zip', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'latitude', type: 'string' },
    { name: 'longitude', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'fax', type: 'string' },
    { name: 'is_destroyed', type: 'boolean', defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'site_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Site.create,
      read:     Omni.service.Site.read,
      update:   Omni.service.Site.update,
      destroy:  Omni.service.Site.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

