Ext.define('Omni.model.Transfer', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'requesting_location_id' },
    { type: 'presence', field: 'fulfillment_location_id' },
    { type: 'presence', field: 'sku_id' },
    { type: 'presence', field: 'transfer_reason_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'transfer_id',                          type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'display_as',                           type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'transfer_nbr',                         type: 'string'      },
    { name: 'requesting_location_display',          type: 'string'      },
    { name: 'requesting_location_id',               type: 'string'      },
    { name: 'fulfillment_location_display',         type: 'string'      },
    { name: 'fulfillment_location_id',              type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'transfer_reason_display',              type: 'string'      },
    { name: 'transfer_reason_id',                   type: 'string'      },
    { name: 'request_units',                        type: 'float',      defaultValue: 0                         },
    { name: 'request_date',                         type: 'date'        },
    { name: 'request_user_display',                 type: 'string'      },
    { name: 'request_user_id',                      type: 'string'      },
    { name: 'ship_date',                            type: 'date'        },
    { name: 'cancel_date',                          type: 'date'        },
    { name: 'cancel_user_display',                  type: 'string'      },
    { name: 'cancel_user_id',                       type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'transfer_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Transfer.create,
      read:     Omni.service.Transfer.read,
      update:   Omni.service.Transfer.update,
      destroy:  Omni.service.Transfer.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

