Ext.define('Omni.model.SystemOption', {
  extend: 'Ext.data.Model',
  
  // AUTO-GENERATED REGION (Start)

  // VALIDATIONS (Start) =================================================================
  validations: [
    { type: 'presence', field: 'price_book_id' }
  ],
  // VALIDATIONS (End)

  // FIELDS (Start) ======================================================================
  fields:[
    { name: 'system_option_id',                     type: 'string'      },
    { name: 'display',                              type: 'string'      },
    { name: 'price_book_display',                   type: 'string'      },
    { name: 'price_book_id',                        type: 'string'      },
    { name: 'professional_discount_percent',        type: 'float',      defaultValue: 0 },
    { name: 'employee_discount_percent',            type: 'float',      defaultValue: 0 },
    { name: 'regular_sale_ruleset_display',         type: 'string'      },
    { name: 'regular_sale_ruleset_id',              type: 'string'      },
    { name: 'promo_sale_ruleset_display',           type: 'string'      },
    { name: 'promo_sale_ruleset_id',                type: 'string'      },
    { name: 'clearance_sale_ruleset_display',       type: 'string'      },
    { name: 'clearance_sale_ruleset_id',            type: 'string'      },
    { name: 'transfer_request_ruleset_display',     type: 'string'      },
    { name: 'transfer_request_ruleset_id',          type: 'string'      },
    { name: 'transfer_ship_ruleset_display',        type: 'string'      },
    { name: 'transfer_ship_ruleset_id',             type: 'string'      },
    { name: 'transfer_transit_ruleset_display',     type: 'string'      },
    { name: 'transfer_transit_ruleset_id',          type: 'string'      },
    { name: 'transfer_receive_ruleset_display',     type: 'string'      },
    { name: 'transfer_receive_ruleset_id',          type: 'string'      },
    { name: 'transfer_close_ruleset_display',       type: 'string'      },
    { name: 'transfer_close_ruleset_id',            type: 'string'      },
    { name: 'transfer_cancel_ruleset_display',      type: 'string'      },
    { name: 'transfer_cancel_ruleset_id',           type: 'string'      },
    { name: 'is_charge_ship_location',              type: 'boolean',    defaultValue: false },
    { name: 'transfer_gl_account_display',          type: 'string'      },
    { name: 'transfer_gl_account_id',               type: 'string'      },
    { name: 'discrepancy_gl_account_display',       type: 'string'      },
    { name: 'discrepancy_gl_account_id',            type: 'string'      },
    { name: 'overage_gl_account_display',           type: 'string'      },
    { name: 'overage_gl_account_id',                type: 'string'      },
    { name: 'shortage_gl_account_display',          type: 'string'      },
    { name: 'shortage_gl_account_id',               type: 'string'      },
    { name: 'sales_tax_gl_account_display',         type: 'string'      },
    { name: 'sales_tax_gl_account_id',              type: 'string'      },
    { name: 'consecutive_invalid_login_attempts',   type: 'integer',    defaultValue: 0 },
    { name: ':purchase_approval_1_maximum_amount',  type: 'integer' },
    { name: ':purchase_approval_2_maximum_amount',  type: 'integer' },
    { name: 'is_destroyed',                         type: 'boolean',    defaultValue: false }
  ],
  // FIELDS (End)


  // AUTO-GENERATED REGION (End)

  idProperty: 'system_option_id',

  proxy: {
    type: 'direct',
    api: {
      create:   Omni.service.SystemOption.create,
      read:     Omni.service.SystemOption.read,
      update:   Omni.service.SystemOption.update,
      destroy:  Omni.service.SystemOption.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  }
});

