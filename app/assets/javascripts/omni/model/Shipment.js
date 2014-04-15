Ext.define('Omni.model.Shipment', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'location_id' },
    { type: 'presence', field: 'create_date' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'shipment_id',                          type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'display_as',                           type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'shipment_nbr',                         type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'shippable_type',                       type: 'string'      },
    { name: 'shippable_id',                         type: 'string'      },
    { name: 'supplier_display',                     type: 'string'      },
    { name: 'supplier_id',                          type: 'string'      },
    { name: 'tracking_number',                      type: 'string'      },
    { name: 'create_date',                          type: 'date'        },
    { name: 'ship_date',                            type: 'date'        },
    { name: 'receipt_date',                         type: 'date'        },
    { name: 'estimated_delivery_date',              type: 'date'        },
    { name: 'shipping_cost',                        type: 'float',      defaultValue: 0                         },
    { name: 'ship_name',                            type: 'string'      },
    { name: 'ship_line_1',                          type: 'string'      },
    { name: 'ship_line_2',                          type: 'string'      },
    { name: 'ship_line_3',                          type: 'string'      },
    { name: 'ship_line_4',                          type: 'string'      },
    { name: 'ship_city',                            type: 'string'      },
    { name: 'ship_state_code',                      type: 'string'      },
    { name: 'ship_zip',                             type: 'string'      },
    { name: 'ship_country',                         type: 'string'      },
    { name: 'ship_latitude',                        type: 'string'      },
    { name: 'ship_longitude',                       type: 'string'      },
    { name: 'is_residential',                       type: 'boolean',    defaultValue: false                     },
    { name: 'is_commercial',                        type: 'boolean',    defaultValue: false                     },
    { name: 'phone',                                type: 'string'      },
    { name: 'email_address',                        type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'shipment_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Shipment.create,
      read:     Omni.service.Shipment.read,
      update:   Omni.service.Shipment.update,
      destroy:  Omni.service.Shipment.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

