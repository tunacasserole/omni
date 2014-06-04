Ext.define('Desk.model.Project', {
  extend: 'Ext.data.Model',

  fields: [{
    name: 'display_as',
    type: 'string'
  }, {
    name: 'project_id',
    type: 'string'
  }, {
    name: 'owner_id',
    type: 'string'
  }, {
    name: 'reviewer_id',
    type: 'string'
  }, {
    name: 'owner_display',
    type: 'string'
  }, {
    name: 'project_nbr',
    type: 'string'
  }, {
    name: 'project_type',
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
    name: 'target_date',
    type: 'date'
  }, {
    name: 'is_private',
    type: 'decimal'
  }, {
    name: 'backlog_count',
    type: 'integer'
  }, {
    name: 'draft_count',
    type: 'integer'
  }, {
    name: 'needs_approval_count',
    type: 'integer'
  }, {
    name: 'approved_to_activate_count',
    type: 'integer'
  }, {
    name: 'active_count',
    type: 'integer'
  }, {
    name: 'ready_to_close_count',
    type: 'integer'
  }, {
    name: 'closed_count',
    type: 'integer'
  }, {
    name: 'open_count',
    type: 'integer'
  }],

  idProperty: 'project_id',

  proxy: {
    type: 'direct',
    api: {
      create: Desk.service.Project.create,
      read: Desk.service.Project.read,
      update: Desk.service.Project.update,
      destroy: Desk.service.Project.destroy
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

}); // Ext.define('Desk.model.Project'
