Ext.define('Desk.model.Case', {
  extend: 'Ext.data.Model',

  fields: [{
    name: 'case_id',
    type: 'string'
  }, {
    name: 'requestor_id',
    type: 'string'
  }, {
    name: 'reviewer_id',
    type: 'string'
  }, {
    name: 'owner_id',
    type: 'string'
  }, {
    name: 'project_id',
    type: 'string'
  }, {
    name: 'case_nbr',
    type: 'string'
  }, {
    name: 'case_type',
    type: 'string'
  }, {
    name: 'case_size',
    type: 'string'
  }, {
    name: 'case_urgency',
    type: 'string'
  }, {
    name: 'details',
    type: 'string'
  }, {
    name: 'state',
    type: 'string'
  }, {
    name: 'display',
    type: 'string'
  }, {
    name: 'description',
    type: 'string'
  }, {
    name: 'is_approved',
    type: 'boolean',
    useNull: true
  }, {
    name: 'audit_created_by',
    type: 'string'
  }, {
    name: 'audit_created_by_name',
    type: 'string'
  }, {
    name: 'audit_updated_by',
    type: 'string'
  }, {
    name: 'audit_updated_by_name',
    type: 'string'
  }, {
    name: 'audit_created_at',
    type: 'date'
  }, {
    name: 'audit_updated_at',
    type: 'date'
  }, {
    name: 'owner_display',
    type: 'string'
  }, {
    name: 'requestor_display',
    type: 'string'
  }, {
    name: 'reviewer_display',
    type: 'string'
  }, {
    name: 'project_display',
    type: 'string'
  }, {
    name: 'display_as',
    type: 'string'
  }],

  idProperty: 'case_id',

  proxy: {
    type: 'direct',
    api: {
      create: Desk.service.Case.create,
      read: Desk.service.Case.read,
      update: Desk.service.Case.update,
      destroy: Desk.service.Case.destroy
    },
    reader: {
      type: 'json',
      root: 'records',
      totalProperty: 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Desk.model.Case'
