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
      { name: 'allocation_profile_id',       type: 'string'   },
      { name: 'ordered_by_user_id',          type: 'string'   },
      { name: 'ship_date',                   type: 'date'     },
      { name: 'delivery_date',               type: 'date'     },
      { name: 'cancel_not_shipped_by_date',  type: 'date'     },
      { name: 'cancel_not_received_by_date', type: 'date'     },
      { name: 'approval_1_date',             type: 'date'     },
      { name: 'approval_2_date',             type: 'date'     },
      { name: 'approval_3_date',             type: 'date'     },
      { name: 'first_receipt_date',          type: 'date'     },
      { name: 'cancelled_date',              type: 'date'     },
      { name: 'payment_term',                type: 'string'   },
      { name: 'freight_term',                type: 'string'   },
      { name: 'ship_via',                    type: 'string'   },
      { name: 'fob_point',                   type: 'string'   },
      { name: 'is_phone_order',              type: 'boolean'  },
      { name: 'confirmed_by_user_id',        type: 'string'   },
      { name: 'master_purchase_id',          type: 'string'   },
      { name: 'carrier_supplier_id',         type: 'string'   },
      { name: 'is_special_order',            type: 'boolean'  },
      { name: 'is_ship_cancel',              type: 'boolean'  },
      { name: 'estimated_lead_time_days',    type: 'integer'  },
      { name: 'purchase_approver_1_user_id', type: 'string'   },
      { name: 'purchase_approver_2_user_id', type: 'string'   },
      { name: 'purchase_approver_3_user_id', type: 'string'   },
      { name: 'last_receipt_date',           type: 'date'     },
      { name: 'pay_to_supplier_id',          type: 'string'   },
      { name: 'ship_thru_supplier_id',       type: 'string'   },
      { name: 'supplier_address_1',          type: 'string'   },
      { name: 'supplier_address_2',          type: 'string'   },
      { name: 'supplier_address_3',          type: 'string'   },
      { name: 'supplier_address_4',          type: 'string'   },
      { name: 'supplier_city',               type: 'string'   },
      { name: 'supplier_state_code',         type: 'string'   },
      { name: 'supplier_zip',                type: 'string'   },
      { name: 'supplier_country',            type: 'string'   },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'purchase_approver_1_location_user_id', type: 'string'   },
      { name: 'purchase_approver_2_location_user_id', type: 'string'   },
      { name: 'purchase_approver_3_location_user_id', type: 'string'   },
      { name: 'audit_created_by',            type: 'string'   },
      { name: 'audit_updated_by',            type: 'string'   },
      { name: 'audit_created_at',            type: 'date'     },
      { name: 'audit_created_at',            type: 'date'     },
      { name: 'supplier_display',            type: 'string'   },
      { name: 'location_display',            type: 'string'   },
      { name: 'total_order_units',           type: 'string'   },
      { name: 'total_order_cost',            type: 'string'   },
      { name: 'is_update_all_details',       type: 'boolean'  },
      { name: 'is_update_blank_details',     type: 'boolean'  },

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