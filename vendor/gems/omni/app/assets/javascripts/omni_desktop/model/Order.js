Ext.define('Omni.model.Order', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'customer_id' },
    { type: 'presence', field: 'order_date' },
    { type: 'presence', field: 'order_source' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'order_id',                             type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'terminal_display',                     type: 'string'      },
    { name: 'terminal_id',                          type: 'string'      },
    { name: 'customer_order_nbr',                   type: 'string'      },
    { name: 'customer_display',                     type: 'string'      },
    { name: 'customer_id',                          type: 'string'      },
    { name: 'order_start_date',                     type: 'date'        },
    { name: 'order_date',                           type: 'date'        },
    { name: 'price_lookup_date',                    type: 'date'        },
    { name: 'user_display',                         type: 'string'      },
    { name: 'user_id',                              type: 'string'      },
    { name: 'order_source',                         type: 'string'      },
    { name: 'is_tax_exempt_date',                   type: 'boolean',    defaultValue: false                     },
    { name: 'is_tax_exempt_customer',               type: 'boolean',    defaultValue: false                     },
    { name: 'is_trade_discount_order',              type: 'boolean',    defaultValue: false                     },
    { name: 'order_total',                          type: 'float',      defaultValue: 0                         },
    { name: 'state',                                type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'order_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Order.create,
      read:     Omni.service.Order.read,
      update:   Omni.service.Order.update,
      destroy:  Omni.service.Order.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

