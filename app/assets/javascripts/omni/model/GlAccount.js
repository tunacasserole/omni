Ext.define('Omni.model.GlAccount', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'gl_account_id',               type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'gl_main_account',             type: 'string'   },
      { name: 'gl_sub_account',              type: 'string'   },
      { name: 'is_location_fill',            type: 'boolean'  },
      { name: 'gl_account_type',             type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'gl_account_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.GlAccount.create,
      read:    Omni.service.GlAccount.read,
      update:  Omni.service.GlAccount.update,
      destroy: Omni.service.GlAccount.destroy
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
