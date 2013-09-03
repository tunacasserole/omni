Ext.define('Omni.model.Color', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'concatenated_name' },
    { type: 'presence', field: 'color_family' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'color_id',                             type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'color_nbr',                            type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'short_name',                           type: 'string'      },
    { name: 'concatenated_name',                    type: 'string'      },
    { name: 'is_plaid',                             type: 'boolean',    defaultValue: false                     },
    { name: 'is_stripe',                            type: 'boolean',    defaultValue: false                     },
    { name: 'color_family',                         type: 'string'      },
    { name: 'is_discontinued',                      type: 'boolean',    defaultValue: false                     },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'color_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Color.create,
      read:     Omni.service.Color.read,
      update:   Omni.service.Color.update,
      destroy:  Omni.service.Color.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

