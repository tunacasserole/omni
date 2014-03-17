Ext.define('Omni.model.Adjustment', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'adjustment_nbr' },
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'sku_id' },
    { type: 'presence', field: 'adjustment_reason_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'adjustment_id',                        type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'adjustment_nbr',                       type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'bin_display',                          type: 'string'      },
    { name: 'bin_id',                               type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'request_date',                         type: 'date'        },
    { name: 'request_user_display',                 type: 'string'      },
    { name: 'request_user_id',                      type: 'string'      },
    { name: 'post_date',                            type: 'date'        },
    { name: 'post_user_display',                    type: 'string'      },
    { name: 'post_user_id',                         type: 'string'      },
    { name: 'cancel_date',                          type: 'date'        },
    { name: 'cancel_user_display',                  type: 'string'      },
    { name: 'cancel_user_id',                       type: 'string'      },
    { name: 'adjustment_reason_display',            type: 'string'      },
    { name: 'adjustment_reason_id',                 type: 'string'      },
    { name: 'adjustment_units',                     type: 'float',      defaultValue: 0                         },
    { name: 'adjustment_cost',                      type: 'float',      defaultValue: 0                         },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'adjustment_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Adjustment.create,
      read:     Omni.service.Adjustment.read,
      update:   Omni.service.Adjustment.update,
      destroy:  Omni.service.Adjustment.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

