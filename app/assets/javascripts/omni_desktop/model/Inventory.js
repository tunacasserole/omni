Ext.define('Omni.model.Inventory', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'display' },
    { type: 'presence', field: 'sku_id' },
    { type: 'presence', field: 'location_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'inventory_id',                         type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'source',                               type: 'string'      },
    { name: 'source_id',                          type: 'string'      },
    { name: 'location_display',                     type: 'string'      },
    { name: 'location_id',                          type: 'string'      },
    { name: 'on_hand_units',                        type: 'float',      defaultValue: 0                         },
    { name: 'in_transit_units',                     type: 'float',      defaultValue: 0                         },
    { name: 'non_sellable_units',                   type: 'float',      defaultValue: 0                         },
    { name: 'allocated_units',                      type: 'float',      defaultValue: 0                         },
    { name: 'reserved_units',                       type: 'float',      defaultValue: 0                         },
    { name: 'shipping_units',                       type: 'float',      defaultValue: 0                         },
    { name: 'work_in_process_units',                type: 'float',      defaultValue: 0                         },
    { name: 'requested_units',                      type: 'float',      defaultValue: 0                         },
    { name: 'frozen_units',                         type: 'float',      defaultValue: 0                         },
    { name: 'supplier_on_order_units',              type: 'float',      defaultValue: 0                         },
    { name: 'warehouse_on_order_units',             type: 'float',      defaultValue: 0                         },
    { name: 'cost_pool',                            type: 'float',      defaultValue: 0                         },
    { name: 'retail_pool',                          type: 'float',      defaultValue: 0                         },
    { name: 'boy_units',                            type: 'float',      defaultValue: 0                         },
    { name: 'boy_cost',                             type: 'float',      defaultValue: 0                         },
    { name: 'boy_retail',                           type: 'float',      defaultValue: 0                         },
    { name: 'last_inventory_units',                 type: 'float',      defaultValue: 0                         },
    { name: 'last_inventory_cost',                  type: 'float',      defaultValue: 0                         },
    { name: 'last_inventory_retail',                type: 'float',      defaultValue: 0                         },
    { name: 'reserve_end_date',                     type: 'date'        },
    { name: 'first_receipt_date',                   type: 'date'        },
    { name: 'last_receipt_date',                    type: 'date'        },
    { name: 'first_sale_date',                      type: 'date'        },
    { name: 'last_sale_date',                       type: 'date'        },
    { name: 'last_inventory_date',                  type: 'date'        },
    { name: 'replenishment_method', type: 'string' },
    { name: 'replenishment_source', type: 'string' },
    { name: 'supplier_display', type: 'string' },
    { name: 'supplier_id', type: 'string' },
    { name: 'safety_stock_units', type: 'float', defaultValue: 0 },
    { name: 'safety_stock_days', type: 'float', defaultValue: 0 },
    { name: 'smoothing_factor', type: 'float', defaultValue: 0 },
    { name: 'forecast_profile_display', type: 'string' },
    { name: 'forecast_profile_id', type: 'string' },
    { name: 'minimum_units', type: 'float', defaultValue: 0 },
    { name: 'maximum_units', type: 'float', defaultValue: 0 },
    { name: 'seasonal_index_display', type: 'string' },
    { name: 'seasonal_index_id', type: 'string' },
    { name: 'forecast', type: 'float', defaultValue: 0 },
    { name: 'velocity_code', type: 'string' },
    { name: 'standard_deviation', type: 'float', defaultValue: 0 },
    { name: 'is_authorized', type: 'boolean', defaultValue: false },
    { name: 'is_taxable', type: 'boolean', defaultValue: false },
    { name: 'is_special_order', type: 'boolean', defaultValue: false },
    { name: 'is_discontinued', type: 'boolean', defaultValue: false },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'inventory_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Inventory.create,
      read:     Omni.service.Inventory.read,
      update:   Omni.service.Inventory.update,
      destroy:  Omni.service.Inventory.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

