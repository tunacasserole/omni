Ext.define('Omni.model.OrderDetail', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'sku_id' },
    { type: 'presence', field: 'sku_alias_id' },
    { type: 'presence', field: 'delivery_method' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'order_detail_id',                      type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'order_display',                        type: 'string'      },
    { name: 'order_id',                             type: 'string'      },
    { name: 'order_line_nbr',                       type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'sku_alias_display',                    type: 'string'      },
    { name: 'sku_alias_id',                         type: 'string'      },
    { name: 'delivery_method',                      type: 'string'      },
    { name: 'pickup_location_display',              type: 'string'      },
    { name: 'pickup_location_id',                   type: 'string'      },
    { name: 'ship_to_name',                         type: 'string'      },
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
    { name: 'site_display',                         type: 'string'      },
    { name: 'site_id',                              type: 'string'      },
    { name: 'grade_display',                        type: 'string'      },
    { name: 'grade_id',                             type: 'string'      },
    { name: 'gender',                               type: 'string'      },
    { name: 'sales_user_display',                   type: 'string'      },
    { name: 'sales_user_id',                        type: 'string'      },
    { name: 'promised_date',                        type: 'date'        },
    { name: 'state',                                type: 'string'      },
    { name: 'serial_number',                        type: 'string'      },
    { name: 'order_units',                          type: 'float',      defaultValue: 0                         },
    { name: 'retail_price',                         type: 'float',      defaultValue: 0                         },
    { name: 'sale_price',                           type: 'float',      defaultValue: 0                         },
    { name: 'sales_tax_rate',                       type: 'float',      defaultValue: 0                         },
    { name: 'price_type',                           type: 'string'      },
    { name: 'is_taxable_product',                   type: 'boolean',    defaultValue: false                     },
    { name: 'is_tax_charged',                       type: 'boolean',    defaultValue: false                     },
    { name: 'shipping_amount',                      type: 'float',      defaultValue: 0                         },
    { name: 'discount_percent',                     type: 'float',      defaultValue: 0                         },
    { name: 'discount_amount',                      type: 'float',      defaultValue: 0                         },
    { name: 'customer_discount_reason',             type: 'string'      },
    { name: 'customer_return_reason',               type: 'string'      },
    { name: 'customer_cancel_reason',               type: 'string'      },
    { name: 'cancel_date',                          type: 'date'        },
    { name: 'reference_order_detail_display',       type: 'string'      },
    { name: 'reference_order_detail_id',            type: 'string'      },
    { name: 'is_cancelled',                         type: 'boolean',    defaultValue: false                     },
    { name: 'is_layaway',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'order_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.OrderDetail.create,
      read:     Omni.service.OrderDetail.read,
      update:   Omni.service.OrderDetail.update,
      destroy:  Omni.service.OrderDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

