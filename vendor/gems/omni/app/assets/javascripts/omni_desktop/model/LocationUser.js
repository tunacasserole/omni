Ext.define('Omni.model.LocationUser', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'location_user_id',            type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'user_id',                     type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'is_manager',                  type: 'boolean'  },
      { name: 'is_cashier',                  type: 'boolean'  },
      { name: 'is_sales',                    type: 'boolean'  },
      { name: 'is_back_office',              type: 'boolean'  },
      { name: 'short_password',              type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'is_purchase_approver_1',      type: 'boolean'  },
      { name: 'is_purchase_approver_2',      type: 'boolean'  },
      { name: 'is_purchase_approver_3',      type: 'boolean'  }
    ],

  idProperty: 'location_user_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.LocationUser.create,
      read:    Omni.service.LocationUser.read,
      update:  Omni.service.LocationUser.update,
      destroy: Omni.service.LocationUser.destroy
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