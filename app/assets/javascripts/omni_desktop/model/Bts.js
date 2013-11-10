Ext.define('Omni.model.Bts', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'bts_id',                      type: 'string'   },
      { name: 'department_id',               type: 'string'   },
      { name: 'user_id',                     type: 'string'   },
      { name: 'department_display',          type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'plan_year',                   type: 'string'   },
      { name: 'version',                     type: 'string'   },
      { name: 'audit_updated_at',            type: 'datetime' },
      { name: 'audit_created_at',            type: 'datetime' },
      { name: 'audit_created_by',            type: 'string'   },
      { name: 'audit_updated_by',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'}
    ],

  idProperty: 'bts_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Bts.create,
      read:    Omni.service.Bts.read,
      update:  Omni.service.Bts.update,
      destroy: Omni.service.Bts.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});
