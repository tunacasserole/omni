Ext.define('Omni.model.Supplier', {
  extend: 'Ext.data.Model',

  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'supplier_name' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'supplier_id',                          type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'supplier_name',                        type: 'string'      },
    { name: 'supplier_nbr',                         type: 'string'      },
    { name: 'supplier_ucc_prefix',                  type: 'integer',    defaultValue: 0                         },
    { name: 'description',                          type: 'string'      },
    { name: 'short_name',                           type: 'string'      },
    { name: 'legacy_supplier_code',                 type: 'string'      },
    { name: 'duns_number',                          type: 'integer',    defaultValue: 0                         },
    { name: 'line_1',                               type: 'string'      },
    { name: 'line_2',                               type: 'string'      },
    { name: 'line_3',                               type: 'string'      },
    { name: 'line_4',                               type: 'string'      },
    { name: 'city',                                 type: 'string'      },
    { name: 'state_code',                           type: 'string'      },
    { name: 'zip',                                  type: 'string'      },
    { name: 'country',                              type: 'string'      },
    { name: 'latitude',                             type: 'string'      },
    { name: 'longitude',                            type: 'string'      },
    { name: 'phone',                                type: 'string'      },
    { name: 'fax',                                  type: 'string'      },
    { name: 'supplier_url',                         type: 'string'      },
    { name: 'default_ship_thru_supplier_display',   type: 'string'      },
    { name: 'default_ship_thru_supplier_id',        type: 'string'      },
    { name: 'shipping_point',                       type: 'string'      },
    { name: 'ship_via',                             type: 'string'      },
    { name: 'freight_term',                         type: 'string'      },
    { name: 'minimum_order_cost',                   type: 'float',      defaultValue: 0                         },
    { name: 'minimum_order_units',                  type: 'float',      defaultValue: 0                         },
    { name: 'minimum_weight',                       type: 'float',      defaultValue: 0                         },
    { name: 'minimum_cube',                         type: 'float',      defaultValue: 0                         },
    { name: 'is_ship_cancel',                       type: 'boolean',    defaultValue: false                     },
    { name: 'return_policy',                        type: 'string'      },
    { name: 'lead_time',                            type: 'integer',    defaultValue: 0                         },
    { name: 'safety_stock_days',                    type: 'float',      defaultValue: 0                         },
    { name: 'is_calculated_lead_time',              type: 'boolean',    defaultValue: false                     },
    { name: 'replenishment_method',                 type: 'string'      },
    { name: 'is_dynamic_safety_stock',              type: 'boolean',    defaultValue: false                     },
    { name: 'default_pay_to_supplier_display',      type: 'string'      },
    { name: 'default_pay_to_supplier_id',           type: 'string'      },
    { name: 'default_payment_term',                 type: 'string'      },
    { name: 'bank_name',                            type: 'string'      },
    { name: 'bank_account_name',                    type: 'string'      },
    { name: 'bank_account_type',                    type: 'string'      },
    { name: 'bank_routing_nbr',                     type: 'integer'     },
    { name: 'bank_account',                         type: 'string'      },
    { name: 'gl_account_display',                   type: 'string'      },
    { name: 'gl_account_id',                        type: 'string'      },
    { name: 'tax_identifier',                       type: 'integer',    defaultValue: 0                         },
    { name: 'is_required_1099',                     type: 'boolean',    defaultValue: false                     },
    { name: 'is_edi_capable',                       type: 'boolean',    defaultValue: false                     },
    { name: 'is_one_time',                          type: 'boolean',    defaultValue: false                     },
    { name: 'is_employee',                          type: 'boolean',    defaultValue: false                     },
    { name: 'is_payee',                             type: 'boolean',    defaultValue: false                     },
    { name: 'is_merchandise',                       type: 'boolean',    defaultValue: false                     },
    { name: 'is_supply',                            type: 'boolean',    defaultValue: false                     },
    { name: 'is_expense',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_creditor',                          type: 'boolean',    defaultValue: false                     },
    { name: 'is_freight',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_factory',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_3pl',                               type: 'boolean',    defaultValue: false                     },
    { name: 'is_agent',                             type: 'boolean',    defaultValue: false                     },
    { name: 'is_outbound_shipper',                  type: 'boolean',    defaultValue: false                     },
    { name: 'is_on_payment_hold',                   type: 'boolean',    defaultValue: false                     },
    { name: 'is_enabled',                           type: 'boolean',    defaultValue: false                     },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false                     }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'supplier_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.Supplier.create,
      read:     Omni.service.Supplier.read,
      update:   Omni.service.Supplier.update,
      destroy:  Omni.service.Supplier.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

