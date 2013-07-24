Ext.define('Omni.model.Department', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'company_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'department_id',                        type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'department_nbr',                       type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'short_name',                           type: 'string'      },
    { name: 'buyer_user_display',                   type: 'string'      },
    { name: 'buyer_user_id',                        type: 'string'      },
    { name: 'company_display',                      type: 'string'      },
    { name: 'company_id',                           type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'department_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Department.create,
      read:     Omni.service.Department.read,
      update:   Omni.service.Department.update,
      destroy:  Omni.service.Department.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

