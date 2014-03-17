Ext.define('Omni.model.SkuPriceRequest', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_price_request_id',                 type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'user_display',                         type: 'string'      },
    { name: 'user_id',                              type: 'string'      },
    { name: 'request_date',                         type: 'date'        },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'customer_display',                     type: 'string'      },
    { name: 'customer_id',                          type: 'string'      },
    { name: 'account_display',                         type: 'string'      },
    { name: 'account_id',                              type: 'string'      },
    { name: 'request_price_book_display',           type: 'string'      },
    { name: 'request_price_book_id',                type: 'string'      },
    { name: 'price_date',                           type: 'date'        },
    { name: 'permanent_sku_retail',                 type: 'float',      defaultValue: 0                         },
    { name: 'permanent_units',                      type: 'float',      defaultValue: 0                         },
    { name: 'price_book_display',                   type: 'string'      },
    { name: 'price_book_id',                        type: 'string'      },
    { name: 'sku_price_display',                    type: 'string'      },
    { name: 'sku_price_id',                         type: 'string'      },
    { name: 'promo_sku_retail',                     type: 'float',      defaultValue: 0                         },
    { name: 'promo_percent',                        type: 'float',      defaultValue: 0                         },
    { name: 'promo_amount',                         type: 'float',      defaultValue: 0                         },
    { name: 'promo_units',                          type: 'float',      defaultValue: 0                         },
    { name: 'regular_units',                        type: 'float',      defaultValue: 0                         },
    { name: 'maximum_promo_units',                  type: 'float',      defaultValue: 0                         },
    { name: 'sku_promo_price_display',              type: 'string'      },
    { name: 'sku_promo_price_id',                   type: 'string'      },
    { name: 'sales_category',                       type: 'string'      },
    { name: 'professional_discount_percent',        type: 'float',      defaultValue: 0                         },
    { name: 'employee_discount_percent',            type: 'float',      defaultValue: 0                         },
    { name: 'school_discount_percent',              type: 'float',      defaultValue: 0                         },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_price_request_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuPriceRequest.create,
      read:     Omni.service.SkuPriceRequest.read,
      update:   Omni.service.SkuPriceRequest.update,
      destroy:  Omni.service.SkuPriceRequest.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

