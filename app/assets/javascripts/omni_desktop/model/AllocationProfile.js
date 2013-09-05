Ext.define('Omni.model.AllocationProfile', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'allocation_profile_id',       type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'allocation_formula',          type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'units_allocated',             type: 'decimal'  },
      { name: 'units_shipped',               type: 'decimal'  },
      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'allocation_profile_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.AllocationProfile.create,
      read:    Omni.service.AllocationProfile.read,
      update:  Omni.service.AllocationProfile.update,
      destroy: Omni.service.AllocationProfile.destroy
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