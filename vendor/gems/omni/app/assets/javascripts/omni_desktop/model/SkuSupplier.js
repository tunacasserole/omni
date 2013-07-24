Ext.define('Omni.model.SkuSupplier', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'sku_supplier_id',                      type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'sku_display',                          type: 'string'      },
    { name: 'sku_id',                               type: 'string'      },
    { name: 'supplier_display',                     type: 'string'      },
    { name: 'supplier_id',                          type: 'string'      },
    { name: 'supplier_item_identifier',             type: 'string'      },
    { name: 'description',                          type: 'string'      },
    { name: 'is_primary_supplier',                  type: 'boolean',    defaultValue: false                     },
    { name: 'is_manufacturer',                      type: 'boolean',    defaultValue: false                     },
    { name: 'is_discontinued',                      type: 'boolean',    defaultValue: false                     },
    { name: 'supplier_cost_units',                  type: 'float',      defaultValue: 0                         },
    { name: 'supplier_cost',                        type: 'float',      defaultValue: 0                         },
    { name: 'master_pack_units',                    type: 'float',      defaultValue: 0                         },
    { name: 'master_pack_uom_code',                 type: 'string'      },
    { name: 'master_pack_length',                   type: 'float',      defaultValue: 0                         },
    { name: 'master_pack_height',                   type: 'float',      defaultValue: 0                         },
    { name: 'master_pack_width',                    type: 'float',      defaultValue: 0                         },
    { name: 'master_pack_weight',                   type: 'float',      defaultValue: 0                         },
    { name: 'inner_pack_units',                     type: 'float',      defaultValue: 0                         },
    { name: 'inner_pack_uom_code',                  type: 'string'      },
    { name: 'inner_pack_length',                    type: 'float',      defaultValue: 0                         },
    { name: 'inner_pack_height',                    type: 'float',      defaultValue: 0                         },
    { name: 'inner_pack_width',                     type: 'float',      defaultValue: 0                         },
    { name: 'inner_pack_weight',                    type: 'float',      defaultValue: 0                         },
    { name: 'pack_type',                            type: 'string'      },
    { name: 'minimum_order_units',                  type: 'float',      defaultValue: 0                         },
    { name: 'minimum_order_value',                  type: 'float',      defaultValue: 0                         },
    { name: 'minimum_order_weight',                 type: 'float',      defaultValue: 0                         },
    { name: 'minimum_order_cube',                   type: 'float',      defaultValue: 0                         },
    { name: 'order_multiple_type',                  type: 'string'      },
    { name: 'extra_cost',                           type: 'float',      defaultValue: 0                         },
    { name: 'is_included_extra_cost',               type: 'boolean',    defaultValue: false                     },
    { name: 'cost_model_display',                   type: 'string'      },
    { name: 'cost_model_id',                        type: 'string'      },
    { name: 'origin_country',                       type: 'string'      },
    { name: 'freight_term',                         type: 'string'      },
    { name: 'is_conveyable_master_pack',            type: 'boolean',    defaultValue: false                     },
    { name: 'is_conveyable_inner_pack',             type: 'boolean',    defaultValue: false                     },
    { name: 'pallet_tie',                           type: 'float',      defaultValue: 0                         },
    { name: 'pallet_high',                          type: 'float',      defaultValue: 0                         },
    { name: 'pallet_container_display',             type: 'string'      },
    { name: 'pallet_container_id',                  type: 'string'      },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'sku_supplier_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SkuSupplier.create,
      read:     Omni.service.SkuSupplier.read,
      update:   Omni.service.SkuSupplier.update,
      destroy:  Omni.service.SkuSupplier.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

