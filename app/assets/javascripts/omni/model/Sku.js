Ext.define('Omni.model.Sku', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_id',                               type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'sku_nbr',                              type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'short_name',                           type: 'string'      },
    { name: 'pos_name',                             type: 'string'      },
    { name: 'design_code',                          type: 'string'      },
    { name: 'state',                                type: 'string'      },
    { name: 'maintenance_level',                    type: 'string'      },
    { name: 'generic_sku_display',                  type: 'string'      },
    { name: 'generic_sku_id',                       type: 'string'      },
    { name: 'add_on_sku_display',                   type: 'string'      },
    { name: 'add_on_sku_id',                        type: 'string'      },
    { name: 'account_display',                         type: 'string'      },
    { name: 'account_id',                              type: 'string'      },
    { name: 'conversion_type',                      type: 'string'      },
    { name: 'style_color_size_display',             type: 'string'      },
    { name: 'style_color_size_id',                  type: 'string'      },
    { name: 'style_display',                        type: 'string'      },
    { name: 'style_id',                             type: 'string'      },
    { name: 'color_display',                        type: 'string'      },
    { name: 'color_id',                             type: 'string'      },
    { name: 'color_name',                           type: 'string'      },
    { name: 'color_short_name',                     type: 'string'      },
    { name: 'size_display',                         type: 'string'      },
    { name: 'size_id',                              type: 'string'      },
    { name: 'effective_date',                       type: 'date'        },
    { name: 'discontinued_date',                    type: 'date'        },
    { name: 'out_of_stock_date',                    type: 'date'        },
    // { name: 'subclass_display',                     type: 'string'      },
    // { name: 'subclass_id',                          type: 'string'      },
    { name: 'buyer_user_display',                   type: 'string'      },
    { name: 'buyer_user_id',                        type: 'string'      },
    { name: 'brand',                                type: 'string'      },
    { name: 'product_type_display',                 type: 'string'      },
    { name: 'product_type_id',                      type: 'string'      },
    { name: 'fabric_content',                       type: 'string'      },
    { name: 'initial_retail_price',                 type: 'float',      defaultValue: 0                         },
    { name: 'suggested_retail_price',               type: 'float',      defaultValue: 0                         },
    { name: 'smoothing_factor',                     type: 'float',      defaultValue: 0                         },
    { name: 'replenishment_method',                 type: 'string'      },
    { name: 'minimum_on_hand_units',                type: 'float',      defaultValue: 0                         },
    { name: 'maximum_on_hand_units',                type: 'float',      defaultValue: 0                         },
    { name: 'pack_type',                            type: 'string'      },
    { name: 'replenishment_source',                 type: 'string'      },
    { name: 'sell_unit_uom_code',                   type: 'string'      },
    { name: 'sell_unit_length',                     type: 'float',      defaultValue: 0                         },
    { name: 'sell_unit_height',                     type: 'float',      defaultValue: 0                         },
    { name: 'sell_unit_width',                      type: 'float',      defaultValue: 0                         },
    { name: 'sell_unit_weight',                     type: 'float',      defaultValue: 0                         },
    { name: 'supplier_display',                     type: 'string'      },
    { name: 'supplier_id',                          type: 'string'      },
    { name: 'order_uom_code',                       type: 'string'      },
    { name: 'order_package_type',                   type: 'string'      },
    { name: 'garment_pieces',                       type: 'float',      defaultValue: 0                         },
    { name: 'conversion_cost',                  type: 'decimal'  },
    { name: 'first_cost',                  type: 'decimal'  },
    { name: 'last_cost',                   type: 'decimal'  },
    { name: 'average_cost',                type: 'decimal'  },
    { name: 'on_hand_units',               type: 'decimal'  },
    { name: 'cost_pool',                   type: 'decimal'  },
    { name: 'retail_pool',                 type: 'decimal'  },
    { name: 'is_converted',                         type: 'boolean',    defaultValue: false                     },
    { name: 'is_enabled',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_not_stocked',                       type: 'boolean',    defaultValue: false                     },
    { name: 'is_conveyable_sell_unit',              type: 'boolean',    defaultValue: false                     },
    { name: 'is_discountable',                      type: 'boolean',    defaultValue: false                     },
    { name: 'is_taxable',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_special_order',                     type: 'boolean',    defaultValue: false                     },
    { name: 'is_special_size',                      type: 'boolean',    defaultValue: false                     },
    { name: 'is_updated_average_cost',     type: 'boolean'  },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Sku.create,
      read:     Omni.service.Sku.read,
      update:   Omni.service.Sku.update,
      destroy:  Omni.service.Sku.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

