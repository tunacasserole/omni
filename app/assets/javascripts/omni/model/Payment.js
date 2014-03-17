Ext.define('Omni.model.Payment', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'payment_nbr' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'payment_id',                           type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'payment_nbr',                          type: 'string'      },
    { name: 'order_display',                        type: 'string'      },
    { name: 'order_id',                             type: 'string'      },
    { name: 'customer_display',                     type: 'string'      },
    { name: 'customer_id',                          type: 'string'      },
    { name: 'terminal_display',                     type: 'string'      },
    { name: 'terminal_id',                          type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'tender_display',                       type: 'string'      },
    { name: 'tender_id',                            type: 'string'      },
    { name: 'voucher_display',                      type: 'string'      },
    { name: 'voucher_id',                           type: 'string'      },
    { name: 'payment_date',                         type: 'date'        },
    { name: 'payment_amount',                       type: 'float',      defaultValue: 0                         },
    { name: 'layaway_deposit_amount',               type: 'float',      defaultValue: 0                         },
    { name: 'account_holder',                       type: 'string'      },
    { name: 'account_number',                       type: 'string'      },
    { name: 'expiration_date',                      type: 'date'        },
    { name: 'ccv_code',                             type: 'string'      },
    { name: 'serial_number',                        type: 'string'      },
    { name: 'routing_number',                       type: 'integer',    defaultValue: 0                         },
    { name: 'state_code',                           type: 'string'      },
    { name: 'license_number',                       type: 'string'      },
    { name: 'birth_date',                           type: 'date'        },
    { name: 'is_prior_authorized_capture',          type: 'boolean',    defaultValue: false                     },
    { name: 'payment_authorization_code',           type: 'string'      },
    { name: 'avs_response',                         type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'payment_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Payment.create,
      read:     Omni.service.Payment.read,
      update:   Omni.service.Payment.update,
      destroy:  Omni.service.Payment.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

