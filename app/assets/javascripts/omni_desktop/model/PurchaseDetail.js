Ext.define('Omni.model.PurchaseDetail', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'purchase_detail_id',          type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'purchase_id',                 type: 'string'   },
      { name: 'purchase_line_nbr',           type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'sku_id',                      type: 'string'   },
      { name: 'color_name',                  type: 'string'   },
      { name: 'sku_supplier_id',             type: 'string'   },
      { name: 'supplier_item_identifier',    type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'color_name',                  type: 'string'   },
      { name: 'size_name',                   type: 'string'   },
      { name: 'sku_alias',                   type: 'string'   },
      { name: 'allocation_profile_id',       type: 'string'   },
      { name: 'units_ordered',               type: 'decimal'  },
      { name: 'order_pack_size',             type: 'decimal'  },
      { name: 'order_pack_type',             type: 'string'   },
      { name: 'order_cost_units',            type: 'decimal'  },
      { name: 'order_multiple_type',         type: 'string'   },
      { name: 'order_multiple',              type: 'decimal'  },
      { name: 'selling_units_approved',      type: 'decimal'  },
      { name: 'selling_units_received',      type: 'decimal'  },
      { name: 'selling_units_cancelled',     type: 'decimal'  },
      { name: 'supplier_cost',               type: 'decimal'  },
      { name: 'invoice_cost',                type: 'decimal'  },
      { name: 'inventory_cost',              type: 'decimal'  },
      { name: 'extra_cost',                  type: 'decimal'  },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'purchase_display',            type: 'string'   },
      { name: 'sku_display',                 type: 'string'   },
      { name: 'sku_supplier_display',        type: 'string'   },
      { name: 'allocation_profile_display',  type: 'string'   },
    ],

  idProperty: 'purchase_detail_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.PurchaseDetail.create,
      read:    Omni.service.PurchaseDetail.read,
      update:  Omni.service.PurchaseDetail.update,
      destroy: Omni.service.PurchaseDetail.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});
