Ext.define('Omni.model.Purchase', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'purchase_id',                 type: 'string'   },
      { name: 'display',                     type: 'string'   },
      { name: 'purchase_order_nbr',          type: 'string'   },
      { name: 'supplier_id',                 type: 'string'   },
      { name: 'location_id',                 type: 'string'   },
      { name: 'purchase_type',               type: 'string'   },
      { name: 'purchase_source',             type: 'string'   },
      { name: 'state',                       type: 'string'   },
      { name: 'order_date',                  type: 'date'     },
      { name: 'ordered_by_user_id',          type: 'string'   },
      { name: 'ship_date',                   type: 'date'     },
      { name: 'delivery_date',               type: 'date'     },
      { name: 'cancel_not_shipped_by_date',  type: 'date'     },
      { name: 'cancel_not_received_by_date', type: 'date'     },
      { name: 'approval_date',               type: 'date'     },
      { name: 'first_receipt_date',          type: 'date'     },
      { name: 'cancelled_date',              type: 'date'     },
      { name: 'payment_term',                type: 'string'   },
      { name: 'freight_term',                type: 'string'   },
      { name: 'fob_point',                   type: 'string'   },
      { name: 'ship_via',                    type: 'string'   },
      { name: 'is_phone_order',              type: 'boolean'  },
      { name: 'confirmed_by_user_id',        type: 'string'   },
      { name: 'master_purchase_id',          type: 'string'   },
      { name: 'carrier_supplier_id',         type: 'string'   },
      { name: 'is_special_order',            type: 'boolean'  },
      { name: 'is_ship_cancel',              type: 'boolean'  },
      { name: 'estimated_lead_time_days',    type: 'integer'  },
      // { name: 'lead_time',                   type: 'decimal'  },
      { name: 'supplier_display',            type: 'string'   },
      { name: 'location_display',            type: 'string'   },

      { name: 'is_destroyed',                type: 'boolean'  }
    ],

  idProperty: 'purchase_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Purchase.create,
      read:    Omni.service.Purchase.read,
      update:  Omni.service.Purchase.update,
      destroy: Omni.service.Purchase.destroy
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